import { useCallback, useEffect, useState } from "react";
import * as math from "mathjs";
// import Components
import Screen from "./components/Screen";
import Button from "./components/Button";

const endsWithOperator = /[+\-*/]$/;
const endsWithNegativeSign = /\d[+\-*/]{1}-$/;

function App() {
  const [userValue, setUserValue] = useState("0");
  const [reset, setreset] = useState(true);

  // check Operator
  const isOperator = (key: string) => {
    return ["+", "-", "*", "/"].includes(key);
  };

  // Handle the last operators
  const lastOperator = (val: string) => {
    console.log(isOperator(val));
    if (isOperator(val)) {
      if (
        val === "*" &&
        endsWithOperator.test(userValue) &&
        !userValue.endsWith("-")
      ) {
        setUserValue(userValue.slice(0, -1) + val);
      } else if (endsWithOperator.test(userValue)) {
        if (endsWithNegativeSign.test(userValue + val)) {
          setUserValue(userValue + val);
        } else {
          setUserValue(userValue.slice(0, -1) + val);
        }
      } else {
        setUserValue(userValue + val);
      }
      return true;
    }
    return false;
  };

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

    // Handle the last operators
    if (lastOperator(val)) {
      return;
    }

    console.log(isOperator(val));

    setreset(false);
    setUserValue(userValue + val);
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

  useEffect(() => {
    // not allow to start with multiple 0
    if (userValue === "00") {
      return setUserValue("0");
    }

    // keyboard
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      
      // Ignore function keys (F1-F12)
      if (key.startsWith("F") && !isNaN(Number(key.slice(1)))) {
        return;
      }
      // Handle the last operators
      if (lastOperator(key)) {
        return;
      }

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
  }, [userValue, reset, handleClear, handleEqual, lastOperator]);

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
