const quotes = [
    {
        quote: "It is kind of fun to do the impossible.",
        author: "Walt Disney",
    },
    {
        quote: "There are better starters than me but I'm a strong finisher.",
        author: "Usain Bolt",
    },
    {
        quote:"Though times never last, but though people do.",
        author: "Robert H. Schuller",
    },
    {
        quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "Martin Luther king",
    },
    {
        quote: "Grind Hard, Shine Hard.",
        author: "Dwayne Johnson",
    },
    {
        quote: "I didn't get there by wishing for it or hoping for it but by working for it.",
        author: "Estee Lauder",
    },
    {
        quote: "The world will not change until we do.",
        author: "Jim Wallis",
    },
    {
        quote: "Success consists of getting up just one more time than you fall,",
        author: "Oliver Goldsmith",
    },
    {
        quote: "Hope sees the invisible, feels the intangible, and achives the impossible.",
        author: "Anonymous",
    },
    {
        quote: "Control your own destiny, or someone else will.",
        author: "John Welch, Jr.",
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;