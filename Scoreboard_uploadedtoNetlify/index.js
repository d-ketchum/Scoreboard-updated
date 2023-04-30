let homePoints = document.getElementById("points-home");
let awayPoints = document.getElementById("points-away");

let homeCount = 0;
let awayCount = 0;

function homePlusOne() {
    let result = homeCount += 1;
    homePoints.textContent = result;
}

function homePlusTwo() {
    let result = homeCount += 2;
    homePoints.textContent = result;
}

function homePlusThree() {
    let result = homeCount += 3;
    homePoints.textContent = result;
}

function awayPlusOne() {
    let result = awayCount += 1;
    awayPoints.textContent = result;
}

function awayPlusTwo() {
    let result = awayCount += 2;
    awayPoints.textContent = result;
}

function awayPlusThree() {
    let result = awayCount += 3;
    awayPoints.textContent = result;
}