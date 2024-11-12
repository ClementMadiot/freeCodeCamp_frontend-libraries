import { useState } from "react";

function App() {
  const [breakLength, setBreakLength] = useState("5");
  const [sessionLength, setSessionLength] = useState("25");

  return (
    <section className="flex justify-center flex-col">
      <h1 className="text-5xl my-6 mx-auto ">25 + 5 Clock</h1>

      <section className="flex justify-evenly mt-6">
        {/* break section  */}
        <article className="w-60 text-center my-4">
          <div id="break-label" className="text-2xl">Break Length</div>
          <div className="flex justify-between mt-6">
            <button id="break-increment" className=" bg-green-700 hover:bg-green-800  focus:ring-green-300 ">+1</button>
            <p id="break-length" className="flex items-center text-2xl">{breakLength}</p>
            <button id="break-decrement" className=" bg-yellow-400 hover:bg-yellow-500  focus:ring-yellow-300 ">-1</button>
          </div>
        </article>
        {/* session section  */}
        <article className="w-60 text-center my-4">
          <div id="session-label" className="text-2xl">Session Length</div>
          <div className="flex justify-between mt-6">
            <button id="session-increment" className=" bg-green-700 hover:bg-green-800  focus:ring-green-300 ">+1</button>
            <p id="session-length" className="flex items-center text-2xl">{sessionLength}</p>
            <button id="session-decrement" className=" bg-yellow-400 hover:bg-yellow-500  focus:ring-yellow-300">-1</button> 
          </div>
        </article>
      </section>
    {/* timer section  */}
      <article className="flex flex-col justify-center my-6 text-center">
        <div id="timer-label" className="my-4 text-2xl">Session</div>
        <div id="timer-left" className="text-6xl">{sessionLength}:00</div>
        <div className="flex justify-evenly mt-8">
          <button id="start_stop" className="bg-blue-700 hover:bg-blue-800  focus:ring-blue-300">Start - stop</button>
          <button id="reset" className=" bg-purple-700 hover:bg-purple-800  focus:ring-purple-300">reset</button>
        </div>
      </article>
    </section>
  );
}

export default App;
