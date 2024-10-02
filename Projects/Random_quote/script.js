const text = document.getElementById("text");
const authorQuote = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

const API_URL = "https://api.api-ninjas.com/v1/quotes";

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
  console.log(quote)
  text.textContent = quote
  authorQuote.textContent = author
}

newQuoteBtn.addEventListener("click", fetchQuotes)
