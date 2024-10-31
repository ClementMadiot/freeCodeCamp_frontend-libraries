import { useState } from "react";
import "./style/App.scss"

function App() {
  const [markdownText, setMarkdownText] = useState("")

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
          {/* <ReactMarkdown>{markdownText}</ReactMarkdown> */}
        </article>
      </article>
    </main>
  )
}

export default App
