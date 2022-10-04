"use strict";

///---------- GENERATE TICKET COMPONENT -------
let meciuriPeBilet = [];
let totalOddBilet = [];
const input = document.querySelector(".input-ammount");
const potentialWin = document.querySelector(".potential-win-sum");
const toateButoane = document.querySelectorAll(".btn-cota");
const toateButoane2 = document.querySelectorAll(".btn-cota2");
const toateButoane3 = document.querySelectorAll(".btn-cota3");
const clearButtons = document.querySelectorAll(".btn-clear");
const removeAllSelections = document.querySelector(".clear-ticket-games");
const nrSelectii = document.querySelector(".nr-selection");
////ticket indicator
const phoneInd = document.querySelector(".phone-ticket-indicator");
const oddIndicator = document.querySelector(".phone-ticket-indicator-odd");
const nrSelInd = document.querySelector(".phone-ticket-indicator-selections");
///---------- FUNTION CALCULTATE POTENTIAL WIN --------------
const mult = function (...numbers) {
  let res = 1;
  for (let i = 0; i < numbers.length; i++) res *= numbers[i];
  return res;
};

///---------- BUTTONS EVENT WITH TICKET COMPONENT TABEL 1 ---------------

///---------- 1. LOOP ALL BUTTONS AND ADD EVENT LISTENER FOR EACH
for (let i = 0; i < toateButoane.length; ++i) {
  toateButoane[i].addEventListener("click", function () {
    ///---------- 2. BUTTONS CONTAINS CLASS "btn-cota-1" AND AREN'T ON TICKET
    if (
      toateButoane[i].classList.contains("btn-cota-1") &&
      !meciuriPeBilet.includes(gamesRound1[i / 3].game)
    ) {
      phoneInd.classList.remove("hidden");
      nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length + 1})`;
      removeAllSelections.classList.remove("hidden-remove");
      toateButoane[i].classList.add("apasat"); // ADD CLASS LIST APASAT
      const html = `<div class="meci-bilet" id="${i / 3}" >
           <div class="echipe-bilet">${gamesRound1[i / 3].game}</div>
           <div class="selectieMeci-bilet">1</div>
           <div class="cotaMeci-bilet">${gamesRound1[i / 3].odds.odd1}</div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ticket-remove-game remove-${
             i / 3
           }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>

           </div>`; // ADD GAME ON TICKET
      ticketItemsEl.insertAdjacentHTML("beforeend", html);

      meciuriPeBilet.push(gamesRound1[i / 3].game); // STORE CURRENT GAME IN "meciuriPeBilet" ARRAY

      totalOddBilet.push(Number(gamesRound1[i / 3].odds.odd1)); // STORE CURRENT ODD in "totalOddBilet" ARRAY

      //CALCULATE COTA TOTALA AND STORE IT IN "cotaTotala"
      let cotaTotala = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable

      oddIndicator.textContent = cotaTotala;
      nrSelInd.textContent = meciuriPeBilet.length;

      //Function updatePotential Win
      function updatePotentialWin() {
        potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win

      //If another odd button is pressed UPDATE potential win
      const numar = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numar * cotaTotala).toFixed(2);
      oddIndicator.textContent = cotaTotala;
      nrSelInd.textContent = meciuriPeBilet.length;

      //----------------- REMOVE TICKET GAME COMPONENT -------------------
      document.querySelector(`.remove-` + i / 3).addEventListener(
        "click",
        function () {
          const removeGame = this.parentNode;
          ticketItemsEl.removeChild(removeGame); //Sterg meciu html din ticket

          toateButoane[i].classList.remove("apasat"); //Sterg clasa "apasat" de pe buton
          const rezultat = meciuriPeBilet.filter(
            (meci) => meci === gamesRound1[i / 3].game
          );
          const index = meciuriPeBilet.indexOf(`${rezultat}`);
          meciuriPeBilet.splice(`${index}`, 1); //2.2 Scot meciu din Array meciuri
          nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length})`;

          //------------------------------------
          const rezultat1 = totalOddBilet.filter(
            (cota) => cota === Number(gamesRound1[i / 3].odds.odd1)
          );
          const index1 = totalOddBilet.indexOf(...rezultat1);
          totalOddBilet.splice(`${index1}`, 1); //2.3 Scot cota din Array cote
          //------------------------------------
          let cotaTotala = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWin() {
            potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numar = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numar * cotaTotala).toFixed(2); //2.3 Update potentialWin
          if (meciuriPeBilet.length === 0)
            removeAllSelections.classList.add("hidden-remove");
          oddIndicator.textContent = cotaTotala;
          nrSelInd.textContent = meciuriPeBilet.length;
          if (meciuriPeBilet.length === 0) phoneInd.classList.add("hidden");
        },
        { once: true }
      );
      //------------------------------------
      // ---- CLEAR ALL GAMES FROM TICKET --

      document
        .querySelector(".btn-clear-all")
        .addEventListener("click", function () {
          phoneInd.classList.add("hidden");
          toateButoane[i].classList.remove("apasat");
          meciuriPeBilet = [];
          totalOddBilet = [];
          ticketItemsEl.innerHTML = "";
          removeAllSelections.classList.add("hidden-remove");
          let cotaTotalaf = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWinf() {
            potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numarf = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin
        });

      let cotaTotalaf = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
      //------------------------------------
      //Function updatePotential Win
      function updatePotentialWinf() {
        potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
      //------------------------------------
      //If another odd button is pressed UPDATE potential win
      const numarf = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin

      //------------------------------------
    }

    ///---------- 3. BUTTONS CONTAINS CLASS "btn-cota-x" AND AREN'T ON TICKET
    if (
      toateButoane[i].classList.contains("btn-cota-x") &&
      !meciuriPeBilet.includes(gamesRound1[(i - 1) / 3].game)
    ) {
      phoneInd.classList.remove("hidden");
      nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length + 1})`;
      removeAllSelections.classList.remove("hidden-remove");
      toateButoane[i].classList.add("apasat"); // ADD CLASS LIST APASAT
      const html = `<div class="meci-bilet" id="${(i - 1) / 3}" >  
           <div class="echipe-bilet">${gamesRound1[(i - 1) / 3].game}</div>
           <div class="selectieMeci-bilet">X</div>
           <div class="cotaMeci-bilet">${
             gamesRound1[(i - 1) / 3].odds.oddx
           }</div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ticket-remove-game remove-${
             (i - 1) / 3
           }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
           </div>`; // ADD GAME ON TICKET
      ticketItemsEl.insertAdjacentHTML("beforeend", html);
      meciuriPeBilet.push(gamesRound1[(i - 1) / 3].game); // STORE CURRENT GAME IN "meciuriPeBilet" ARRAY

      totalOddBilet.push(Number(gamesRound1[(i - 1) / 3].odds.oddx)); // STORE CURRENT ODD in "totalOddBilet" ARRAY

      //CALCULATE COTA TOTALA AND STORE IT IN "cotaTotala"
      let cotaTotala = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable

      //Function updatePotential Win
      function updatePotentialWin() {
        potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win

      //If another odd button is pressed UPDATE potential win
      const numar = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numar * cotaTotala).toFixed(2);
      oddIndicator.textContent = cotaTotala;
      nrSelInd.textContent = meciuriPeBilet.length;

      //----------------- REMOVE TICKET GAME COMPONENT -------------------
      document.querySelector(`.remove-` + (i - 1) / 3).addEventListener(
        "click",
        function () {
          const removeGame = this.parentNode;
          ticketItemsEl.removeChild(removeGame);
          toateButoane[i].classList.remove("apasat"); //Sterg clasa apasat
          const rezultat = meciuriPeBilet.filter(
            (meci) => meci === gamesRound1[(i - 1) / 3].game
          );
          const index = meciuriPeBilet.indexOf(`${rezultat}`);
          meciuriPeBilet.splice(`${index}`, 1); //2.2 Scot meciu din Array meciuri
          nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length})`;
          //------------------------------------
          const rezultat1 = totalOddBilet.filter(
            (cota) => cota === Number(gamesRound1[(i - 1) / 3].odds.oddx)
          );
          const index1 = totalOddBilet.indexOf(...rezultat1);
          totalOddBilet.splice(`${index1}`, 1); //2.3 Scot cota din Array cote
          //------------------------------------
          let cotaTotala = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWin() {
            potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numar = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numar * cotaTotala).toFixed(2); //2.3 Update potentialWin
          if (meciuriPeBilet.length === 0)
            removeAllSelections.classList.add("hidden-remove");
          oddIndicator.textContent = cotaTotala;
          nrSelInd.textContent = meciuriPeBilet.length;
          if (meciuriPeBilet.length === 0) phoneInd.classList.add("hidden");
        },
        { once: true }
      );
      //------------------------------------
      // ---- CLEAR ALL GAMES FROM TICKET --

      document
        .querySelector(".btn-clear-all")
        .addEventListener("click", function () {
          phoneInd.classList.add("hidden");
          toateButoane[i].classList.remove("apasat");
          meciuriPeBilet = [];
          totalOddBilet = [];
          ticketItemsEl.innerHTML = "";
          removeAllSelections.classList.add("hidden-remove");
          let cotaTotalaf = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWinf() {
            potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numarf = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin
        });

      let cotaTotalaf = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
      //------------------------------------
      //Function updatePotential Win
      function updatePotentialWinf() {
        potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
      //------------------------------------
      //If another odd button is pressed UPDATE potential win
      const numarf = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin

      //------------------------------------
    }

    ///---------- 3. BUTTONS CONTAINS CLASS "btn-cota-2" AND AREN'T ON TICKET
    if (
      toateButoane[i].classList.contains("btn-cota-2") &&
      !meciuriPeBilet.includes(gamesRound1[(i - 2) / 3].game)
    ) {
      phoneInd.classList.remove("hidden");
      nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length + 1})`;
      removeAllSelections.classList.remove("hidden-remove");
      toateButoane[i].classList.add("apasat"); // ADD CLASS LIST APASAT
      const html = `<div class="meci-bilet" id="${(i - 2) / 3}">
           <div class="echipe-bilet">${gamesRound1[(i - 2) / 3].game}</div>
           <div class="selectieMeci-bilet">2</div>
           <div class="cotaMeci-bilet">${
             gamesRound1[(i - 2) / 3].odds.odd2
           }</div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ticket-remove-game remove-${
             (i - 2) / 3
           }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
           </div>`;
      ticketItemsEl.insertAdjacentHTML("beforeend", html);
      meciuriPeBilet.push(gamesRound1[(i - 2) / 3].game); // STORE CURRENT GAME IN "meciuriPeBilet" ARRAY

      totalOddBilet.push(Number(gamesRound1[(i - 2) / 3].odds.odd2)); // STORE CURRENT ODD in "totalOddBilet" ARRAY

      //CALCULATE COTA TOTALA AND STORE IT IN "cotaTotala"
      let cotaTotala = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable

      //Function updatePotential Win
      function updatePotentialWin() {
        potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win
      //If another odd button is pressed UPDATE potential win
      const numar = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numar * cotaTotala).toFixed(2);
      oddIndicator.textContent = cotaTotala;
      nrSelInd.textContent = meciuriPeBilet.length;

      //----------------- REMOVE TICKET GAME COMPONENT -------------------
      document.querySelector(`.remove-` + (i - 2) / 3).addEventListener(
        "click",
        function () {
          const removeGame = this.parentNode;
          ticketItemsEl.removeChild(removeGame);
          toateButoane[i].classList.remove("apasat"); //Sterg clasa apasat
          const rezultat = meciuriPeBilet.filter(
            (meci) => meci === gamesRound1[(i - 2) / 3].game
          );
          const index = meciuriPeBilet.indexOf(`${rezultat}`);
          meciuriPeBilet.splice(`${index}`, 1); //2.2 Scot meciu din Array meciuri
          nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length})`;
          //------------------------------------
          const rezultat1 = totalOddBilet.filter(
            (cota) => cota === Number(gamesRound1[(i - 2) / 3].odds.odd2)
          );
          const index1 = totalOddBilet.indexOf(...rezultat1);
          totalOddBilet.splice(`${index1}`, 1); //2.3 Scot cota din Array cote
          //------------------------------------
          let cotaTotala = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWin() {
            potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numar = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numar * cotaTotala).toFixed(2); //2.3 Update potentialWin
          if (meciuriPeBilet.length === 0)
            removeAllSelections.classList.add("hidden-remove");
          oddIndicator.textContent = cotaTotala;
          nrSelInd.textContent = meciuriPeBilet.length;
          if (meciuriPeBilet.length === 0) phoneInd.classList.add("hidden");
        },
        { once: true }
      );
      //------------------------------------
      // ---- CLEAR ALL GAMES FROM TICKET --

      document
        .querySelector(".btn-clear-all")
        .addEventListener("click", function () {
          phoneInd.classList.add("hidden");
          toateButoane[i].classList.remove("apasat");
          meciuriPeBilet = [];
          totalOddBilet = [];
          ticketItemsEl.innerHTML = "";
          removeAllSelections.classList.add("hidden-remove");
          let cotaTotalaf = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWinf() {
            potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numarf = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin
        });

      let cotaTotalaf = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
      //------------------------------------
      //Function updatePotential Win
      function updatePotentialWinf() {
        potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
      //------------------------------------
      //If another odd button is pressed UPDATE potential win
      const numarf = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin

      //------------------------------------
    }
    //------------------------------------- ROUND 1 FINISH COMPONENT -------------------------------------
  });
}

