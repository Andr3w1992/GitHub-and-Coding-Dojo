console.log("page loading...");

window.onload = function() {
    var display = document.querySelector('#timer');
    let minutes = "00";
    let seconds = 13;
    const timerClock = setInterval(countdown.bind(minutes, seconds),1000)    

    function countdown() {
        console.log("Triggering the countdown...");
        console.log("Minutes: " + minutes, "Seconds: " + seconds);
        if(seconds == 0)
        {
            clearInterval(timerClock);
            display.textContent = "00:00";
            // trigger the alertr
        }
        else if(seconds > 0)
        {
            console.log(seconds);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ':' + seconds;
            seconds = seconds - 1;
        }
    }
};

var scoreCount1 = 319;
var scoreSpanincrease = document.querySelector("#score1");

function increase() {
    scoreCount1++;
    scoreSpanincrease.innertext = scoreCount1;
}

var scoreCount2 = 162;
var scoreSpan2increase = document.querySelector("#score2");

function increase2() {
    scoreCount2++;
    scoreSpan2increase.innertext = scoreCount2;
}

