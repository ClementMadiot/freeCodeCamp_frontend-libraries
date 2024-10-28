<div align="center" class="container">
<picture>
  <a href=""><img alt="Validation-bundle-fcc" src="./public/validation_bundle-fcc.png"></a>
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

First project FreeCodeCamp to valid the certification "Front End Development Libraries" is to Build a Random Quote Machine

**User Story :**

- User Story #1: I can see a wrapper element with a corresponding id="quote-box".

- User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

- User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

- User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

- User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

- User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

- User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

- User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

- User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

- User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

- User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

## <br /> <a name="tech-stack">🛠 Technology Used</a>

- [Sass](https://sass-lang.com/install/)
Providing advanced features like variables, nesting, and mixins for more efficient and maintainable styling. Sass allows developers to write more complex and reusable CSS, reducing the amount of duplicate code and simplifying the design process.

- [font-awesome](https://fontawesome.com/)
is the Internet's icon library and toolkit, used by millions of designers, developers, and content creators.

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
@import url('https://fonts.googleapis.com/css?family=Raleway:400,500');
*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@mixin paragraph($font-weight, $font-size) {
  font-weight: $font-weight;
  font-size: $font-size;
}

@mixin flex($justify-content, $flex-direction) {
  display: flex;
  justify-content: $justify-content;
  align-items: center;
  flex-direction: $flex-direction;
}

body {
  font-family: "Raleway", sans-serif;
}
a {
  text-decoration: none;
  color: whitesmoke;
  cursor: pointer;
  @include paragraph(500, 13px);
}

main {
  @include flex(center, column);
  margin-top: 5rem;
  padding: 2rem;
}

.quote-box {
  @include flex(center, column);
  background-color: white;
  padding: 40px 50px;
  border-radius: 3px;
  max-width: 550px;
  text-align: center;

  .text {
    @include paragraph(500, 28px);
    margin: 1rem 0 1rem 1rem;

    #span-quote {
      margin-right: 0.5rem;
    }
  }

  .author {
    @include paragraph(400, 16px);
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .button-box {
    @include flex(space-between, row);
    width: 100%;
    margin-top: 1.5rem;
    button {
      color: whitesmoke;
      padding: 10px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      @include paragraph(400, 19px);
    }
  }
  #reseau {
    display: flex;
    gap: 10px;
    button {
      padding: 10px 1rem;
    }
  }
}

.link {
  margin-top: 1rem;
}

```
</details>


