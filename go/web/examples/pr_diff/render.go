package toolkitdemo

import (
	"context"
	"fmt"
	"os"
	"strings"

	"github.com/samber/lo"

	"github.com/google/go-github/v47/github"
	log "github.com/sirupsen/logrus"
	"golang.org/x/oauth2"

	immgo "github.com/snapper-labs/immediate/go"
	intool "github.com/snapper-labs/immediate/go/web/intool"
	toolkit "github.com/snapper-labs/immediate/go/web/toolkit"
)

func Render(ui *immgo.RenderNode, startSha string, endSha string) {
	intool.Initialize(ui)
	toolkit.Initialize(ui, func() {})

	commits, setCommits := immgo.State(ui, []*CommitWithPulls{}, immgo.StateOptions{Key: "commits"})
	loading, setLoading := immgo.State(ui, false, immgo.StateOptions{Key: "loading"})

	container := intool.Container(ui)
	intool.Markdown(container, intool.MarkdownOptions{Content: "## PR Diff"})

	formLayout := toolkit.FormLayout(container)
	startCommit := toolkit.TextField(formLayout, "Start Commit")
	endCommit := toolkit.TextField(formLayout, "End Commit")
	toolkit.Button(formLayout, "Update", toolkit.ButtonOptions{OnClick: func() {
		if startCommit != "" && endCommit != "" {
			lo.Async(func() error {
				setLoading(true)
				commits := GetCommitInfo(startCommit, endCommit)
				log.Debugf("Got %d commits\n", len(commits))
				setCommits(commits)
				setLoading(false)
				return nil
			})
		}
	}})

	if *loading {
		toolkit.ProgressBar(container, toolkit.ProgressBarOptions{Indeterminate: true})
	} else {
		rowsData := [][]string{}
		for _, c := range *commits {
			prNum := ""
			descr := messagePrefix(*c.Commit.Commit.Message, 10)
			sha := *c.Commit.SHA
			if c.Pulls != nil && len(c.Pulls) > 0 {
				prNum = fmt.Sprintf("%d", *c.Pulls[0].Number)
				descr = *c.Pulls[0].Title
			}
			rowData := []string{sha[:8], prNum, descr}
			rowsData = append(rowsData, rowData)
		}

		toolkit.Grid(container, toolkit.GridOptions{
			Columns: []string{"SHA", "PR", "Description"},
			Rows:    rowsData,
		})
	}
}

type CommitWithPulls struct {
	Commit *github.RepositoryCommit
	Pulls  []*github.PullRequest
}

func GetCommitInfo(startSha string, endSha string) []*CommitWithPulls {
	var commitInfo []*CommitWithPulls
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: os.Getenv("GITHUB_API_KEY")},
	)
	tc := oauth2.NewClient(context.TODO(), ts)
	client := github.NewClient(tc)

	commitWithPulls, err := ListCommitWithPulls(client, startSha, endSha)
	if err != nil {
		panic(err)
	}
	commitInfo = commitWithPulls

	return commitInfo
}

func ListCommitWithPulls(client *github.Client, startSha string, endSha string) ([]*CommitWithPulls, error) {
	commits, err := ListCommits(client, startSha, endSha)
	if err != nil {
		panic(fmt.Sprintf("error: %#v", err))
	}

	commitWithPulls := []*CommitWithPulls{}
	for _, c := range commits {
		pulls, err := ListPullsForCommit(client, *c.SHA)
		if err != nil {
			return nil, err
		}
		commitWithPulls = append(commitWithPulls, &CommitWithPulls{Commit: c, Pulls: pulls})
	}
	return commitWithPulls, nil
}

func messagePrefix(message string, n int) string {
	prefixLen := len(message)
	index := strings.Index(message, "\n")
	if index > -1 {
		prefixLen = index
	}
	return message[:prefixLen]
}

func ListCommits(client *github.Client, startSha string, endSha string) ([]*github.RepositoryCommit, error) {
	opts := github.CommitsListOptions{
		SHA: endSha,
	}
	commits, _, err := client.Repositories.ListCommits(context.TODO(), "Snapper-Labs", "immediate", &opts)
	if err != nil {
		return nil, err
	}

	log.Debugf("Got %d commits\n", len(commits))

	return FilterCommitRange(commits, startSha, endSha), nil
}

func ListPullsForCommit(client *github.Client, sha string) ([]*github.PullRequest, error) {
	pulls, _, err := client.PullRequests.ListPullRequestsWithCommit(context.TODO(), "Snapper-Labs", "immediate", sha, nil)
	if err != nil {
		return nil, err
	}
	return pulls, nil
}

func FilterCommitRange(commits []*github.RepositoryCommit, startSha string, endSha string) []*github.RepositoryCommit {
	diffCommits := []*github.RepositoryCommit{}
	for _, commit := range commits {
		diffCommits = append(diffCommits, commit)
		if *commit.SHA == startSha {
			break
		}
	}
	return diffCommits
}
