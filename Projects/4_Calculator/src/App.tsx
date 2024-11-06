import { useState } from "react";
import * as math from "mathjs";
// import Components
import Screen from "./components/Screen";
import Button from "./components/Button";

function App() {
  const [userValue, setUserValue] = useState("0");
  const [reset, setreset] = useState(true);

  if (userValue === "00") {
    console.error("not allow to start with multiple zero");
    return setUserValue("0");
  }

  // if (reset === true && val === "*" || val === "/" || val === "+" || val === "-") {
  //   alert(`not allow to start with ${val}`);
  //   return;
  // }

  const handleClick = (val: string) => {
    // Delete a zero if number is higher
    if (userValue === "0" && val > "0") {
      setUserValue(val);
      return;
    }

    // Not allow multiple decimal
    const lastNumber = userValue.split(/[+\-*/]/).pop();
    if (lastNumber && /[.]/.test(lastNumber) && val === ".") {
      return;
    }

    setreset(false);
    setUserValue(userValue + val);
  };

  const handleEqual = () => {
    if (userValue === "0") {
      alert(`not allow to start with =`);
      return;
    }
    const result = math.evaluate(userValue);
    setUserValue(result.toString());
  };

  const handleClear = () => {
    setreset(reset);
    setUserValue("0");
  };

  return (
    <section className="flex justify-center text-center flex-col">
      <h1 className="my-6 ">Calculator</h1>
      <article className="bg-black p-2 border border-gold min-w-[340px] m-auto">
        <Screen display={userValue} />
        <Button
          handleClick={handleClick}
          handleClear={handleClear}
          handleEqual={handleEqual}
        />
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
