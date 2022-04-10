var quotes = [
    '1',
    '2',
    '3'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote-display').innerHTML = quotes[randomNumber];
}