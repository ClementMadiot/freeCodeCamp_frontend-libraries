import { useEffect, useRef, useState } from "react";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [minutes, setMinutes] = useState(sessionLength);
  const [seconds, setSeconds] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const timerLabelRef = useRef(null);

  useEffect(() => {
    if (breakLength < 1) {
      setBreakLength(1);
    } else if (breakLength > 60) {
      setBreakLength(60);
    }
    if (sessionLength <= 1) {
      setSessionLength(1);
      setMinutes(1);
    } else if (sessionLength > 60) {
      setSessionLength(60);
      setMinutes(60);
    }
  }, [breakLength, sessionLength]);

  useEffect(() => {
    if (clicked) {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
        if (!isBreak && minutes === 0 && seconds === 0) {
          timerLabelRef.current.textContent = "a break has begun";
          setIsBreak(!isBreak);
          setMinutes(breakLength);
        } else if (isBreak && minutes === 0 && seconds === 0) {
          timerLabelRef.current.textContent = "a session has begun";
          setMinutes(sessionLength);
          setIsBreak(!isBreak);
        }        
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [clicked, seconds, minutes, isBreak, breakLength, sessionLength]);
  
  return (
    <section className="flex justify-center flex-col">
      <h1 className="text-5xl my-6 mx-auto ">25 + 5 Clock</h1>

      <section className="flex justify-evenly mt-6">
        {/* break section  */}
        <article className="w-60 text-center my-4">
          <div id="break-label" className="text-2xl">
            Break Length
          </div>
          <div className="flex justify-between mt-6">
            <button
              id="break-increment"
              className="bg-green-700 hover:bg-green-800 focus:ring-green-300 "
              onClick={() => setBreakLength(breakLength + 1)}
            >
              +1
            </button>
            <p id="break-length" className="flex items-center text-2xl">
              {breakLength}
            </p>
            <button
              id="break-decrement"
              className=" bg-yellow-400 hover:bg-yellow-500  focus:ring-yellow-300 "
              onClick={() => setBreakLength(breakLength - 1)}
            >
              -1
            </button>
          </div>
        </article>
        {/* session section  */}
        <article className="w-60 text-center my-4">
          <div id="session-label" className="text-2xl">
            Session Length
          </div>
          <div className="flex justify-between mt-6">
            <button
              id="session-increment"
              className=" bg-green-700 hover:bg-green-800  focus:ring-green-300 "
              onClick={() => {
                setSessionLength(sessionLength + 1);
                setMinutes(sessionLength + 1);
              }}
            >
              +1
            </button>
            <p id="session-length" className="flex items-center text-2xl">
              {sessionLength}
            </p>
            <button
              id="session-decrement"
              className=" bg-yellow-400 hover:bg-yellow-500  focus:ring-yellow-300"
              onClick={() => {
                setSessionLength(sessionLength - 1);
                setMinutes(sessionLength - 1);
              }}
            >
              -1
            </button>
          </div>
        </article>
      </section>
      {/* timer section  */}
      <article className="flex flex-col justify-center my-6 text-center">
        <div id="timer-label" ref={timerLabelRef} className="my-4 text-2xl">
          Session
        </div>
        <div id="time-left" className="text-6xl">
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className="flex justify-evenly mt-8">
          <button
            id="start_stop"
            className="bg-blue-700 hover:bg-blue-800  focus:ring-blue-300"
            onClick={() => {
              setClicked(!clicked);
              if (timerLabelRef.current.textContent !== "a break has begun") {
                timerLabelRef.current.textContent = "a session has begun";
              }
              if (!clicked) {
                console.log("time on");
              } else {
                console.log("time off");
                setClicked(false);
              }
            }}
          >
            Start - stop
          </button>
          <button
            id="reset"
            className=" bg-purple-700 hover:bg-purple-800  focus:ring-purple-300"
            onClick={() => {
              clearInterval(clicked);
              setClicked(false);
              setSeconds(0);
              setBreakLength(5);
              setSessionLength(25);
              setMinutes(25);
              timerLabelRef.current.textContent = "Session";
              console.log("clear");
            }}
          >
            reset
          </button>
        </div>
      </article>
    </section>
  );
}

export default App;
