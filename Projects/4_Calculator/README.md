<div align="center">
  <a href="" target="_blanck"><img src="./public" alt=""></a>
   <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
</div>
  <h3 align="center">Calculator</h3>
</div>

## <br /> 📋 <a name="table">Summary</a>

- ✨ [Introduction](#introduction)
- 🛠 [Technology Used](#tech-stack)
- 🚀 [Launch App](#launch-app)

## <br /> <a name="introduction">✨ Introduction</a>

Fourth project FreeCodeCamp to valid the certification "Front End Development Libraries"

**User Story :**

- User Story #1: My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".

- User Story #2: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".

- User Story #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".

- User Story #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".

- User Story #5: My calculator should contain a clickable element with an id="clear".

- User Story #6: My calculator should contain an element to display values with a corresponding id="display".

- User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.

- User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.

- User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

- User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

- User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

- User Story #12: I should be able to perform any operation (+, -, \*, /) on numbers containing decimal points.

- User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + _ 7 = is entered, the result should be 35 (i.e. 5 _ 7); if 5 _ - 5 = is entered, the result should be -25 (i.e. 5 _ (-5)).

- User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

- User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

<!--! #9?, #12 ?, #13, #14 -->

## <br /> <a name="tech-stack">🛠 Technology Used</a>

- [TailwindCSS](https://tailwindcss.com/docs/installation)
  Tailwind CSS is a valuable tool for developers who want to build modern, responsive, and visually appealing websites without sacrificing development speed.

- [mathjs](https://mathjs.org/)
  Math.js is an extensive math library for JavaScript and Node.js. It features a flexible expression parser with support for symbolic computation, comes with a large set of built-in functions and constants, and offers an integrated solution to work with different data types like numbers, big numbers, complex numbers, fractions, units, and matrices. Powerful and easy to use.

## <br /> <a name="launch-app">🚀 Launch App</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

> [!NOTE]
> Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) _(Node Package Manager)_

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

# Code

Should use tofixed method to rouding the result

```jsx
if (val === ".") {
  // split by operators and get last number
  const lastNumber = calcul.split(/[-+/*]/g).pop();
  // if last number already has a decimal., don't add another
  if (lastNumber?.includes(".")) return;
  setCalcul(calcul + val);
}
```
