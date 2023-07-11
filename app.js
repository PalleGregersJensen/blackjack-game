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
  const firstPartOfCardGame = cardgame.slice(0, firstCardNumber);
  console.log(firstPartOfCardGame);
  const secondPartOfCardGame = cardgame.slice(firstCardNumber + 1);
  console.log(secondPartOfCardGame);
  cardgame = firstPartOfCardGame.concat(secondPartOfCardGame);
  console.log(cardgame);
  playersCardsOnHand.push(newFirstCard);
  console.log(playersCardsOnHand);
  console.log(playersCardsOnHand[0].value);
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
  secondCardNumber = Math.floor(secondCardNumber * 51);
  console.log(secondCardNumber);
  let newSecondCard = cardgame[secondCardNumber];
  console.log(newSecondCard);
  const firstPartOfCardGame = cardgame.slice(0, secondCardNumber);
  console.log(firstPartOfCardGame);
  const secondPartOfCardGame = cardgame.slice(secondCardNumber + 1);
  console.log(secondPartOfCardGame);
  cardgame = firstPartOfCardGame.concat(secondPartOfCardGame);
  console.log(cardgame);
  console.log(cardgame);
  playersCardsOnHand.push(newSecondCard);
  console.log(playersCardsOnHand);
  playerPoints = playerPoints + playersCardsOnHand[1].value;
  console.log(playerPoints);
  document.querySelector("#second-card").classList.remove("hidden");
  const cardHtml = /*html*/ `<p>${newSecondCard.name}</p>`;
  document.querySelector("#second-card").insertAdjacentHTML("beforeend", cardHtml);
  document.querySelector("#stand-for-player-button").addEventListener("click", startGameForComputer);
  if (playersCardsOnHand[0].value === 11 && playerPoints > 21) {
    playersCardsOnHand[0].value = 1;
  } else if (playersCardsOnHand[1].value === 11 && playerPoints > 21) {
    playersCardsOnHand[1].value = 1;
  }
  document.querySelector("#result-for-player").textContent = `${playerPoints}`;
}

