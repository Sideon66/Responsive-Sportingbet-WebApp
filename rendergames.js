"use strict";

///---------- RENDER GAMES COMPONENT 1 ------------------
const gamesR1 = document.querySelector(".gamesR1");
const ticketItemsEl = document.querySelector(".meciuri-bilet");

function renderGames() {
  gamesRound1.forEach((game) => {
    gamesR1.innerHTML += `
  <div class="tabel__row">
  <div class="tabel__row__left">
    <div class="data">${game.dateTime}</div>
    <div class="meci1">${game.game}</div>
  </div>
  <div class="tabel__row__right">
    <button class="btn-cota btn-cota-1" >${game.odds.odd1}</button>
    <button class="btn-cota btn-cota-x" >${game.odds.oddx}</button>
    <button class="btn-cota btn-cota-2" >${game.odds.odd2}</button>
  </div>
</div>
   `;
  });
}
renderGames();
//////////////////////////////////////////////////////////////////

///---------- RENDER GAMES COMPONENT 2 ------------------
const gamesR2 = document.querySelector(".gamesR2");

function renderGames2() {
  gamesRound2.forEach((game) => {
    gamesR2.innerHTML += `
  <div class="tabel__row">
  <div class="tabel__row__left">
    <div class="data">${game.dateTime}</div>
    <div class="meci1">${game.game}</div>
  </div>
  <div class="tabel__row__right">
    <button class="btn-cota2 btn-cota-1" >${game.odds.odd1}</button>
    <button class="btn-cota2 btn-cota-x" >${game.odds.oddx}</button>
    <button class="btn-cota2 btn-cota-2" >${game.odds.odd2}</button>
  </div>
</div>
   `;
  });
}
renderGames2();

///---------- RENDER GAMES COMPONENT 2 ------------------
const gamesR3 = document.querySelector(".gamesR3");

function renderGames3() {
  gamesRound3.forEach((game) => {
    gamesR3.innerHTML += `
  <div class="tabel__row">
  <div class="tabel__row__left">
    <div class="data">${game.dateTime}</div>
    <div class="meci1">${game.game}</div>
  </div>
  <div class="tabel__row__right">
    <button class="btn-cota3 btn-cota-1" >${game.odds.odd1}</button>
    <button class="btn-cota3 btn-cota-x" >${game.odds.oddx}</button>
    <button class="btn-cota3 btn-cota-2" >${game.odds.odd2}</button>
  </div>
</div>
   `;
  });
}
renderGames3();
