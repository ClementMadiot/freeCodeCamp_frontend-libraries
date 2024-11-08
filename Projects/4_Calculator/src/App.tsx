import { useCallback, useEffect, useState } from "react";
import * as math from "mathjs";
// import Components
import Screen from "./components/Screen";
import Button from "./components/Button";

function App() {
  const [userValue, setUserValue] = useState("0");
  const [reset, setreset] = useState(true);

  const isOperator = (key: string) => {
    return ["+", "-", "*", "/"].includes(key);
  };

  // Equal the result
  const handleEqual = useCallback(() => {
    if (userValue === "0") {
      alert(`not allow to start with =`);
      return;
    }
    const result = math.evaluate(userValue);
    setUserValue(result.toString());
  }, [userValue]);

  // Clear the input
  const handleClear = useCallback(() => {
    setreset(reset);
    setUserValue("0");
  }, [reset]);

  // onClick
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

  useEffect(() => {
    // not allow to start with multiple 0
    if (userValue === "00") {
      return setUserValue("0");
    }

    // keyboard
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key.match(/[0-9]/) || isOperator(key)) {
        e.preventDefault();
        setUserValue((prevValue) =>
          prevValue === "0" ? key : prevValue + key
        );
      } else if (key === "Enter") {
        e.preventDefault();
        handleEqual();
      } else if (key === "Backspace") {
        e.preventDefault();
        setUserValue((prevValue) => prevValue.slice(0, -1) || "0");
      } else if (key === "Escape") {
        e.preventDefault();
        handleClear();
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [userValue, reset, handleClear, handleEqual]);

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
