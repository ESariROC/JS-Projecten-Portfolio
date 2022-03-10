console.log('main.js');

const timeInput = document.querySelector(".time-input"); //input
const button = document.querySelector(".submit"); //button
const countdownDiv = document.querySelector(".timer"); //div timer
const daySpan = document.querySelector(".day"); //span days
const hourSpan = document.querySelector(".hour"); //span hours
const minSpan = document.querySelector(".min"); //span minuts
const secSpan = document.querySelector(".sec"); //span seconds
const announcementDiv = document.querySelector(".announcement"); //h2 announcement //?
let timer = null;

button.addEventListener("click", () => {
    calcTime(new Date(timeInput.value)); //Dus calcTime wordt geactiveerd en de overgebleven tijd wordt berekend in calcTime function
    localStorage.setItem("eventDate", JSON.stringify(timeInput.value)); //JSON object wordt omgezet naar String met stringify
});

start();



function start () { //functie start
    const eventDate = JSON.parse(localStorage.getItem("eventDate")); //converteren van text in je JSON
    if (eventDate) {
        calcTime(new Date(eventDate)); //~~
    }
}

function calcTime(dateEvent) { //functie tijd berekenen
    announcementDiv.classList.add("hide"); //voeg .hide toe aan class
    clearInterval(timer); //~~

    //Nieuwe date aanmaken
    const dateToday = new Date();

    //dag event - vandaag
    let timeRemaining = dateEvent - dateToday;

    if (timeRemaining > 0) { //als overgebleventijd groter is dan 0
        startCountdown(timeRemaining); //voer uit functie (startCountdown)
        countdownDiv.classList.remove("hide"); //verwijder .hide in class van html. Dit toont de announcment
    } else {
        timeHasPassed(timeRemaining < -86400000);//anders voer uit functie(timeHasPassed)
    }
}

function startCountdown(timeRemaining) { //functie aftellen
    timeRemaining -= 1000; //1 seconde
    updateScreen(timeRemaining); //functie updatescreen wordt uitgevoerd. 
    timer = setInterval(() => {

        //overgebleven tijd verminderen met seconden
        // timeRemaining = timeRemaining - 1000 Deze telt af
        timeRemaining -= 1000;
        if (timeRemaining <= 0) { //als timer kleiner of gelijk is aan 0, reset timer)
            //je tijd is aangekomen
            clearInterval(timer);
            //
            timeHasPassed(false)
            return;
        }
        updateScreen(timeRemaining);
    }, 1000);
}

function updateScreen(timeRemaining) { //timer wijziging

    const day = timeRemaining / (3600000 * 24); //tijd in een dag
    daySpan.textContent = Math.floor(day); //show in body
    //modulo = je kijkt wat er is overgebleven.
    timeRemaining %= (3600000 * 24); //
    
    //uren
    const hour = timeRemaining / 3600000;
    hourSpan.textContent = Math.floor(hour);
    //modulo = je kijkt wat er is overgebleven.
    timeRemaining %= 3600000;


    //minuten
    const min = timeRemaining / 6000;
    //Math.floor = afronden naar beneden
    minSpan.textContent = Math.floor(min);
    //modulo = je kijkt wat er is overgebleven.
    timeRemaining %= 6000;


    //seconden
    const sec = timeRemaining / 1000;
    secSpan.textContent = Math.floor(sec);
}

function timeHasPassed(moreThanADay) {
    //als de dag is gepasseerd 
    if (moreThanADay) {
        announcementDiv.textContent = "Het event is al geweest";
    } else {
        announcementDiv.textContent = "Vul de timer in";
    }
    announcementDiv.classList.remove("hide");
    localStorage.removeItem("eventDate")
}