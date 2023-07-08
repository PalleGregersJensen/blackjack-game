"use strict"

let cardgame = []; 
window.addEventListener("load", start);

async function start() {
    console.log("JS kører");
    cardgame = await getJsonFile();
    console.log(cardgame);
    showCardgame(cardgame)
}

async function getJsonFile() {
    const response = await fetch("cardgame.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}

function showCardgame(cardsList) {
  for (const card of cardsList) {
    const cardHtml = /*html*/ `<P>${card.name}</P>`;
    document.querySelector("#cardgame-holder").insertAdjacentHTML("beforeend", cardHtml);
  }
}