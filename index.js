let num1 = 0;
let num2 = 0;

document.getElementById("home-score").textContent = num1;
document.getElementById("guest-score").textContent = num2;

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeResult = 0;
let guestResult = 0;

function addOne() {
  homeResult = homeResult + 1;
  homeScore.textContent = homeResult;
}

function addTwo() {
  homeResult = homeResult + 2;
  homeScore.textContent = homeResult;
}

function addThree() {
  homeResult = homeResult + 3;
  homeScore.textContent = homeResult;
}

function addOneGuest() {
  guestResult = guestResult + 1;
  guestScore.textContent = guestResult;
}
function addTwoGuest() {
  guestResult = guestResult + 2;
  guestScore.textContent = guestResult;
}

function addThreeGuest() {
  guestResult = guestResult + 3;
  guestScore.textContent = guestResult;
}
