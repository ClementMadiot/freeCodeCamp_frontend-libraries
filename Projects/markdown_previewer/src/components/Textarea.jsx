import React from "react";

function Textarea() {
  return (
    <article class="textarea-content">
      <div class="label-content">
        <div class="label-start">
          <i class="fa-brands fa-free-code-camp"></i>
          <label for="editor">Editor</label>
        </div>
        <div class="btn-popUp">
          <i class="fa-solid fa-maximize"></i>
          <i class="fa-solid fa-up-right-and-down-left-from-center hidden"></i>
        </div>
      </div>
      <textarea name="editor" id="editor" type="text"></textarea>
    </article>
  );
}

export default Textarea;
