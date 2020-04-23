window.addEventListener("load", init);

let time = 5;
let score = 0;
let playing = "";

const input = document.querySelector("input");
const currentWord = document.querySelector(".current-word");
const result = document.querySelector(".score");
const info = document.querySelector(".info");
const timeDisplay = document.querySelector(".time");
const seconds = document.querySelector(".seconds");

const words = [
  "hrabia",
  "miasteczko",
  "pogodnie",
  "uwalnianie",
  "javascript",
  "programowanie",
  "okoliczny",
  "ogromny",
  "szachy",
  "polowanie",
  "dokumentacja",
  "wyrachowany",
  "podejrzliwy",
  "garbus",
  "wiolonczela",
  "szybki",
  "monstrualny",
  "biurokracja",
  "wychowanie",
  "komputer",
  "lukrecja",
  "mobilny",
  "elektryczny",
  "dostawa",
  "lecimy",
  "kartka",
  "buty",
  "czapka",
  "luneta",
  "maskowanie",
  "powierzchnia",
  "zakamarek",
  "google",
  "procesor",
  "asynchroniczny"
];

function nextWord(words) {
  const index = Math.floor(Math.random() * words.length);
  currentWord.textContent = words[index];
}

function counter() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    playing = false;
  }
  timeDisplay.textContent = time;
}

function information() {
  if (!playing && time === 0) {
    info.textContent = "Koniec gry";
    score = -1;
  }
}

function matchWord() {
  if (input.value === currentWord.textContent) {
    info.textContent = "Bardzo dobrze!";
    return true;
  } else {
    info.textContent = "";
    return false;
  }
}

function typing() {
  if (matchWord()) {
    playing = true;
    if (score < 10) {
      time = 6;
    } else {
      time = 4;
    }
    nextWord(words);
    input.value = "";
    score++;
  }
  if (score === -1 && currentWord === words[index]) {
    result.textContent = 0;
  } else {
    result.textContent = score;
  }
}

function init() {
  nextWord(words);
  input.addEventListener("input", typing);
  setInterval(counter, 1000);
  setInterval(information, 60);
}