///---------- BUTTONS EVENT WITH TICKET COMPONENT TABEL 2 ---------------

///---------- 1. LOOP ALL BUTTONS AND ADD EVENT LISTENER FOR EACH

for (let i = 0; i < toateButoane2.length; ++i) {
  toateButoane2[i].addEventListener("click", function () {
    ///---------- 2. BUTTONS CONTAINS CLASS "btn-cota-1" AND AREN'T ON TICKET
    if (
      toateButoane2[i].classList.contains("btn-cota-1") &&
      !meciuriPeBilet.includes(gamesRound2[i / 3].game)
    ) {
      phoneInd.classList.remove("hidden");
      nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length + 1})`;
      removeAllSelections.classList.remove("hidden-remove");
      toateButoane2[i].classList.add("apasat"); // ADD CLASS LIST APASAT
      const html = `<div class="meci-bilet" id="${i / 3}" >
           <div class="echipe-bilet">${gamesRound2[i / 3].game}</div>
           <div class="selectieMeci-bilet">1</div>
           <div class="cotaMeci-bilet">${gamesRound2[i / 3].odds.odd1}</div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ticket-remove-game remove2-${
             i / 3
           }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>

           </div>`; // ADD GAME ON TICKET
      ticketItemsEl.insertAdjacentHTML("beforeend", html);

      meciuriPeBilet.push(gamesRound2[i / 3].game); // STORE CURRENT GAME IN "meciuriPeBilet" ARRAY

      totalOddBilet.push(Number(gamesRound2[i / 3].odds.odd1)); // STORE CURRENT ODD in "totalOddBilet" ARRAY

      //CALCULATE COTA TOTALA AND STORE IT IN "cotaTotala"
      let cotaTotala = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable

      //Function updatePotential Win
      function updatePotentialWin() {
        potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win

      //If another odd button is pressed UPDATE potential win
      const numar = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numar * cotaTotala).toFixed(2);
      oddIndicator.textContent = cotaTotala;
      nrSelInd.textContent = meciuriPeBilet.length;

      //----------------- REMOVE TICKET GAME COMPONENT -------------------
      document.querySelector(`.remove2-` + i / 3).addEventListener(
        "click",
        function () {
          const removeGame = this.parentNode;
          ticketItemsEl.removeChild(removeGame); //Sterg meciu html din ticket

          toateButoane2[i].classList.remove("apasat"); //Sterg clasa "apasat" de pe buton
          const rezultat = meciuriPeBilet.filter(
            (meci) => meci === gamesRound2[i / 3].game
          );
          const index = meciuriPeBilet.indexOf(`${rezultat}`);
          meciuriPeBilet.splice(`${index}`, 1); //2.2 Scot meciu din Array meciuri
          nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length})`;
          //------------------------------------
          const rezultat1 = totalOddBilet.filter(
            (cota) => cota === Number(gamesRound2[i / 3].odds.odd1)
          );
          const index1 = totalOddBilet.indexOf(...rezultat1);
          totalOddBilet.splice(`${index1}`, 1); //2.3 Scot cota din Array cote
          //------------------------------------
          let cotaTotala = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWin() {
            potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numar = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numar * cotaTotala).toFixed(2); //2.3 Update potentialWin
          if (meciuriPeBilet.length === 0)
            removeAllSelections.classList.add("hidden-remove");
          oddIndicator.textContent = cotaTotala;
          nrSelInd.textContent = meciuriPeBilet.length;
          if (meciuriPeBilet.length === 0) phoneInd.classList.add("hidden");
        },
        { once: true }
      );
      //------------------------------------
      // ---- CLEAR ALL GAMES FROM TICKET --

      document
        .querySelector(".btn-clear-all")
        .addEventListener("click", function () {
          phoneInd.classList.add("hidden");
          toateButoane2[i].classList.remove("apasat");
          meciuriPeBilet = [];
          totalOddBilet = [];
          ticketItemsEl.innerHTML = "";
          removeAllSelections.classList.add("hidden-remove");
          let cotaTotalaf = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWinf() {
            potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numarf = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin
        });

      let cotaTotalaf = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
      //------------------------------------
      //Function updatePotential Win
      function updatePotentialWinf() {
        potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
      //------------------------------------
      //If another odd button is pressed UPDATE potential win
      const numarf = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin
    }
    ///---------- 3. BUTTONS CONTAINS CLASS "btn-cota-x" AND AREN'T ON TICKET
    if (
      toateButoane2[i].classList.contains("btn-cota-x") &&
      !meciuriPeBilet.includes(gamesRound2[(i - 1) / 3].game)
    ) {
      phoneInd.classList.remove("hidden");
      nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length + 1})`;
      removeAllSelections.classList.remove("hidden-remove");
      toateButoane2[i].classList.add("apasat"); // ADD CLASS LIST APASAT
      const html = `<div class="meci-bilet" id="${(i - 1) / 3}" >  
           <div class="echipe-bilet">${gamesRound2[(i - 1) / 3].game}</div>
           <div class="selectieMeci-bilet">X</div>
           <div class="cotaMeci-bilet">${
             gamesRound2[(i - 1) / 3].odds.oddx
           }</div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ticket-remove-game remove2-${
             (i - 1) / 3
           }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
           </div>`; // ADD GAME ON TICKET
      ticketItemsEl.insertAdjacentHTML("beforeend", html);
      meciuriPeBilet.push(gamesRound2[(i - 1) / 3].game); // STORE CURRENT GAME IN "meciuriPeBilet" ARRAY

      totalOddBilet.push(Number(gamesRound2[(i - 1) / 3].odds.oddx)); // STORE CURRENT ODD in "totalOddBilet" ARRAY

      //CALCULATE COTA TOTALA AND STORE IT IN "cotaTotala"
      let cotaTotala = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable

      //Function updatePotential Win
      function updatePotentialWin() {
        potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win

      //If another odd button is pressed UPDATE potential win
      const numar = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numar * cotaTotala).toFixed(2);
      oddIndicator.textContent = cotaTotala;
      nrSelInd.textContent = meciuriPeBilet.length;

      //----------------- REMOVE TICKET GAME COMPONENT -------------------
      document.querySelector(`.remove2-` + (i - 1) / 3).addEventListener(
        "click",
        function () {
          const removeGame = this.parentNode;
          ticketItemsEl.removeChild(removeGame);
          toateButoane2[i].classList.remove("apasat"); //Sterg clasa apasat
          const rezultat = meciuriPeBilet.filter(
            (meci) => meci === gamesRound2[(i - 1) / 3].game
          );
          const index = meciuriPeBilet.indexOf(`${rezultat}`);
          meciuriPeBilet.splice(`${index}`, 1); //2.2 Scot meciu din Array meciuri
          nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length})`;
          //------------------------------------
          const rezultat1 = totalOddBilet.filter(
            (cota) => cota === Number(gamesRound2[(i - 1) / 3].odds.oddx)
          );
          const index1 = totalOddBilet.indexOf(...rezultat1);
          totalOddBilet.splice(`${index1}`, 1); //2.3 Scot cota din Array cote
          //------------------------------------
          let cotaTotala = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWin() {
            potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numar = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numar * cotaTotala).toFixed(2); //2.3 Update potentialWin
          if (meciuriPeBilet.length === 0)
            removeAllSelections.classList.add("hidden-remove");
          oddIndicator.textContent = cotaTotala;
          nrSelInd.textContent = meciuriPeBilet.length;
          if (meciuriPeBilet.length === 0) phoneInd.classList.add("hidden");
        },
        { once: true }
      );
      //------------------------------------
      // ---- CLEAR ALL GAMES FROM TICKET --

      document
        .querySelector(".btn-clear-all")
        .addEventListener("click", function () {
          phoneInd.classList.add("hidden");
          toateButoane2[i].classList.remove("apasat");
          meciuriPeBilet = [];
          totalOddBilet = [];
          ticketItemsEl.innerHTML = "";
          removeAllSelections.classList.add("hidden-remove");
          let cotaTotalaf = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWinf() {
            potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numarf = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin
        });

      let cotaTotalaf = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
      //------------------------------------
      //Function updatePotential Win
      function updatePotentialWinf() {
        potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
      //------------------------------------
      //If another odd button is pressed UPDATE potential win
      const numarf = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin

      //------------------------------------
    }

    ///---------- 3. BUTTONS CONTAINS CLASS "btn-cota-2" AND AREN'T ON TICKET
    if (
      toateButoane2[i].classList.contains("btn-cota-2") &&
      !meciuriPeBilet.includes(gamesRound2[(i - 2) / 3].game)
    ) {
      phoneInd.classList.remove("hidden");
      nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length + 1})`;
      removeAllSelections.classList.remove("hidden-remove");
      toateButoane2[i].classList.add("apasat"); // ADD CLASS LIST APASAT
      const html = `<div class="meci-bilet" id="${(i - 2) / 3}">
           <div class="echipe-bilet">${gamesRound2[(i - 2) / 3].game}</div>
           <div class="selectieMeci-bilet">2</div>
           <div class="cotaMeci-bilet">${
             gamesRound2[(i - 2) / 3].odds.odd2
           }</div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ticket-remove-game remove2-${
             (i - 2) / 3
           }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
           </div>`;
      ticketItemsEl.insertAdjacentHTML("beforeend", html);
      meciuriPeBilet.push(gamesRound2[(i - 2) / 3].game); // STORE CURRENT GAME IN "meciuriPeBilet" ARRAY

      totalOddBilet.push(Number(gamesRound2[(i - 2) / 3].odds.odd2)); // STORE CURRENT ODD in "totalOddBilet" ARRAY

      //CALCULATE COTA TOTALA AND STORE IT IN "cotaTotala"
      let cotaTotala = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable

      //Function updatePotential Win
      function updatePotentialWin() {
        potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win
      //If another odd button is pressed UPDATE potential win
      const numar = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numar * cotaTotala).toFixed(2);
      oddIndicator.textContent = cotaTotala;
      nrSelInd.textContent = meciuriPeBilet.length;

      //----------------- REMOVE TICKET GAME COMPONENT -------------------
      document.querySelector(`.remove2-` + (i - 2) / 3).addEventListener(
        "click",
        function () {
          const removeGame = this.parentNode;
          ticketItemsEl.removeChild(removeGame);
          toateButoane2[i].classList.remove("apasat"); //Sterg clasa apasat
          const rezultat = meciuriPeBilet.filter(
            (meci) => meci === gamesRound2[(i - 2) / 3].game
          );
          const index = meciuriPeBilet.indexOf(`${rezultat}`);
          meciuriPeBilet.splice(`${index}`, 1); //2.2 Scot meciu din Array meciuri
          nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length})`;
          //------------------------------------
          const rezultat1 = totalOddBilet.filter(
            (cota) => cota === Number(gamesRound2[(i - 2) / 3].odds.odd2)
          );
          const index1 = totalOddBilet.indexOf(...rezultat1);
          totalOddBilet.splice(`${index1}`, 1); //2.3 Scot cota din Array cote
          //------------------------------------
          let cotaTotala = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWin() {
            potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numar = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numar * cotaTotala).toFixed(2); //2.3 Update potentialWin
          if (meciuriPeBilet.length === 0)
            removeAllSelections.classList.add("hidden-remove");
          oddIndicator.textContent = cotaTotala;
          nrSelInd.textContent = meciuriPeBilet.length;
          if (meciuriPeBilet.length === 0) phoneInd.classList.add("hidden");
        },
        { once: true }
      );
      //------------------------------------
      // ---- CLEAR ALL GAMES FROM TICKET --

      document
        .querySelector(".btn-clear-all")
        .addEventListener("click", function () {
          phoneInd.classList.add("hidden");
          toateButoane2[i].classList.remove("apasat");
          meciuriPeBilet = [];
          totalOddBilet = [];
          ticketItemsEl.innerHTML = "";
          removeAllSelections.classList.add("hidden-remove");
          let cotaTotalaf = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWinf() {
            potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numarf = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin
        });

      let cotaTotalaf = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
      //------------------------------------
      //Function updatePotential Win
      function updatePotentialWinf() {
        potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
      //------------------------------------
      //If another odd button is pressed UPDATE potential win
      const numarf = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin

      //------------------------------------
    }
    //------------------------------------- ROUND 2 FINISH COMPONENT -------------------------------------
  });
}

