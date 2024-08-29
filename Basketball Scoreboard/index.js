let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
let newHomeScore = 0;
let newGuestScore = 0;

function hPlusOne() {
  newHomeScore += 1;
  homeScore.textContent = newHomeScore;
}

function hPlusTwo() {
  newHomeScore += 2;
  homeScore.textContent = newHomeScore;
}

function hPlusThree() {
  newHomeScore += 3;
  homeScore.textContent = newHomeScore;
}

function gPlusOne() {
  newGuestScore += 1;
  guestScore.textContent = newGuestScore;
}

function gPlusTwo() {
  newGuestScore += 2;
  guestScore.textContent = newGuestScore;
}

function gPlusThree() {
  newGuestScore += 3;
  guestScore.textContent = newGuestScore;
}

function reset() {
  newGuestScore = 0;
  newHomeScore = 0;
  guestScore.textContent = newGuestScore;
  homeScore.textContent = newHomeScore;
}
