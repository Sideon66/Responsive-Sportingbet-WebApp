"use strict";

// /---------- DISPLAY EGLD PRICE LIVE -----------------
const functie = function (egld_price) {
  document.querySelector(".egld-price__price").textContent = egld_price;
};
setInterval(function () {
  fetch(`https://api.elrond.com/economics`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      functie(data.price);
    });
}, 1000);
