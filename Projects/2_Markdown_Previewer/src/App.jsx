import { useState } from "react";
import ReactMarkdown from "react-markdown";

const markdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff:
        
Heres some code, \`<div></div>\`, between 2 backticks.
        
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
        
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
    
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!
    
And if you want to get really crazy, even tables:
    
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
        
`;


function App() {
  const [markdownText, setMarkdownText] = useState(markdown)

  return (
    <main>
      <div className="grid-background">
        <div className="gradient"></div>
      </div>
      <article className="textarea-content">
        <div className="label-content">
          <div className="label-start">
            <i className="fa-brands fa-free-code-camp"></i>
            <label htmlFor="editor">Editor</label>
          </div>
          <div className="btn-popUp">
            <i className="fa-solid fa-maximize"></i>
            <i className="fa-solid fa-up-right-and-down-left-from-center hidden"></i>
          </div>
        </div>
        <textarea
          name="editor"
          id="editor"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
        ></textarea>
      </article>

      <article className="preview-content">
        <div className="label-content">
          <div className="label-start">
            <i className="fa-brands fa-free-code-camp"></i>
            <label htmlFor="editor">Previewer</label>
          </div>
          <div className="btn-popUp">
            <i className="fa-solid fa-maximize"></i>
            <i className="fa-solid fa-up-right-and-down-left-from-center hidden"></i>
          </div>
        </div>
        <article id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </article>
      </article>
    </main>
  )
}

export default App
