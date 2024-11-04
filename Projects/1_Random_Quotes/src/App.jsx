import "./style/App.scss";

let colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchQuotes = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      displayQuotes(data);
      // change color
    } catch (err) {
      console.error(`There was an error: ${err}`);
    }
  };
  const displayQuotes = (data) => {
    const text = document.getElementById("text");
    const authorQuote = document.getElementById("author");
    const tweet = document.getElementById("tweet-quote");
    const { quote, author } = data[0];
    text.textContent = quote;
    authorQuote.textContent = "- " + author;
    tweet.href = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}"${author}`;

    changeColor(text, authorQuote);
  };

  const changeColor = (text, authorQuote) => {
    const newColors = colors[Math.floor(Math.random() * colors.length)];

    const body = document.querySelector("body");
    const spanQuote = document.getElementById("span-quote");
    const allBtn = document.querySelectorAll("button");

    const elements = [body, ...allBtn];
    elements.forEach((element) => {
      element.style.backgroundColor = newColors;
      element.style.transition = "background-color 0.5s ease";
    });
    const colorElements = [text, authorQuote, spanQuote];
    colorElements.forEach((color) => {
      color.style.color = newColors;
      color.style.transition = "background-color 0.5s ease";
      color.style.opacity = 0;
    });
    setTimeout(() => {
      colorElements.forEach((color) => {
        color.style.opacity = 1;
        color.style.transition = "opacity 0.5s ease";
      });
    }, 500);
  };

  fetchQuotes();

  return (
    <main>
      <div id="quote-box" className="quote-box">
        <p className="text">
          <i id="span-quote" className="fa-solid fa-quote-left"></i>
          <span id="text"></span>
        </p>
        <p id="author" className="author"></p>
        <div className="button-box">
          <div id="reseau">
            <button className="tweet">
              <a id="tweet-quote" target="_blank" href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </button>
            <button className="linkedin">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/cl%C3%A9ment-madiot-9862b824a/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </button>
            <button className="github">
              <a target="_blank" href="https://github.com/ClementMadiot">
                <i className="fa-brands fa-github"></i>
              </a>
            </button>
          </div>
          <button id="new-quote" onClick={fetchQuotes}>
            New quote
          </button>
        </div>
      </div>
      <div className="link">
        <a href="https://www.freecodecamp.org/Clement_Madiot">By Clément</a>
      </div>
    </main>
  );
}

export default App;