// ==== show third card ======
function showThirdCard() {
  let thirdCardNumber = Math.random();
  console.log(thirdCardNumber);
  thirdCardNumber = Math.floor(thirdCardNumber * 50);
  console.log(thirdCardNumber);
  let newThirdCard = cardgame[thirdCardNumber];
  console.log(newThirdCard);
  const firstPartOfCardGame = cardgame.slice(0, thirdCardNumber);
  console.log(firstPartOfCardGame);
  const secondPartOfCardGame = cardgame.slice(thirdCardNumber + 1);
  console.log(secondPartOfCardGame);
  cardgame = firstPartOfCardGame.concat(secondPartOfCardGame);
  console.log(cardgame);
  playersCardsOnHand.push(newThirdCard);
  console.log(playersCardsOnHand);
  playerPoints = playerPoints + playersCardsOnHand[2].value;
  if (playersCardsOnHand[0].value === 11 && playerPoints > 21) {
    playersCardsOnHand[0].value = 1;
  } else if (playersCardsOnHand[1].value === 11 && playerPoints > 21) {
    playersCardsOnHand[1].value = 1;
  } else if (playersCardsOnHand[2].value === 11 && playerPoints > 21) {
    playersCardsOnHand[2].value = 1;
  }
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
  fourthCardNumber = Math.floor(fourthCardNumber * 49);
  console.log(fourthCardNumber);
  let newFourthCard = cardgame[fourthCardNumber];
  console.log(newFourthCard);
  const firstPartOfCardGame = cardgame.slice(0, fourthCardNumber);
  console.log(firstPartOfCardGame);
  const secondPartOfCardGame = cardgame.slice(fourthCardNumber + 1);
  console.log(secondPartOfCardGame);
  cardgame = firstPartOfCardGame.concat(secondPartOfCardGame);
  console.log(cardgame);
  playersCardsOnHand.push(newFourthCard);
  playerPoints = playerPoints + playersCardsOnHand[3].value;
  console.log(playersCardsOnHand);
  if (playersCardsOnHand[0].value === 11 && playerPoints > 21) {
    playersCardsOnHand[0].value = 1;
  } else if (playersCardsOnHand[1].value === 11 && playerPoints > 21) {
    playersCardsOnHand[1].value = 1;
  } else if (playersCardsOnHand[2].value === 11 && playerPoints > 21) {
    playersCardsOnHand[2].value = 1;
  } else if (playersCardsOnHand[3].value === 11 && playerPoints > 21) {
    playersCardsOnHand[3].value = 1;
  }
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
  fifthCardNumber = Math.floor(fifthCardNumber * 48);
  console.log(fifthCardNumber);
  let newFifthCard = cardgame[fifthCardNumber];
  console.log(newFifthCard);
  const firstPartOfCardGame = cardgame.slice(0, fifthCardNumber);
  console.log(firstPartOfCardGame);
  const secondPartOfCardGame = cardgame.slice(fifthCardNumber + 1);
  console.log(secondPartOfCardGame);
  cardgame = firstPartOfCardGame.concat(secondPartOfCardGame);
  console.log(cardgame);
  playersCardsOnHand.push(newFifthCard);
  playerPoints = playerPoints + playersCardsOnHand[4].value;

  console.log(playersCardsOnHand);
  if (playersCardsOnHand[0].value === 11 && playerPoints > 21) {
    playersCardsOnHand[0].value = 1;
  } else if (playersCardsOnHand[1].value === 11 && playerPoints > 21) {
    playersCardsOnHand[1].value = 1;
  } else if (playersCardsOnHand[2].value === 11 && playerPoints > 21) {
    playersCardsOnHand[2].value = 1;
  } else if (playersCardsOnHand[3].value === 11 && playerPoints > 21) {
    playersCardsOnHand[3].value = 1;
  } else if (playersCardsOnHand[4].value === 11 && playerPoints > 21) {
    playersCardsOnHand[4].value = 1;
  }
  console.log(playerPoints);
  if (playerPoints > 21) {
    tooManyPointsForPlayer();
  }
  document.querySelector("#fifth-card").classList.remove("hidden");
  const cardHtml = /*html*/ `<p>${newFifthCard.name}</p>`;
  document.querySelector("#fifth-card").insertAdjacentHTML("beforeend", cardHtml);
  document.querySelector("#result-for-player").textContent = `${playerPoints}`;
  if (playerPoints < 21) {
    playerPoints = 21;
  }
  document.querySelector("#stand-for-player-button").addEventListener("click", startGameForComputer);
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
  playerPoints = "";
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
  computerPoints = "";
  computersCardsOnHand = [];
  document.querySelector("#result-for-computer").textContent = computerPoints;
  document.querySelector("#first-card-for-computer").innerHTML = "";
  document.querySelector("#second-card-for-computer").innerHTML = "";
  document.querySelector("#third-card-for-computer").innerHTML = "";
  document.querySelector("#fourth-card-for-computer").innerHTML = "";
  document.querySelector("#fifth-card-for-computer").innerHTML = "";
  document.querySelector("#first-card-for-computer").classList.add("hidden");
  document.querySelector("#second-card-for-computer").classList.add("hidden");
  document.querySelector("#third-card-for-computer").classList.add("hidden");
  document.querySelector("#fourth-card-for-computer").classList.add("hidden");
  document.querySelector("#fifth-card-for-computer").classList.add("hidden");
  start();
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
  firstCardNumber = Math.floor(firstCardNumber * 47);
  console.log(firstCardNumber);
  let newFirstCard = cardgame[firstCardNumber];
  console.log(newFirstCard);
  const firstPartOfCardGame = cardgame.slice(0, firstCardNumber);
  console.log(firstPartOfCardGame);
  const secondPartOfCardGame = cardgame.slice(firstCardNumber + 1);
  console.log(secondPartOfCardGame);
  cardgame = firstPartOfCardGame.concat(secondPartOfCardGame);
  console.log(cardgame);
  computersCardsOnHand.push(newFirstCard);
  console.log(computersCardsOnHand);
  console.log(computersCardsOnHand[0].value);
  computerPoints = newFirstCard.value;
  if (computersCardsOnHand[0].value === 11 && computerPoints > 21) {
    computersCardsOnHand[0].value = 1;
  }
  console.log(computerPoints);
  document.querySelector("#first-card-for-computer").classList.remove("hidden");
  const cardHtml = /*html*/ `<p>${newFirstCard.name}</p>`;
  document.querySelector("#first-card-for-computer").insertAdjacentHTML("beforeend", cardHtml);
  document.querySelector("#result-for-computer").textContent = `${computerPoints}`;
  if (computerPoints < playerPoints) {
    showSecondCardForComputer();
  } else if (computerPoints >= playerPoints) {
    showResultOfGame();
  }
}

