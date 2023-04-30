const quotes= [
    {
        quote: "The way get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "life is not fair get used to it.",
        author: "Bill Gates"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein"
    },
    {
        quote: "Let me assert my firm belief that the only thing we have to fear is fear itself.",
        author: "F.D. Roosevelt"
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell"
    },
    {
        quote: "Sometimes even to live is an act of courage.",
        author: "Seneca"
    },
    {
        quote: "There is no cure for birth and death, save to enjoy the interval.",
        author: "George Santayana"
    },
    {
        quote: "By nature, men are nearly alike. by practice, they get to be wide apart.",
        author: "Confucius"
    },
    {
        quote: "Science is organized knowledge. Wisdom is organized life.",
        author: "Immanuel Kant"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
