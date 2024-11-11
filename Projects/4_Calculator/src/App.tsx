import { useEffect, useState } from "react";

// import Components
import Screen from "./components/Screen";
import Button from "./components/Button";

const operators = ["AC", "/", "*", "+", "-", "="];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");
  const [calculatorData, setCalculatorData] = useState("");

  const handleEqual = () => {
    console.log("handleEqual", calculatorData);
    const total = eval(calculatorData);
    setInput(`${total}`);
    setOutput(`${total}`);
    setCalculatorData(`${total}`);
  };

  const handleClear = () => {
    setInput("0");
    setOutput("");
    setCalculatorData("");
  };

  const handleNumbers = (val: string ) => {
    if (!calculatorData.length) {
      setInput(`${val}`);
      setCalculatorData(`${val}`);
    } else {
      if (val === "0" && (calculatorData === "0" || input === "0")) {
        setCalculatorData(`${calculatorData}`);
      } else {
        const lastChat = calculatorData.charAt(calculatorData.length - 1);
        const isLastChatOperator = operators.includes(lastChat);
        setInput(isLastChatOperator ? `${val}` : `${input}${val}`);
        setCalculatorData(`${calculatorData}${val}`);
      }
    }
  };

  const dotOperation = () => {
    const lastChat = calculatorData.charAt(calculatorData.length - 1)
    if(!calculatorData.length) {
      setInput('0.')
      setCalculatorData('0.')
    } else {
      if(operators.includes(lastChat)) {
        setInput("0.")
        setCalculatorData(`${calculatorData} 0.`)
      } else {
        setInput(lastChat === '.' || input.includes(".") ? `${input}` : `${input}.`)
        const formattedValue = lastChat === '.' || input.includes('.')
          ? `${calculatorData}`
          : `${calculatorData}.`
        setCalculatorData(formattedValue)
      }
    }
  }

  const handleOperators = (val: string ) => {
    if(calculatorData.length) {
      setInput(`${val}`)
      console.log(val);
      const beforeLastChat = calculatorData.charAt(calculatorData.length - 2)
      const beforeLastChatIsOperator = operators.includes(beforeLastChat)

      const lastChat = calculatorData.charAt(calculatorData.length - 1)
      const lastChatIsOperator = operators.includes(lastChat)
      const validOp = val === "*" ? "*" : val;

      if(
        (lastChatIsOperator && val !== '-') ||
        (beforeLastChatIsOperator && lastChatIsOperator)
      ) {
        if(beforeLastChatIsOperator){
          const updatedValue = `${calculatorData.substring(0, calculatorData.length - 2)}${val}`
          setCalculatorData(updatedValue)
        } else {
          setCalculatorData(`${calculatorData.substring(0, calculatorData.length - 1)}${validOp}`)
        }
      } else {
        setCalculatorData(`${calculatorData}${validOp}`)
      }
    }
  }

  // onClick
  const handleClick = (val: string ) => {
    const number = numbers.find((num) => num === Number(val));
    const operator = operators.find((op) => op === val);
    switch (val) {
      case "=":
        handleEqual();
        break;
      case "AC":
        handleClear();
        break;
      case number?.toString():
        handleNumbers(val);
        break;
      case ".":
        dotOperation()
        break;
      case operator:
        handleOperators(val);
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
      <article className="bg-black p-2 border border-gold min-w-[340px] m-auto">
        <Screen display={input} output={output} />
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
