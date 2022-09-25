package toolkitdemo

import (
	"context"
	"fmt"
	"os"
	"strings"

	"github.com/google/go-github/v47/github"
	"golang.org/x/oauth2"

	immgo "github.com/snapper-labs/immediate/go"
	intool "github.com/snapper-labs/immediate/go/web/intool"
)

func Render(ui *immgo.RenderNode) {
	intool.Initialize(ui)
	container := intool.Container(ui)
	intool.Markdown(container, intool.MarkdownOptions{Content: "## PR Diff"})
	grid := intool.Grid(container)
	headerRow := intool.GridRow(grid)
	intool.Markdown(intool.GridColumn(headerRow), intool.MarkdownOptions{Content: "**SHA**"})
	intool.Markdown(intool.GridColumn(headerRow), intool.MarkdownOptions{Content: "**PR**"})
	intool.Markdown(intool.GridColumn(headerRow), intool.MarkdownOptions{Content: "**Description**"})

	commits := GetCommitInfo()
	for _, c := range commits {
		r := intool.GridRow(grid)

		prNum := ""
		descr := messagePrefix(*c.Commit.Commit.Message, 10)
		sha := *c.Commit.SHA
		if c.Pulls != nil && len(c.Pulls) > 0 {
			prNum = fmt.Sprintf("%d", *c.Pulls[0].Number)
			descr = *c.Pulls[0].Title
		}

		intool.Markdown(intool.GridColumn(r), intool.MarkdownOptions{Content: sha[:8]})
		intool.Markdown(intool.GridColumn(r), intool.MarkdownOptions{Content: prNum})
		intool.Markdown(intool.GridColumn(r), intool.MarkdownOptions{Content: descr})
	}
}

type CommitWithPulls struct {
	Commit *github.RepositoryCommit
	Pulls  []*github.PullRequest
}

var commitInfo []*CommitWithPulls

func GetCommitInfo() []*CommitWithPulls {
	if commitInfo == nil {
		startSha := "10b254194b1758d6cccd5df4125da7e28fa8f3bd"
		endSha := "9343a90abdfd7ac813c6e119618736e62fd5c3df"

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
	}

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
