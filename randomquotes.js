var quotes = [
    'Wir können programmieren!',
    'Wir sind schlecht in Minecraft.',
    'Das G in DasShept steht für gut!'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote-display').innerHTML = quotes[randomNumber];
}
