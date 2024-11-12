import { useEffect, useState } from "react";
import audioData from "./data/drumAudio";
import "./style/App.scss";

function App() {
  const [volume, setVolume] = useState(5);

  const drumMachine = (event) => {
    try {
      const drumKeyCode = audioData.find(
        (item) =>
          `drum-${item.key}` === event.target.id ||
          item.key === event.target.innerText
      );
      console.log(event.target.id);
      if (!drumKeyCode) return;
      if (drumKeyCode) {
        updateDisplay(drumKeyCode.id);
        playNote(drumKeyCode);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateDisplay = (item) => {
    const display = document.getElementById("display");
    if (display) {
      display.textContent = item ? item : "";
    } else {
      console.warn("Display element not found");
      updateDisplay("Display element not found");
    }
  };

  const adjustVolume = (e) => {
    setVolume(e.target.value);
  };

  const playNote = (item) => {
    const audio = new Audio();
    audio.src = item.src;
    audio.volume = volume / 10; // Normalize volume to 0-1 range
    audio.currentTime = 0; // Reset playback position
    audio.play();
  };

  const keyDown = (event) => {
    try {
      const currentKey = audioData.find(
        (item) => item.key === event.key.toUpperCase()
      );
      if (currentKey) {
        console.log(
          `key press: ${event.key.toUpperCase()} | key pad: ${currentKey.key}`
        );
        updateDisplay(currentKey.id);
        playNote(currentKey);
      } else {
        updateDisplay(`No matching key found "${event.key.toUpperCase()}"`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDown);
    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  });

  return (
    <main>
      <div id="drum-machine">
        {audioData.map((item) => (
          <div
            key={item.key}
            className="drum-pad"
            id={`drum-${item.key}`}
            onClick={(e) => drumMachine(e)}
          >
            {item.key}
            <audio id={item.key} src={item.src} className="clip" />
          </div>
        ))}
      </div>
      <div className="logo">
        FCC
        <i className="inner-logo fa fa-free-code-camp"></i>
      </div>
      <div id="pad">
        <div id="display">&nbsp;</div>
        <div className="control-volume">
          <label htmlFor="volume" className="form-label">
            Volume: {volume}
          </label>
          <input
            type="range"
            className="form-range"
            min="1"
            max="10"
            step="0.5"
            id="volume"
            value={volume}
            onChange={adjustVolume}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