function showSecondCardForComputer() {
  console.log("Andet kort for compter");
  let secondCardNumber = Math.random();
  console.log(secondCardNumber);
  secondCardNumber = Math.floor(secondCardNumber * 46);
  console.log(secondCardNumber);
  let newSecondCard = cardgame[secondCardNumber];
  console.log(newSecondCard);
  const firstPartOfCardGame = cardgame.slice(0, secondCardNumber);
  console.log(firstPartOfCardGame);
  const secondPartOfCardGame = cardgame.slice(secondCardNumber + 1);
  console.log(secondPartOfCardGame);
  cardgame = firstPartOfCardGame.concat(secondPartOfCardGame);
  console.log(cardgame);
  computersCardsOnHand.push(newSecondCard);
  console.log(computersCardsOnHand);
  console.log(computersCardsOnHand[1].value);
  computerPoints = computerPoints + computersCardsOnHand[1].value;
  if (computersCardsOnHand[0].value === 11 && computerPoints > 21) {
    computersCardsOnHand[0].value = 1;
  } else if (computersCardsOnHand[1].value === 11 && computerPoints > 21) {
    computersCardsOnHand[1].value = 1;
  }
  console.log(computerPoints);
  document.querySelector("#second-card-for-computer").classList.remove("hidden");
  const cardHtml = /*html*/ `<p>${newSecondCard.name}</p>`;
  document.querySelector("#second-card-for-computer").insertAdjacentHTML("beforeend", cardHtml);
  document.querySelector("#result-for-computer").textContent = `${computerPoints}`;
  if (computerPoints < playerPoints) {
    showThirdCardForComputer();
  } else if (computerPoints >= playerPoints) {
    showResultOfGame();
  }
}

function showThirdCardForComputer() {
  console.log("deal third card for computer");
  let thirdCardNumber = Math.random();
  console.log(thirdCardNumber);
  thirdCardNumber = Math.floor(thirdCardNumber * 45);
  console.log(thirdCardNumber);
  let newThirdCard = cardgame[thirdCardNumber];
  console.log(newThirdCard);
  const firstPartOfCardGame = cardgame.slice(0, thirdCardNumber);
  console.log(firstPartOfCardGame);
  const secondPartOfCardGame = cardgame.slice(thirdCardNumber + 1);
  console.log(secondPartOfCardGame);
  cardgame = firstPartOfCardGame.concat(secondPartOfCardGame);
  console.log(cardgame);
  computersCardsOnHand.push(newThirdCard);
  console.log(computersCardsOnHand);
  console.log(computersCardsOnHand[2].value);
  computerPoints = computerPoints + computersCardsOnHand[2].value;
  if (computersCardsOnHand[0].value === 11 && computerPoints > 21) {
    computersCardsOnHand[0].value = 1;
    console.log(computersCardsOnHand[0]);
  } else if (computersCardsOnHand[1].value === 11 && computerPoints > 21) {
    computersCardsOnHand[1].value = 1;
    console.log(computersCardsOnHand[1]);
  } else if (computersCardsOnHand[2].value === 11 && computerPoints > 21) {
    computersCardsOnHand[2].value = 1;
    console.log(computersCardsOnHand[2]);
  }
  console.log(computerPoints);
  document.querySelector("#third-card-for-computer").classList.remove("hidden");
  const cardHtml = /*html*/ `<p>${newThirdCard.name}</p>`;
  document.querySelector("#third-card-for-computer").insertAdjacentHTML("beforeend", cardHtml);
  document.querySelector("#result-for-computer").textContent = `${computerPoints}`;
  if (computerPoints < playerPoints) {
    showFourthCardForComputer();
  } else if (computerPoints >= playerPoints) {
    showResultOfGame();
  }
}

