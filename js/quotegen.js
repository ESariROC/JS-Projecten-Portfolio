const theQuotes = [
    { 
        quote: 'Be yourself; everyone else is already taken.',
    },
    { 
        quote: 'Two things are infinite: the universe and human stupidity and Im not sure about the universe.',
    },
    { 
        quote: 'A room without books is like a body without a soul.',
    },
    { 
        quote: 'Be the change that you wish to see in the world.',
    },
];

const button = document.querySelector('.butQuote');
button.addEventListener('click', mijnFunctie); 
const para = document.querySelector('.quote');

function mijnFunctie() {
    for (let i = 0; i < theQuotes.length; i++) {
        //console.log(theQuotes[i].quote);

        //RANDOM QUOTE 
        const getQuoteNo = Math.floor(Math.random([i]) * theQuotes.length);
        const useQuote = theQuotes[getQuoteNo];
        para.innerHTML = useQuote.quote      
        
    }
   
}





//const ptext = document.querySelector('.para');
//ptext.innerHTML = theQuotes[2].from;

//const useQuote = theQuotes[i];
// const random = Math.floor(Math.random([i]) * 10);
//const randomNum = Math.floor(Math.random() * 5);
//const useQuote = theQuotes[Math.random];
//para.innerHTML = useQuote.quote;

