console.log("page loading...");

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