///---------- BUTTONS EVENT WITH TICKET COMPONENT TABEL 3 ---------------

///---------- 1. LOOP ALL BUTTONS AND ADD EVENT LISTENER FOR EACH

for (let i = 0; i < toateButoane3.length; ++i) {
  toateButoane3[i].addEventListener("click", function () {
    ///---------- 2. BUTTONS CONTAINS CLASS "btn-cota-1" AND AREN'T ON TICKET
    if (
      toateButoane3[i].classList.contains("btn-cota-1") &&
      !meciuriPeBilet.includes(gamesRound3[i / 3].game)
    ) {
      phoneInd.classList.remove("hidden");
      nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length + 1})`;
      removeAllSelections.classList.remove("hidden-remove");
      toateButoane3[i].classList.add("apasat"); // ADD CLASS LIST APASAT
      const html = `<div class="meci-bilet" id="${i / 3}" >
           <div class="echipe-bilet">${gamesRound3[i / 3].game}</div>
           <div class="selectieMeci-bilet">1</div>
           <div class="cotaMeci-bilet">${gamesRound3[i / 3].odds.odd1}</div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ticket-remove-game remove3-${
             i / 3
           }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>

           </div>`; // ADD GAME ON TICKET
      ticketItemsEl.insertAdjacentHTML("beforeend", html);

      meciuriPeBilet.push(gamesRound3[i / 3].game); // STORE CURRENT GAME IN "meciuriPeBilet" ARRAY

      totalOddBilet.push(Number(gamesRound3[i / 3].odds.odd1)); // STORE CURRENT ODD in "totalOddBilet" ARRAY

      //CALCULATE COTA TOTALA AND STORE IT IN "cotaTotala"
      let cotaTotala = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable

      //Function updatePotential Win
      function updatePotentialWin() {
        potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win

      //If another odd button is pressed UPDATE potential win
      const numar = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numar * cotaTotala).toFixed(2);
      oddIndicator.textContent = cotaTotala;
      nrSelInd.textContent = meciuriPeBilet.length;

      //----------------- REMOVE TICKET GAME COMPONENT -------------------
      document.querySelector(`.remove3-` + i / 3).addEventListener(
        "click",
        function () {
          const removeGame = this.parentNode;
          ticketItemsEl.removeChild(removeGame); //Sterg meciu html din ticket

          toateButoane3[i].classList.remove("apasat"); //Sterg clasa "apasat" de pe buton
          const rezultat = meciuriPeBilet.filter(
            (meci) => meci === gamesRound3[i / 3].game
          );
          const index = meciuriPeBilet.indexOf(`${rezultat}`);
          meciuriPeBilet.splice(`${index}`, 1); //2.2 Scot meciu din Array meciuri
          nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length})`;
          //------------------------------------
          const rezultat1 = totalOddBilet.filter(
            (cota) => cota === Number(gamesRound3[i / 3].odds.odd1)
          );
          const index1 = totalOddBilet.indexOf(...rezultat1);
          totalOddBilet.splice(`${index1}`, 1); //2.3 Scot cota din Array cote
          //------------------------------------
          let cotaTotala = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWin() {
            potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numar = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numar * cotaTotala).toFixed(2); //2.3 Update potentialWin
          if (meciuriPeBilet.length === 0)
            removeAllSelections.classList.add("hidden-remove");
          oddIndicator.textContent = cotaTotala;
          nrSelInd.textContent = meciuriPeBilet.length;
          if (meciuriPeBilet.length === 0) phoneInd.classList.add("hidden");
        },
        { once: true }
      );
      //------------------------------------
      // ---- CLEAR ALL GAMES FROM TICKET --

      document
        .querySelector(".btn-clear-all")
        .addEventListener("click", function () {
          phoneInd.classList.add("hidden");
          toateButoane3[i].classList.remove("apasat");
          meciuriPeBilet = [];
          totalOddBilet = [];
          ticketItemsEl.innerHTML = "";
          removeAllSelections.classList.add("hidden-remove");
          let cotaTotalaf = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWinf() {
            potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numarf = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin
        });

      let cotaTotalaf = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
      //------------------------------------
      //Function updatePotential Win
      function updatePotentialWinf() {
        potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
      //------------------------------------
      //If another odd button is pressed UPDATE potential win
      const numarf = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin
    }
    ///---------- 3. BUTTONS CONTAINS CLASS "btn-cota-x" AND AREN'T ON TICKET
    if (
      toateButoane3[i].classList.contains("btn-cota-x") &&
      !meciuriPeBilet.includes(gamesRound3[(i - 1) / 3].game)
    ) {
      phoneInd.classList.remove("hidden");
      nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length + 1})`;
      removeAllSelections.classList.remove("hidden-remove");
      toateButoane3[i].classList.add("apasat"); // ADD CLASS LIST APASAT
      const html = `<div class="meci-bilet" id="${(i - 1) / 3}" >  
           <div class="echipe-bilet">${gamesRound3[(i - 1) / 3].game}</div>
           <div class="selectieMeci-bilet">X</div>
           <div class="cotaMeci-bilet">${
             gamesRound3[(i - 1) / 3].odds.oddx
           }</div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ticket-remove-game remove3-${
             (i - 1) / 3
           }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
           </div>`; // ADD GAME ON TICKET
      ticketItemsEl.insertAdjacentHTML("beforeend", html);
      meciuriPeBilet.push(gamesRound3[(i - 1) / 3].game); // STORE CURRENT GAME IN "meciuriPeBilet" ARRAY

      totalOddBilet.push(Number(gamesRound3[(i - 1) / 3].odds.oddx)); // STORE CURRENT ODD in "totalOddBilet" ARRAY

      //CALCULATE COTA TOTALA AND STORE IT IN "cotaTotala"
      let cotaTotala = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable

      //Function updatePotential Win
      function updatePotentialWin() {
        potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win

      //If another odd button is pressed UPDATE potential win
      const numar = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numar * cotaTotala).toFixed(2);
      oddIndicator.textContent = cotaTotala;
      nrSelInd.textContent = meciuriPeBilet.length;

      //----------------- REMOVE TICKET GAME COMPONENT -------------------
      document.querySelector(`.remove3-` + (i - 1) / 3).addEventListener(
        "click",
        function () {
          const removeGame = this.parentNode;
          ticketItemsEl.removeChild(removeGame);
          toateButoane3[i].classList.remove("apasat"); //Sterg clasa apasat
          const rezultat = meciuriPeBilet.filter(
            (meci) => meci === gamesRound3[(i - 1) / 3].game
          );
          const index = meciuriPeBilet.indexOf(`${rezultat}`);
          meciuriPeBilet.splice(`${index}`, 1); //2.2 Scot meciu din Array meciuri
          nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length})`;
          //------------------------------------
          const rezultat1 = totalOddBilet.filter(
            (cota) => cota === Number(gamesRound3[(i - 1) / 3].odds.oddx)
          );
          const index1 = totalOddBilet.indexOf(...rezultat1);
          totalOddBilet.splice(`${index1}`, 1); //2.3 Scot cota din Array cote
          //------------------------------------
          let cotaTotala = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWin() {
            potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numar = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numar * cotaTotala).toFixed(2); //2.3 Update potentialWin
          if (meciuriPeBilet.length === 0)
            removeAllSelections.classList.add("hidden-remove");
          oddIndicator.textContent = cotaTotala;
          nrSelInd.textContent = meciuriPeBilet.length;
          if (meciuriPeBilet.length === 0) phoneInd.classList.add("hidden");
        },
        { once: true }
      );
      //------------------------------------
      // ---- CLEAR ALL GAMES FROM TICKET --

      document
        .querySelector(".btn-clear-all")
        .addEventListener("click", function () {
          phoneInd.classList.add("hidden");
          toateButoane3[i].classList.remove("apasat");
          meciuriPeBilet = [];
          totalOddBilet = [];
          ticketItemsEl.innerHTML = "";
          removeAllSelections.classList.add("hidden-remove");
          let cotaTotalaf = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWinf() {
            potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numarf = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin
        });

      let cotaTotalaf = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
      //------------------------------------
      //Function updatePotential Win
      function updatePotentialWinf() {
        potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
      //------------------------------------
      //If another odd button is pressed UPDATE potential win
      const numarf = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin

      //------------------------------------
    }

    ///---------- 3. BUTTONS CONTAINS CLASS "btn-cota-2" AND AREN'T ON TICKET
    if (
      toateButoane3[i].classList.contains("btn-cota-2") &&
      !meciuriPeBilet.includes(gamesRound3[(i - 2) / 3].game)
    ) {
      phoneInd.classList.remove("hidden");
      nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length + 1})`;
      removeAllSelections.classList.remove("hidden-remove");
      toateButoane3[i].classList.add("apasat"); // ADD CLASS LIST APASAT
      const html = `<div class="meci-bilet" id="${(i - 2) / 3}">
           <div class="echipe-bilet">${gamesRound3[(i - 2) / 3].game}</div>
           <div class="selectieMeci-bilet">2</div>
           <div class="cotaMeci-bilet">${
             gamesRound3[(i - 2) / 3].odds.odd2
           }</div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ticket-remove-game remove3-${
             (i - 2) / 3
           }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
           </div>`;
      ticketItemsEl.insertAdjacentHTML("beforeend", html);
      meciuriPeBilet.push(gamesRound3[(i - 2) / 3].game); // STORE CURRENT GAME IN "meciuriPeBilet" ARRAY

      totalOddBilet.push(Number(gamesRound3[(i - 2) / 3].odds.odd2)); // STORE CURRENT ODD in "totalOddBilet" ARRAY

      //CALCULATE COTA TOTALA AND STORE IT IN "cotaTotala"
      let cotaTotala = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable

      //Function updatePotential Win
      function updatePotentialWin() {
        potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win
      //If another odd button is pressed UPDATE potential win
      const numar = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numar * cotaTotala).toFixed(2);
      oddIndicator.textContent = cotaTotala;
      nrSelInd.textContent = meciuriPeBilet.length;

      //----------------- REMOVE TICKET GAME COMPONENT -------------------
      document.querySelector(`.remove3-` + (i - 2) / 3).addEventListener(
        "click",
        function () {
          const removeGame = this.parentNode;
          ticketItemsEl.removeChild(removeGame);
          toateButoane3[i].classList.remove("apasat"); //Sterg clasa apasat
          const rezultat = meciuriPeBilet.filter(
            (meci) => meci === gamesRound3[(i - 2) / 3].game
          );
          const index = meciuriPeBilet.indexOf(`${rezultat}`);
          meciuriPeBilet.splice(`${index}`, 1); //2.2 Scot meciu din Array meciuri
          nrSelectii.innerHTML = " &nbsp " + ` (${meciuriPeBilet.length})`;
          //------------------------------------
          const rezultat1 = totalOddBilet.filter(
            (cota) => cota === Number(gamesRound3[(i - 2) / 3].odds.odd2)
          );
          const index1 = totalOddBilet.indexOf(...rezultat1);
          totalOddBilet.splice(`${index1}`, 1); //2.3 Scot cota din Array cote
          //------------------------------------
          let cotaTotala = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWin() {
            potentialWin.innerHTML = (this.value * cotaTotala).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWin); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numar = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numar * cotaTotala).toFixed(2); //2.3 Update potentialWin
          if (meciuriPeBilet.length === 0)
            removeAllSelections.classList.add("hidden-remove");
          oddIndicator.textContent = cotaTotala;
          nrSelInd.textContent = meciuriPeBilet.length;
          if (meciuriPeBilet.length === 0) phoneInd.classList.add("hidden");
        },
        { once: true }
      );
      //------------------------------------
      // ---- CLEAR ALL GAMES FROM TICKET --

      document
        .querySelector(".btn-clear-all")
        .addEventListener("click", function () {
          phoneInd.classList.add("hidden");
          toateButoane3[i].classList.remove("apasat");
          meciuriPeBilet = [];
          totalOddBilet = [];
          ticketItemsEl.innerHTML = "";
          removeAllSelections.classList.add("hidden-remove");
          let cotaTotalaf = (document.querySelector(
            ".total-odd-calc"
          ).textContent = +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
          //------------------------------------
          //Function updatePotential Win
          function updatePotentialWinf() {
            potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
          }

          input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
          //------------------------------------
          //If another odd button is pressed UPDATE potential win
          const numarf = Number(document.querySelector(".input-ammount").value);
          potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin
        });

      let cotaTotalaf = (document.querySelector(".total-odd-calc").textContent =
        +mult(...totalOddBilet).toFixed(2)); //Store Cota totala in cotaTotala variable
      //------------------------------------
      //Function updatePotential Win
      function updatePotentialWinf() {
        potentialWin.innerHTML = (this.value * cotaTotalaf).toFixed(2);
      }

      input.addEventListener("keyup", updatePotentialWinf); //When release "key" from ammount input => Update potential win
      //------------------------------------
      //If another odd button is pressed UPDATE potential win
      const numarf = Number(document.querySelector(".input-ammount").value);
      potentialWin.innerHTML = (numarf * cotaTotalaf).toFixed(2); //2.3 Update potentialWin

      //------------------------------------
    }
    //------------------------------------- ROUND 3 FINISH COMPONENT -------------------------------------
  });
}

////////open ticket phone/tablet view
const afisareBilet = document.querySelector(".right-sidebar");
const opernTicket = function () {
  afisareBilet.style.opacity = 100;
  afisareBilet.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  afisareBilet.style.zIndex = 5000;
};
phoneInd.addEventListener("click", opernTicket);

const closeModal2 = function () {
  afisareBilet.classList.add("hidden");
  overlay.classList.add("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "visible";
};

overlay.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !afisareBilet.classList.contains("hidden")) {
    closeModal2();
  }
});

const closeTicket = document.querySelector(".close-modal-ticket");
closeTicket.addEventListener("click", closeModal2);
