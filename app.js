"use strict";

let cardgame = [];
let playersCardsOnHand = [];
let computersCardsOnHand = [];
let playerPoints = 0;
let computerPoints = 0;

window.addEventListener("load", start);

async function start() {
  console.log("JS kører");
  cardgame = await getJsonFile();
  console.log(cardgame);
  document.querySelector("#deal-card").addEventListener("click", dealCard);
}

// ==== get JSON data ======
async function getJsonFile() {
  const response = await fetch("cardgame.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}


// ==== decide which cards are shown ======
function dealCard() {
  console.log("deal card");
  if (playersCardsOnHand.length === 0) {
    showFirstCard();
  } else if (playersCardsOnHand.length === 1) {
    showSecondCard();
  } else if (playersCardsOnHand.length === 2) {
    showThirdCard();
  } else if (playersCardsOnHand.length === 3) {
    showFourthCard();
  } else if (playersCardsOnHand.length === 4) {
    showFifthCard();
  }
}

// ==== show first card ======
function showFirstCard() {
  let firstCardNumber = Math.random();
  console.log(firstCardNumber);
  firstCardNumber = Math.floor(firstCardNumber * 52);
  console.log(firstCardNumber);
  let newFirstCard = cardgame[firstCardNumber];
  console.log(newFirstCard);
  if (playersCardsOnHand.includes(newFirstCard)) {
    showFirstCard();
  }
  playersCardsOnHand.push(newFirstCard);
  console.log(playersCardsOnHand);
  console.log(playersCardsOnHand[0].value);
  if (playersCardsOnHand[0].value === 11 && playerPoints > 10) {
    playersCardsOnHand[0].value = 1;}
  playerPoints = newFirstCard.value;
  console.log(playerPoints);
  document.querySelector("#stand-for-player-button").classList.remove("hidden");
  document.querySelector("#first-card").classList.remove("hidden");
  const cardHtml = /*html*/ `<p>${newFirstCard.name}</p>`;
  document.querySelector("#first-card").insertAdjacentHTML("beforeend", cardHtml);
  document.querySelector("#stand-for-player-button").addEventListener("click", startGameForComputer);
  document.querySelector("#result-for-player").textContent = `${playerPoints}`;
}

// ==== show second card ======
function showSecondCard() {
  let secondCardNumber = Math.random();
  console.log(secondCardNumber);
  secondCardNumber = Math.floor(secondCardNumber * 52);
  console.log(secondCardNumber);
  let newSecondCard = cardgame[secondCardNumber];
  console.log(newSecondCard);
  if (playersCardsOnHand.includes(newSecondCard)) {
    showSecondCard();
  }
  playersCardsOnHand.push(newSecondCard);
  if (playerPoints > 10 && newSecondCard.value === 11) {
    newSecondCard.value = 1;
  }
  console.log(playersCardsOnHand);
  if (playersCardsOnHand.includes(playersCardsOnHand[0].value === 11) && playerPoints > 10) {
    playersCardsOnHand[0].value = 1;
  } else if (playersCardsOnHand[1].value === 11 && playerPoints > 10) {
    playersCardsOnHand[1].value = 1;
  }
  playerPoints = playerPoints + newSecondCard.value;
  console.log(playerPoints);
  document.querySelector("#second-card").classList.remove("hidden");
  const cardHtml = /*html*/ `<p>${newSecondCard.name}</p>`;
  document.querySelector("#second-card").insertAdjacentHTML("beforeend", cardHtml);
  document.querySelector("#stand-for-player-button").addEventListener("click", startGameForComputer);
  document.querySelector("#result-for-player").textContent = `${playerPoints}`;
}

// ==== show third card ======
function showThirdCard() {
  let thirdCardNumber = Math.random();
  console.log(thirdCardNumber);
  thirdCardNumber = Math.floor(thirdCardNumber * 52);
  console.log(thirdCardNumber);
  let newThirdCard = cardgame[thirdCardNumber];
  console.log(newThirdCard);
  if (playersCardsOnHand.includes(newThirdCard)) {
    showThirdCard();
  }
  playersCardsOnHand.push(newThirdCard);
  if (playerPoints > 10 && newThirdCard.value === 11) {
    newThirdCard.value = 1;
  }
  console.log(playersCardsOnHand);
  if (playersCardsOnHand[0].value === 11 && playerPoints > 10) {
    playersCardsOnHand[0].value = 1;
  } else if (playersCardsOnHand[1].value === 11 && playerPoints > 10) {
    playersCardsOnHand[1].value = 1;
  } else if (playersCardsOnHand[2].value === 11 && playerPoints > 10) {
    playersCardsOnHand[2].value = 1;
  }
  playerPoints = playerPoints + newThirdCard.value;
  console.log(playerPoints);
  if (playerPoints > 21) {
    tooManyPointsForPlayer();
  }
  document.querySelector("#third-card").classList.remove("hidden");
  const cardHtml = /*html*/ `<p>${newThirdCard.name}</p>`;
  document.querySelector("#third-card").insertAdjacentHTML("beforeend", cardHtml);
  document.querySelector("#stand-for-player-button").addEventListener("click", startGameForComputer);
  document.querySelector("#result-for-player").textContent = `${playerPoints}`;
}

// ==== show fourth card ======
function showFourthCard() {
  let fourthCardNumber = Math.random();
  console.log(fourthCardNumber);
  fourthCardNumber = Math.floor(fourthCardNumber * 52);
  console.log(fourthCardNumber);
  let newFourthCard = cardgame[fourthCardNumber];
  console.log(newFourthCard);
  if (playersCardsOnHand.includes(newFourthCard)) {
    showFourthCard();
  }
  playersCardsOnHand.push(newFourthCard);
  if (playerPoints > 10 && newFourthCard.value === 11) {
    newFourthCard.value = 1;
  }
  console.log(playersCardsOnHand);
  if (playersCardsOnHand[0].value === 11 && playerPoints > 10) {
    playersCardsOnHand[0].value = 1;
  } else if (playersCardsOnHand[1].value === 11 && playerPoints > 10) {
    playersCardsOnHand[1].value = 1;
  } else if (playersCardsOnHand[2].value === 11 && playerPoints > 10) {
    playersCardsOnHand[2].value = 1;
  } else if (playersCardsOnHand[3].value === 11 && playerPoints > 10) {
    playersCardsOnHand[3].value = 1;
  }
  playerPoints = playerPoints + newFourthCard.value;
  console.log(playerPoints);
  if (playerPoints > 21) {
    tooManyPointsForPlayer();
  }
  document.querySelector("#fourth-card").classList.remove("hidden");
  const cardHtml = /*html*/ `<p>${newFourthCard.name}</p>`;
  document.querySelector("#fourth-card").insertAdjacentHTML("beforeend", cardHtml);
  document.querySelector("#stand-for-player-button").addEventListener("click", startGameForComputer);
  document.querySelector("#result-for-player").textContent = `${playerPoints}`;
}

// ==== show fifth card ======
function showFifthCard() {
  let fifthCardNumber = Math.random();
  console.log(fifthCardNumber);
  fifthCardNumber = Math.floor(fifthCardNumber * 52);
  console.log(fifthCardNumber);
  let newFifthCard = cardgame[fifthCardNumber];
  console.log(newFifthCard);
  if (playersCardsOnHand.includes(newFifthCard)) {
    showFifthCard();
  }
  playersCardsOnHand.push(newFifthCard);
  if (playerPoints > 10 && newFifthCard.value === 11) {
    newFifthCard.value = 1;
  }
  console.log(playersCardsOnHand);
  if (playersCardsOnHand.includes(playersCardsOnHand[0].value === 11) && playerPoints > 10) {
    playersCardsOnHand[0].value = 1;
  } else if (playersCardsOnHand.includes(playersCardsOnHand[1].value === 11) && playerPoints > 10) {
    playersCardsOnHand[1].value = 1;
  } else if (playersCardsOnHand.includes(playersCardsOnHand[2].value === 11) && playerPoints > 10) {
    playersCardsOnHand[2].value = 1;
  } else if (playersCardsOnHand.includes(playersCardsOnHand[3].value === 11) && playerPoints > 10) {
    playersCardsOnHand[3].value = 1;
  }
  playerPoints = playerPoints + newFifthCard.value;
  console.log(playerPoints);
  if (playerPoints > 21) {
    tooManyPointsForPlayer();
  }
  document.querySelector("#fifth-card").classList.remove("hidden");
  const cardHtml = /*html*/ `<p>${newFifthCard.name}</p>`;
  document.querySelector("#fifth-card").insertAdjacentHTML("beforeend", cardHtml);
  document.querySelector("#stand-for-player-button").addEventListener("click", startGameForComputer);
  document.querySelector("#result-for-player").textContent = `${playerPoints}`;
}

// ==== too many points for player ======
function tooManyPointsForPlayer() {
  document.querySelector("#deal-card").classList.add("hidden");
  document.querySelector("#too-many-points-for-player").textContent = `Game over. You have ${playerPoints} points`;
  document.querySelector("#try-again").classList.remove("hidden");
  document.querySelector("#try-again").addEventListener("click", resetGame);
  document.querySelector("#stand-for-player-button").classList.add("hidden");
}

// ==== reset game ======
function resetGame() {
  document.querySelector("#try-again").classList.add("hidden");
  document.querySelector("#too-many-points-for-player").textContent = ``;
  document.querySelector("#deal-card").classList.remove("hidden");
  playerPoints = 0;
  playersCardsOnHand = [];
  document.querySelector("#first-card").innerHTML = "";
  document.querySelector("#second-card").innerHTML = "";
  document.querySelector("#third-card").innerHTML = "";
  document.querySelector("#fourth-card").innerHTML = "";
  document.querySelector("#fifth-card").innerHTML = "";
  document.querySelector("#first-card").classList.add("hidden");
  document.querySelector("#second-card").classList.add("hidden");
  document.querySelector("#third-card").classList.add("hidden");
  document.querySelector("#fourth-card").classList.add("hidden");
  document.querySelector("#fifth-card").classList.add("hidden");
  document.querySelector("#result-for-player").textContent = playerPoints;
}

// ==== Functions for computer's game ======
// ==== Start game for computer, when stand is pressed by player ======
function startGameForComputer() {
  console.log("deal cards for computer");
  document.querySelector("#deal-card").classList.add("hidden");
  document.querySelector("#stand-for-player-button").classList.add("hidden");
  showFirstCardForComputer();
}

// ==== Deal cards for computer ======
function showFirstCardForComputer() {
let firstCardNumber = Math.random();
console.log(firstCardNumber);
firstCardNumber = Math.floor(firstCardNumber * 52);
console.log(firstCardNumber);
let newFirstCard = cardgame[firstCardNumber];
console.log(newFirstCard);
if (playersCardsOnHand.includes(newFirstCard)) {
  showFirstCard();
}
computersCardsOnHand.push(newFirstCard);
console.log(computersCardsOnHand);
console.log(computersCardsOnHand[0].value);
if (computersCardsOnHand[0].value === 11 && computerPoints > 10) {
  computersCardsOnHand[0].value = 1;
}
computerPoints = newFirstCard.value;
console.log(computerPoints);
document.querySelector("#first-card-for-computer").classList.remove("hidden");
const cardHtml = /*html*/ `<p>${newFirstCard.name}</p>`;
document.querySelector("#first-card-for-computer").insertAdjacentHTML("beforeend", cardHtml);
document.querySelector("#result-for-computer").textContent = `${computerPoints}`;
}
