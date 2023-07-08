"use strict";

let cardgame = [];
let playersCardsOnHand = [];
let playerPoints = 0;
let computerPoints = 0;

window.addEventListener("load", start);

async function start() {
  console.log("JS kører");
  cardgame = await getJsonFile();
  console.log(cardgame);
  document.querySelector("#deal-card").addEventListener("click", dealCard);
  //   showCardgame(cardgame);
//   showFirstCard();
}

// ==== get JSON data ======
async function getJsonFile() {
  const response = await fetch("cardgame.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

// function showCardgame(cardsList) {
//   for (const card of cardsList) {
//     const cardHtml = /*html*/ `<P>${card.name}</P>`;
//     document.querySelector("#cardgame-holder").insertAdjacentHTML("beforeend", cardHtml);
//   }
// }

// ==== decide which cards are shown ======
function dealCard() {
  console.log("deal card");
  if (playersCardsOnHand.length === 0) {
    showFirstCard();
  } else if (playersCardsOnHand.length === 1) {
    showSecondCard();
  } else if (playersCardsOnHand.length === 2) {
    showThirdCard();
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
  playersCardsOnHand.push(newFirstCard);
    console.log(playersCardsOnHand);
    document.querySelector("#first-card").classList.remove("hidden");
  const cardHtml = /*html*/ `<P>${newFirstCard.name}</P>`;
  document.querySelector("#first-card").insertAdjacentHTML("beforeend", cardHtml);
}

// ==== show second card ======
function showSecondCard() {
  let secondCardNumber = Math.random();
  console.log(secondCardNumber);
  secondCardNumber = Math.floor(secondCardNumber * 52);
  console.log(secondCardNumber);
  let newSecondCard = cardgame[secondCardNumber];
  console.log(newSecondCard);
  playersCardsOnHand.push(newSecondCard);
    console.log(playersCardsOnHand);
    document.querySelector("#second-card").classList.remove("hidden");
  const cardHtml = /*html*/ `<P>${newSecondCard.name}</P>`;
  document.querySelector("#second-card").insertAdjacentHTML("beforeend", cardHtml);
}

// ==== show third card ======
function showThirdCard() {
  let thirdCardNumber = Math.random();
  console.log(thirdCardNumber);
  thirdCardNumber = Math.floor(thirdCardNumber * 52);
  console.log(thirdCardNumber);
  let newThirdCard = cardgame[thirdCardNumber];
  console.log(newThirdCard);
  playersCardsOnHand.push(newThirdCard);
    console.log(playersCardsOnHand);
    document.querySelector("#third-card").classList.remove("hidden");
  const cardHtml = /*html*/ `<P>${newThirdCard.name}</P>`;
  document.querySelector("#third-card").insertAdjacentHTML("beforeend", cardHtml);
}
