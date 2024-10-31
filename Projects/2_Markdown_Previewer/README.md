<div align="center" class="container">
<picture>
  <img alt="FreeCodeCamp" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg">
</picture>
<h3  align="center">Markdown Previewer</h3>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB"  alt="react.js" />
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF"  alt="vite" />
    <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white" height="28px" alt="sass" />
  </div>
</div>

## <br /> 📋 <a name="table">Summary</a>

- ✨ [Introduction](#introduction)
- 🛠 [Technology Used](#tech-stack)
- 🚀 [Launch App](#launch-app)
- 🎨 [Styling](#style)

## <br /> <a name="introduction">✨ Introduction</a>

Second project FreeCodeCamp to valid the certification "Front End Development Libraries"

**User Story :**

- User Story #1: I can see a textarea element with a corresponding id="editor".

- User Story #2: I can see an element with a corresponding id="preview".

- User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

- User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

- User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

- User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

## <br /> <a name="tech-stack">🛠 Technology Used</a>

- [sass](https://sass-lang.com/install/)
Providing advanced features like variables, nesting, and mixins for more efficient and maintainable styling. Sass allows developers to write more complex and reusable CSS, reducing the amount of duplicate code and simplifying the design process.

-[sass-embedded](https://www.npmjs.com/package/sass-embedded)
This package provides the same JavaScript API as the sass package, and can be used as a drop-in replacement, Unlike the sass package, the asynchronous API in sass-embedded will generally be faster than the synchronous API since the Sass compilation logic is happening in a different process.

- [react-markdown](https://www.npmjs.com/package/react-markdown/v/8.0.6)
React component that can be given a string of markdown that it’ll safely render to React elements. You can pass plugins to change how markdown is transformed to React elements and pass components that will be used instead of normal HTML elements.

## <br /> <a name="launch-app">🚀 Launch App</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

>[!NOTE]
> Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone {git remote URL}
cd {git project..}
```

**Installation**

> After cloning the repository, run the command `npm i` or `yarn i` to install the project's dependencies.

_npm_

```
npm install 
```

_yarn_

```
yarn install
```

> Once the dependencies are installed, start the project with the command `npm run dev`.

## <br /> <a name="style">🎨 Styling</a>

Global styling are defined using **SCSS**

<details>
<summary><code>App.scss</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

:root {
  --font-Russo: "Russo One", sans-serif;
  --radicalGradient-pattern: radial-gradient(
      at 27% 37%,
      hsla(215, 98%, 61%, 1) 0px,
      transparent 0%
    ),
    radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
    radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
    radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),
    radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
    radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%);
  --gradient-label: rgb(208, 252, 252);
  --preview-border: #224b4b;
}

*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
main {
  padding: 1rem 4rem;
}

@mixin flex {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

@mixin paragraph($font-weight, $font-size) {
  font-weight: $font-weight;
  font-size: $font-size;
}

@mixin border($background-color) {
  border: 1px solid black;
  background-color: $background-color;
}

.grid-background {
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 120px 24px 160px 24px;
  pointer-events: none;
  z-index: -10;
  &:before {
    position: absolute;
    content: "";
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
  }

  &:after {
    content: "";
    background-image: url("./assets/grid.svg");
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0.4;
    filter: invert(1);
  }

  .gradient {
    height: fit-content;
    z-index: 3;
    width: 100%;
    max-width: 640px;
    background-image: var(--radicalGradient-pattern);
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    filter: blur(100px) saturate(150%);
    top: 80px;
    opacity: 0.15;
  }
}

// textarea

.textarea-content {
  @include flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 1rem auto 2rem;
  padding: 0 2rem;

  textarea {
    width: 100%;
    min-height: 200px;
    background: rgba(252, 252, 252, 0.526);
  }
}

.label-content {
  @include border(var(--gradient-label));
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 0.3rem 1rem;

  .label-start {
    display: flex;
    justify-content: start;
    gap: 10px;
    label {
      @include paragraph(400, 16px);
      font-family: var(--font-Russo);
    }
  }

  .btn-popUp {
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      color: rgb(100, 100, 100);
    }
  }
  .hidden {
    display: none;
  }
}

// preview
.preview-content {
  @include flex();
  align-items: center;
  @include border(white);
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

#preview {
  padding: 1rem 1.5rem;
  background-color: rgb(216, 246, 241);

  img {
    display: block;
    width: 90%;
    margin: 1.5rem auto;
  }

  h1 {
    font-size: 32px;
    border-bottom: 2px solid var(--preview-border);
  }
  h1,
  h2,
  h3 {
    border-bottom: 2px solid var(--preview-border);
    margin: 1.5rem 0;
    line-height: 1.5;
  }

  code {
    background-color: white;
    font-weight: bold;
    padding: 3px;
  }
  p {
    margin: 1rem 0rem;
  }
  pre {
    display: block;
    overflow: auto;
    background: white;
    padding: 5px;
    line-height: 1.2;
  }
  blockquote {
    border-left: 3px solid var(--preview-border);
    color: var(--preview-border);
    padding-left: 5px;
    margin-left: 25px;
  }
  table {
    border-collapse: collapse;
    margin: 1rem 0;
  }
  td,
  th {
    border: 2px solid var(--preview-border);
    padding-left: 5px;
    padding-right: 5px;
  }
  ol {
    margin: 1rem 0;
  }
}
```
</details>

