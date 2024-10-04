import React from 'react'

function Previewer() {
  return (
    <article class="preview-content">
        <div class="label-content">
          <div class="label-start">
            <i class="fa-brands fa-free-code-camp"></i>
            <label for="editor">Previewer</label>
          </div>
          <div class="btn-popUp">
            <i class="fa-solid fa-maximize"></i>
            <i
              class="fa-solid fa-up-right-and-down-left-from-center hidden"
            ></i>
          </div>
        </div>
        <article id="preview"></article>
      </article>
  )
}

export default Previewer