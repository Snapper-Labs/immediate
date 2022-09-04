// Load the toolkit
import "./src/index"


const myElement = document.createElement('itk-markdown');
myElement.markdown = `
# Hello world

This is some markdown.

## THis is a subheading

Testing more stuff

  - bullet points
  - another bullet

etc
`

document.body.appendChild(myElement);
