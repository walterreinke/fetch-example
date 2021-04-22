setup();

function setup() {
  getQuote();
}

function getQuote() {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => updateQuote(data.quote));
}

function updateQuote(innerText) {
  let p = document.querySelector("p");
  p.innerText = innerText;
}
