"use strict";

///---------- MODAL LOGIN ----------------------------
const modal = document.querySelector(".modal-login");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".btn-login");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "visible";
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///---------- MODAL-REGISTER ------------------------------------
const modalRegister = document.querySelector(".modal-register");
const btnCloseModalRegister = document.querySelector(".close-modal-register");
const btnsOpenModalRegister = document.querySelectorAll(".btn-register");

const openModalRegister = function () {
  modalRegister.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
};

const closeModalRegister = function () {
  modalRegister.classList.add("hidden");
  overlay.classList.add("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "visible";
};

for (let i = 0; i < btnsOpenModalRegister.length; i++)
  btnsOpenModalRegister[i].addEventListener("click", openModalRegister);

btnCloseModalRegister.addEventListener("click", closeModalRegister);
overlay.addEventListener("click", closeModalRegister);

document.addEventListener("keydown", function (f) {
  if (f.key === "Escape" && !modalRegister.classList.contains("hidden")) {
    closeModalRegister();
  }
});

///---------- NO ACCOUNT => PRESS REGISTER LINK -------------
const linkLogin = document.querySelector(".link-create-account");

linkLogin.addEventListener("click", function () {
  closeModal();
  overlay.classList.remove("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  openModalRegister();
});

///---------- ALREADY HAVE ACCOUNT => PRESS LOGIN LINK------------
const linkRegister = document.querySelector(".link-to-login");

linkRegister.addEventListener("click", function () {
  closeModalRegister();
  overlay.classList.remove("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  openModal();
});

///---------- MODAL FORGOTTEN ACCOUNT -----------------------------
const modalForgotten = document.querySelector(".modal-forgotten");
const btnCloseModalForgotten = document.querySelector(".close-modal-forgotten");
const btnsOpenModalForgotten = document.querySelectorAll(".recover-login");

const openModalForgotten = function () {
  closeModal();
  modalForgotten.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
};

const closeModalForgotten = function () {
  modalForgotten.classList.add("hidden");
  overlay.classList.add("hidden");
  document.getElementsByTagName("body")[0].style.overflow = "visible";
};

for (let i = 0; i < btnsOpenModalForgotten.length; i++)
  btnsOpenModalForgotten[i].addEventListener("click", openModalForgotten);

btnCloseModalForgotten.addEventListener("click", closeModalForgotten);
overlay.addEventListener("click", closeModalForgotten);

document.addEventListener("keydown", function (f) {
  if (f.key === "Escape" && !modalForgotten.classList.contains("hidden")) {
    closeModalForgotten();
  }
});

const cancelForgotten = document.querySelector(".link-cancel-forgotten");
cancelForgotten.addEventListener("click", function () {
  closeModalForgotten();
});
