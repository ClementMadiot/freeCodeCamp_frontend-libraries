import { useEffect, useState } from "react";
import Screen from "./components/Screen";
import Button from "./components/Button";

const operators = ["AC", "/", "*", "+", "-", "="];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");
  const [calculatorData, setCalculatorData] = useState("");

  const handleSubmit = () => {
    let tempData = calculatorData;
    const lastChar = calculatorData.charAt(calculatorData.length - 1);
    
    if (operators.includes(lastChar)) {
      tempData = calculatorData.slice(0, -1);
    }
    
    const total = eval(tempData);
    setInput(`${total}`);
    setOutput(`${total}`);
    setCalculatorData(`${total}`);
  };
  const handleClear = () => {
    setInput("0");
    setOutput("");
    setCalculatorData("");
  };
  const handleNumbers = (value: string | number) => {
    if (!calculatorData.length) {
      setInput(`${value}`);
      setCalculatorData(`${value}`);
    } else {
      if (value === 0 && (calculatorData === "0" || input === "0")) {
        setCalculatorData(`${calculatorData}`);
      } else {
        const lastChat = calculatorData.charAt(calculatorData.length - 1);
        const isLastChatOperator = operators.includes(lastChat);
        setInput(isLastChatOperator ? `${value}` : `${input}${value}`);
        setCalculatorData(`${calculatorData}${value}`);
      }
    }
  };
  const dotOperator = () => {
    const lastChat = calculatorData.charAt(calculatorData.length - 1);
    if (!calculatorData.length) {
      setInput("0.");
      setCalculatorData("0.");
    } else {
      if (operators.includes(lastChat)) {
        setInput("0.");
        setCalculatorData(`${calculatorData} 0.`);
      } else {
        setInput(
          lastChat === "." || input.includes(".") ? `${input}` : `${input}.`
        );
        const formattedValue =
          lastChat === "." || input.includes(".")
            ? `${calculatorData}`
            : `${calculatorData}.`;
        setCalculatorData(formattedValue);
      }
    }
  };
  const handleOperators = (value: string | number) => {
    if (calculatorData.length) {
      setInput(`${value}`);
      console.log({ calculatorData });
      const beforeLastChat = calculatorData.charAt(calculatorData.length - 2);
      const beforeLastChatIsOperator = operators.includes(beforeLastChat);
      const lastChat = calculatorData.charAt(calculatorData.length - 1);
      const lastChatIsOperator = operators.includes(lastChat);
      const validOp = value === "x" ? "*" : value;
      if (
        (lastChatIsOperator && value !== "-") ||
        (beforeLastChatIsOperator && lastChatIsOperator)
      ) {
        if (beforeLastChatIsOperator) {
          const updatedValue = `${calculatorData.substring(
            0,
            calculatorData.length - 2
          )}${value}`;
          setCalculatorData(updatedValue);
        } else {
          setCalculatorData(
            `${calculatorData.substring(
              0,
              calculatorData.length - 1
            )}${validOp}`
          );
        }
      } else {
        setCalculatorData(`${calculatorData}${validOp}`);
      }
    }
  };

  const handleClick = (value: string | number) => {
    const number = numbers.find((num) => num === value);
    const operator = operators.find((op) => op === value);
    switch (value) {
      case "=":
        handleSubmit();
        break;
      case "AC":
        handleClear();
        break;
      case number:
        handleNumbers(value);
        break;
      case ".":
        dotOperator();
        break;
      case operator:
        handleOperators(value);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const handleOutput = () => {
      setOutput(calculatorData);
    };
    handleOutput();
  }, [calculatorData]);
  return (
    <section className="flex text-center flex-col max-w-[340px] mx-auto">
      <h1 className="my-6 ">Calculator</h1>


        <div className="bg-black p-2 border border-gold min-w-[340px] m-auto">
          <Screen input={input} output={output} />
          <Button handleClick={handleClick} />
        </div>

      <p className="my-6 leading-loose">
        Designed and Coded By
        <br />
        <span className="text-white-200">Clément Madiot</span>
      </p>
    </section>
  );
};

export default App;
