import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'My cousin', 'My bird', 'My brother', 'The neighbor'];
let action = ['ate', 'peed', 'crushed', 'broke', 'throw away'];
let what = ['my homework', 'my phone', 'my laptop', 'the TV'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying', 'while I was on the bathroom'];

function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min) + min );
}


function randomExcuse (anyArray){
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber (min, max);
  return anyArray[random];
}


window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.body.innerHTML = randomExcuse(who) + " " + randomExcuse(action) + " " + randomExcuse(what) + " " + randomExcuse(when)
 };
