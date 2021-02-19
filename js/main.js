// Setting/Init. the variables. 
/* This will be a boolean variable called "Alarm"
it will be set to "false". Ideally, anytime the countdown
reaches zero, I switch the alarm value to "True". if the alarm value is 
true then the alarm should go off. 
*/
let alarm = false;
let militaryTime = false;
//let stopper = false;
//This variable will store the total seconds.
let total;
let timer;
// connecting ID and Classes from the html
// Important !!!!!
let clock = document.getElementById('clock');
let end = document.getElementById('end');
let showTime = document.getElementById('showTime');


// This are for the 12-hour & 24-hour buttons.
const convertToTwelve = document.querySelector('.twelveButton');
const convertToTwentyFour = document.querySelector('.twenty-fourButton');

// Variables are to connect the selected classes to js variable. 
const start = document.querySelector('.start');
//const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset')

//To listen to the button clicks
start.addEventListener('click', () => {

    getCountdown();
    countdown();


});
//stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

// Listen in on the button clicks
convertToTwelve.addEventListener('click', convertHourDefault);
convertToTwentyFour.addEventListener('click', convertHourToMilitary);


// FUNCTIONS:

setInterval(displayClock, 1000);
/*
This  will let the user see the current time. This help the user estimate 
how long he/she she wants to set the alarm . 
*/
function displayClock() {
    /*
    Using the Date() object
    using the instance methods for:
        Time: 
            - Hours
            - Minutes
            - Seconds
    */
    let currentTime = new Date();
    // Time Getter. IMPORTANT!!!
    let hoursin24 = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let amOrPm = '';

    //This will check if Morning or Afternoon.
    if (hoursin24 >= 12) {
        amOrPm = 'PM';
    }
    else {
        amOrPm = 'AM';
    }
    //This if statement will convert the 24 hours format into 12 hours format
    if (hoursin24 > 12 & militaryTime === false) {
        //console.log(hoursin24);
        hoursin24 = (24 - hoursin24) - 12;
    }

    hoursin12 = Math.abs(hoursin24);
    //These lines of code is to the '0' for the single digit numbers in the clock.
    if (hoursin12 < 10) {
        hoursin12 = '0' + hoursin12;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    // This format will display on the page for the user.
    // Clock format: Hours: Minutes: Seconds
    let timeNow = hoursin12 + ':' + minutes + ':' + seconds + amOrPm;
    // This will change the  "Div id=clock" inner information. 
    clock.innerHTML = timeNow;
}
//Check if the clock is in Military time
function convertHourToMilitary() {

    if (militaryTime === false) {
        militaryTime = true;
    }
}
//Check if the clock is in default time format. 
function convertHourDefault() {
    if (militaryTime === true) {
        militaryTime = false;
    }
}

function getCountdown() {
    let hourInput = document.getElementById('hour').value;
    let minuteInput = document.getElementById('minute').value;
    let secondInput = document.getElementById('second').value;


    hour = hourInput * 3600;
    minute = minuteInput * 60;
    second = secondInput;


    total = hour + minute + second;
}

// This function will display the countdown and decrement each second. 
function countdown() {

    let element = "Please wait for: " + total + ' seconds';

    console.log(total + ' seconds');


    let timer = setTimeout(countdown, 1000);

    total--;

    showTime.innerHTML = element;

    // if(stopper === true){
    //     clearInterval(timer);
        
    // }

    if (total < 0 ) {
        showTime.innerHTML = element;
        clearTimeout(timer);
        showTime.innerHTML = 'Times up! hit the reset button to start over.';
        alert("Ding Ding Ding");

    }

}



//This will refresh the timer or clear the input. 
function resetTimer() {
    document.getElementById('showTime').reset();
    // Refreshes the page. 
    location.reload();
}
//This will pause the timer
// function stopTimer() {

//     if (stopper === false) {

//         stopper = true;
        

//     }
//     if (stopper === true) {

//         stopper = false;
//     }

// }

// function resumeTimer(){

    

// }
displayClock();