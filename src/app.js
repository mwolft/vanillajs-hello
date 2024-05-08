/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["Tizón", "Mi padre", "Mi hermana", "Elena"];
  let action = ["perdió", "no encontró", "olvidó", "rompió"];
  let what = ["las bolsitas", "la correa", "las pastillas"];
  let when = [
    "antes de salir de paseo",
    "cuando estaban en el pueblo",
    "mientras estaban de paseo en el cementerio",
    "durante el paseo de la tarde",
    "mientras estaban jugando a la pelota"
  ];
  document.getElementById("excuse").innerHTML =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)];
};
