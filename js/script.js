/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * This array includes 5 obects total alongside source and citation and year for 1 obkect. 
***/
const quote= [
{quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
source:"-Nelson Mandela",
citation:"https://blog.hubspot.com/sales/famous-quotes",
year:"2007",
},

{quote:"The way to get started is to quit talking and begin doing.",
source: '-Walt Disney',
//citation:
//year:
},
{quote: "If life were predictable it would cease to be life, and be without flavor.",
source:'-Elenor Roosevelt',
//citation:
//year:
},
{quote:"Life is what happens when you're busy making other plans.",
source: '-John Lennon',
//citation:
//year:
},
{quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
source: 'Steve Jobs',
//citation:
//year:
}
];

/***
 * `getRandomQuote` function
 * The `getRandomQuote` function provides a random quote from the array above. 
***/
function getRandomQuotes (){
const randomNumber= Math.floor(Math.random()*quotes.length);
return quotes [randomNumber]
};

/***
 * `printQuote` function
 * `printQuote` shows the random Quote on the users screen.
 * Additionally the source will be included alongside Quote and citation and year for the first quote in the array.
***/
function printQuote (){
let RandomQuote=getRandomQuote();
let html=`
<p class="quote">  ${RandomQuote.quote} </p>
<p class="source"> ${RandomQuote.source}`;

if (RandomQuote.citation){
  html+= `<span class="citation">${RandomQuote.citation},</span>`};
if(RandomQuote.year){
    html+= `<span class = "year"> ${RandomQuote.year}</span>`};
if (RandomQuote.tags){
html+=`<span class="year"> ${RandomQuote.tags}<span`};

html+=`</p>`
document.getElementById('quote-box').innerHTML = html; 
};

    /***
     * click event listener for the print quote button
     * DO NOT CHANGE THE CODE BELOW!!
    ***/

    document.getElementById('load-quote').addEventListener("click", printQuote, false);