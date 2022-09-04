/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRamdonPalo());
  document.querySelector(".card").innerHTML = generateRamdonCardNumber();
};

let generateRamdonCardNumber = () => {
  let nros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomNumber = Math.floor(Math.random() * nros.length);
  return nros[randomNumber];
};

let generateRamdonPalo = () => {
  let palos = ["diamonds", "hearts", "clubs", "spades"];
  let randomPalo = Math.floor(Math.random() * palos.length);
  return palos[randomPalo];
};
