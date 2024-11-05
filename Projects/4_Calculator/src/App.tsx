import { useState } from "react";
import Screen from "./components/Screen";
// import buttonData from "./data/ButtonData.tsx";
import buttonData from "./data/ButtonData";

interface ButtonProps {
  id: string;
  value: string;
  dataKey: number;
  className: string;
}

function App() {
  const [userValue, setUserValue] = useState("");

  const handleClick = (event: ButtonProps) => {
    const buttonTarget = buttonData.find((item) => item.id === event.id);
    console.log(buttonTarget);
    if (event.value) {
      setUserValue(event.value);
    } else {
      console.log("error value");
    }
  };

  return (
    <section className="flex justify-center text-center flex-col">
      <h1 className="my-6 ">Calculator</h1>
      <article className="bg-black p-2 border border-gold min-w-[340px] m-auto">
        <Screen display={userValue} />
        <div id="calculator" className="grid grid-cols-4 grid-rows-5">
          {buttonData.map((btn) => (
            <button
              key={btn.id}
              id={btn.id}
              className={btn.className}
              data-key={btn.dataKey}
              type="button"
              onClick={() => handleClick(btn)}
            >
              {btn.value}
            </button>
          ))}
        </div>
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
