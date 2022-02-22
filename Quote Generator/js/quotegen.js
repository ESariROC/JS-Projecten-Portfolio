const theQuotes = [
    { 
        quote: 'Be yourself, everyone else is already taken.',
        author: 'Oscar Wilde'
    },
    { 
        quote: 'Two things are infinite: the universe and human stupidity and Im not sure about the universe.',
        author: 'Albert Einstein'
    },
    { 
        quote: 'A room without books is like a body without a soul.',
        author: 'Marcus Tullius Cicero'
    },
    { 
        quote: 'Be the change that you wish to see in the world.',
        author: 'Mahatma Gandhi'
    },
];

const button = document.querySelector('.butQuote'); //button
const para = document.querySelector('.quote'); //text
const authorFrom = document.querySelector('.author'); 
button.addEventListener('click', mijnFunctie); //voer functie uit

function mijnFunctie() {
    for (let i = 0; i < theQuotes.length; i++) {
        //console.log(theQuotes[i].quote);

        //RANDOM QUOTE 
        const getQuoteNo = Math.floor(Math.random([i]) * theQuotes.length);
        const useQuote = theQuotes[getQuoteNo];
        para.innerHTML = useQuote.quote;
        authorFrom.innerHTML = useQuote.author;
        
    }
   
}





//const ptext = document.querySelector('.para');
//ptext.innerHTML = theQuotes[2].from;

//const useQuote = theQuotes[i];
// const random = Math.floor(Math.random([i]) * 10);
//const randomNum = Math.floor(Math.random() * 5);
//const useQuote = theQuotes[Math.random];
//para.innerHTML = useQuote.quote;

