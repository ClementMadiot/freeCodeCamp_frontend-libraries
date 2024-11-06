import { useState } from "react";
import * as math from "mathjs";
// import Components
import Screen from "./components/Screen";
import Button from "./components/Button";

function App() {
  const [userValue, setUserValue] = useState("");
  const [reset, setreset] = useState(true)
  
  const handleClick = (val: string) => {
    setreset(false)
    setUserValue(userValue + val);
  };

  const handleEqual = () => {
    setUserValue(math.evaluate(userValue));
  };

  const handleClear = () => {
    setreset(true)
    setUserValue("");
  };

  return (
    <section className="flex justify-center text-center flex-col">
      <h1 className="my-6 ">Calculator</h1>
      <article className="bg-black p-2 border border-gold min-w-[340px] m-auto">
        <Screen reset={reset} display={userValue} />
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
