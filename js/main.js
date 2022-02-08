const theQuotes = [
    { 
        quote: 'Java is to JavaScript, <br> like Boter is to Boterham',
        from: 'M Auerbach, &copy; 2021'
    },
    { 
        quote: 'If life were predictable it would cease to be life, and be without flavor.',
        from: 'Eleonor Roosevelt'
    },
    { 
        quote: 'Life is what happens when you\'re busy making other plans',
        from: 'John Lennon'
    },
    { 
        quote: 'If life gives you lemons, <br> make lemonade',
        from: 'Dunno - sometime...'
    },
];

const button = document.querySelector('.buttonMy');
button.addEventListener('click', mijnFunctie); 
const paragraph = document.querySelector('.para')


function mijnFunctie() {
    const getQuoteNo = Math.floor(Math.random() * theQuotes.length);
    const useQuote = theQuotes[getQuoteNo];
    paragraph.innerHTML = useQuote.quote;
}

//const ptext = document.querySelector('.para');
//ptext.innerHTML = theQuotes[2].from;
