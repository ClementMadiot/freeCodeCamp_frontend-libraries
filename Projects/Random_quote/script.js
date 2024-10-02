const body = document.querySelector('body');
const text = document.getElementById("text");
const authorQuote = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const spanQuote = document.getElementById('span-quote');
const allBtn = document.querySelectorAll("button")

const API_URL = "https://api.api-ninjas.com/v1/quotes";

let colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const getRandomIndex = () => {
return Math.floor(Math.random() * colors.length)
}

const changeColor = () => {
  const newColors = colors[getRandomIndex()]

  const elements = [ body, ...allBtn];
  elements.forEach(element => {
    element.style.backgroundColor = newColors
    element.style.transition = 'background-color 0.5s ease';
  });
  const colorElements = [ text, authorQuote, spanQuote ]
  colorElements.forEach(color => {
    color.style.color = newColors
    color.style.transition = 'background-color 0.5s ease';
    color.style.opacity = 0
  });
  setTimeout(() => {
    colorElements.forEach(color => {
      color.style.opacity = 1
      color.style.transition = 'opacity 0.5s ease';
    });

  }, 500)

}

const fetchQuotes = async () => {
  try {
    const res = await fetch(API_URL, {
      headers: {
        "X-Api-Key": "7AGZkb1lj0c/bfLwtC0SwA==wUjdmWzNKoI0TpMD",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    displayFetch(data)
  } catch (err) {
    console.error(`There was an error: ${err}`);
  }
};
fetchQuotes();

const displayFetch = (data) => {
  const { quote, author } = data[0]
  // console.log(quote)
  text.textContent =  quote
  authorQuote.textContent = '- ' + author

// change color
changeColor()
}

newQuoteBtn.addEventListener("click", fetchQuotes)

getRandomIndex()