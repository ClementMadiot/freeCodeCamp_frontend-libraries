import { useCallback, useEffect, useState } from "react";
import * as math from "mathjs";
// import Components
import Screen from "./components/Screen";
import Button from "./components/Button";

const endsWithOperator = /[+\-*/]$/;
const endsWithNegativeSign = /\d[+\-*/]{1}-$/;

function App() {
  const [userValue, setUserValue] = useState("");
  const [calcul, setCalcul] = useState("");

  // check Operator
  const isOperator = useCallback((val: string) => {
    return /[+\-*/]/.test(val);
  }, []);

  // Handle the last operators
  const lastOperator = useCallback(
    (val: string) => {
      if (isOperator(val)) {
        // prettier-ignore
        if( val === "*" && endsWithOperator.test(userValue) && !userValue.endsWith("-")) {
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
    },
    [userValue, isOperator]
  );

  // onClick
  const handleClick = (val: string) => {
    // clear
    if (val === "AC") {
      handleClear();
      return;
    }
    // Equal
    if (val === "=") {
      handleEqual();
      return;
    }
    // Delete a zero if number is higher
    if (userValue === "0" && val > "0") {
      setUserValue(val);
      setCalcul(val)
      return;
    }

    // Not allow multiple Decimal
    if (val === ".") {
      // split by operators and get last number
      const lastNumber = calcul.split(/[-+/*]/g).pop();
      // if last number already has a decimal., don't add another
      if (lastNumber?.includes(".")) return;
      setCalcul(calcul + val);
    }

    // Handle the last operators
    if (lastOperator(val)) {
      return;
    }

    setUserValue(userValue + val);
  };

  // Clear the input
  const handleClear = useCallback(() => {
    setUserValue("0");
    setCalcul("");
    // 9, 12, 13, 14
  }, []);

  // Equal the result
  const handleEqual = useCallback(() => {
    if (userValue === "") return;
    // if last character is an operator, do nothing
    if (isOperator(calcul.charAt(calcul.length - 1))) return;

    const result = math.evaluate(userValue);
    setUserValue(result.toString());
    setCalcul("");
  }, [isOperator, calcul, userValue]);

  useEffect(() => {
    // not allow to start with multiple 0
    if (userValue === "00") {
      return setUserValue("0");
    }

    //* keyboard
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
      } else if (key === ".") {
        console.log(".");
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [userValue, handleClear, handleEqual, lastOperator, isOperator]);

  return (
    <section className="flex justify-center text-center flex-col">
      <h1 className="my-6 ">Calculator</h1>
      <article className="bg-black p-2 border border-gold min-w-[340px] m-auto">
        <Screen display={userValue} calcul={calcul} />
        <Button handleClick={handleClick} />
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