function showFourthCardForComputer() {
  console.log("Deal fourth card for computer");
  let fourthCardNumber = Math.random();
  console.log(fourthCardNumber);
  fourthCardNumber = Math.floor(fourthCardNumber * 44);
  console.log(fourthCardNumber);
  let newFourthCard = cardgame[fourthCardNumber];
  console.log(newFourthCard);
  const firstPartOfCardGame = cardgame.slice(0, fourthCardNumber);
  console.log(firstPartOfCardGame);
  const secondPartOfCardGame = cardgame.slice(fourthCardNumber + 1);
  console.log(secondPartOfCardGame);
  cardgame = firstPartOfCardGame.concat(secondPartOfCardGame);
  console.log(cardgame);
  computersCardsOnHand.push(newFourthCard);
  console.log(computersCardsOnHand);
  computerPoints = computerPoints + computersCardsOnHand[3].value;
  if (computersCardsOnHand[0].value === 11 && computerPoints > 21) {
    computersCardsOnHand[0].value = 1;
  } else if (computersCardsOnHand[1].value === 11 && computerPoints > 21) {
    computersCardsOnHand[1].value = 1;
  } else if (computersCardsOnHand[2].value === 11 && computerPoints > 21) {
    computersCardsOnHand[2].value = 1;
  } else if (computersCardsOnHand[3].value === 11 && computerPoints > 21) {
    computersCardsOnHand[3].value = 1;
    console.log(computersCardsOnHand[3].value);
  }
  console.log(computerPoints);
  document.querySelector("#fourth-card-for-computer").classList.remove("hidden");
  const cardHtml = /*html*/ `<p>${newFourthCard.name}</p>`;
  document.querySelector("#fourth-card-for-computer").insertAdjacentHTML("beforeend", cardHtml);
  document.querySelector("#result-for-computer").textContent = `${computerPoints}`;
  if (computerPoints < playerPoints) {
    showFifthCardForComputer();
  } else if (computerPoints >= playerPoints) {
    showResultOfGame();
  }
}

function showFifthCardForComputer() {
  console.log("deal fifth card");
  let fifthCardNumber = Math.random();
  console.log(fifthCardNumber);
  fifthCardNumber = Math.floor(fifthCardNumber * 43);
  console.log(fifthCardNumber);
  let newFifthCard = cardgame[fifthCardNumber];
  console.log(newFifthCard);
  const firstPartOfCardGame = cardgame.slice(0, fifthCardNumber);
  console.log(firstPartOfCardGame);
  const secondPartOfCardGame = cardgame.slice(fifthCardNumber + 1);
  console.log(secondPartOfCardGame);
  cardgame = firstPartOfCardGame.concat(secondPartOfCardGame);
  console.log(cardgame);
  computersCardsOnHand.push(newFifthCard);
  console.log(computersCardsOnHand);
  console.log(computersCardsOnHand[4].value);
  computerPoints = computerPoints + computersCardsOnHand[4].value;
  if (computersCardsOnHand[0].value === 11 && computerPoints > 21) {
    computersCardsOnHand[4].value = 1;
  } else if (computersCardsOnHand[1].value === 11 && computerPoints > 21) {
    computersCardsOnHand[2].value = 1;
  } else if (computersCardsOnHand[2].value === 11 && computerPoints > 21) {
    computersCardsOnHand[3].value = 1;
  } else if (computersCardsOnHand[4].value === 11 && computerPoints > 21) {
    computersCardsOnHand[4].value = 1;
  }
  console.log(computerPoints);
  document.querySelector("#fifth-card-for-computer").classList.remove("hidden");
  const cardHtml = /*html*/ `<p>${newFifthCard.name}</p>`;
  document.querySelector("#fifth-card-for-computer").insertAdjacentHTML("beforeend", cardHtml);
  document.querySelector("#result-for-computer").textContent = `${computerPoints}`;
  if (computerPoints < 21) {
    computerPoints = 21;
  }
  if (computerPoints < playerPoints && playerPoints < 22) {
    showResultOfGame();
  } else if (computerPoints >= playerPoints) {
    showResultOfGame();
  }
}

function showResultOfGame() {
  if (computerPoints >= playerPoints && computerPoints < 22) {
    document.querySelector("#computer-wins-message").showModal();
    document.querySelector("#ok-button-in-computer-wins-message").addEventListener("click", closeDialog);
  } else if (playerPoints > computerPoints && playerPoints < 22) {
    document.querySelector("#player-wins-message").showModal();
    document.querySelector("#ok-button-in-player-wins-message").addEventListener("click", closeDialog);
  } else if (computerPoints > 21) {
    document.querySelector("#player-wins-message").showModal();
    document.querySelector("#ok-button-in-player-wins-message").addEventListener("click", closeDialog);
  }
}

function closeDialog() {
  document.querySelector("#computer-wins-message").close();
  document.querySelector("#player-wins-message").close();
  document.querySelector("#try-again").classList.remove("hidden");
  document.querySelector("#try-again").addEventListener("click", resetGame);
}
