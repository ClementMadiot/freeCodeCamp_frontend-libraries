import { useState } from "react";
import * as math from "mathjs";
// import Components
import Screen from "./components/Screen";
import Button from "./components/Button";

interface ButtonProps {
  handleClick: (val: string) => void;
  children: string;
}

function App() {
  const [userValue, setUserValue] = useState("");

  const handleClick = (val: string) => {
    setUserValue(userValue + val);
  };

  const handleEqual = () => {
    setUserValue(math.evaluate(userValue));
  };

  const handleClear = () => {
    setUserValue("");
  };

  // const calcul = (a: number, b: number, op: string) => {
  //   switch (op) {
  //     case "+":
  //       return a + b;
  //       break;
  //     case "-":
  //       return a - b;
  //     case "*":
  //       return a * b;
  //       break;
  //     case "%":
  //       return a / b;
  //       break;
  //   }
  // };

  return (
    <section className="flex justify-center text-center flex-col">
      <h1 className="my-6 ">Calculator</h1>
      <article className="bg-black p-2 border border-gold min-w-[340px] m-auto">
        <Screen display={userValue} />
        <Button handleClick={handleClick} handleClear={handleClear} handleEqual={handleEqual} />
      </article>
      <p className="my-6 leading-loose">
        Designed and Coded By
        <br />
        <span className="text-white-200">Clément Madiot</span>
      </p>
    </section>
  );
}

export default App;

// if (event.value) {
//   setUserValue(event.value.toString());
// } else {
//   console.log("error value");
// }

// const valueAsNumber = Number(event.value);
// console.log(calcul(valueAsNumber, 2, event.id));
