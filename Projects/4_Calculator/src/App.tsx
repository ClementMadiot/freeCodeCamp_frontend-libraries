import { useCallback, useEffect, useState } from "react";
import * as math from "mathjs";
// import Components
import Screen from "./components/Screen";
import Button from "./components/Button";

function App() {
  const [userValue, setUserValue] = useState("");
  const [calcul, setCalcul] = useState("");

  // check Operator
  const isOperator = useCallback((val: string) => {
    return /[+\-*/]/.test(val);
  }, []);

  // onClick
  const handleClick = (val: string) => {
    switch (val) {
      // clear
      case "AC":
        setUserValue("0");
        setCalcul("");
        return;
        break;
      case "=":
        handleEqual();
        return;
        break;
      // Decimal
      case ".":
        if (val === ".") {
          // split by operators and get last number
          const lastNumber = calcul.split(/[-+/*]/g).pop();
          // if last number already has a decimal., don't add another
          if (lastNumber?.includes(".")) return;
          setCalcul(calcul + val);
        }
        break;
      default:
        break;
    }
    // Delete a zero if number is higher
    if (userValue === "0" && val > "0") {
      setUserValue(val);
      setCalcul(val);
      return;
    }

    setUserValue(userValue + val);
  };

  // Equal the result
  const handleEqual = useCallback(() => {
    if (userValue === "") return;

    try {
      // if last character is an operator, do nothing
      if (isOperator(calcul.charAt(calcul.length - 1))) return;
      const result = math.evaluate(userValue);
      setUserValue(result.toString());
      setCalcul("");
    } catch (error) {
      setCalcul(`${error}`);
    }
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

      if (key.match(/[0-9]/) || isOperator(key)) {
        e.preventDefault();
        setUserValue((prevValue) =>
          prevValue === "0" ? key : prevValue + key
        );
      }

      switch (key) {
        case "Enter":
          handleEqual();
          break;
        case "Backspace":
          setUserValue((prevValue) => prevValue.slice(0, -1) || "0");
          break;
        case "Escape":
          setUserValue("0");
          setCalcul("");
          return;
          break;
        default:
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [userValue, handleEqual, isOperator]);

  return (
    <section className="flex text-center flex-col max-w-[340px] mx-auto">
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
