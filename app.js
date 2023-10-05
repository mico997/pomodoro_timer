// Work 25
// Rest 5
// Work 25
// Rest 5
// Work 25
// Rest 5
// Work 25
// Rest 30

// Variable Value Definations

let timeText = "25:00";
// TIME IN SECONDS
let time = 1500;
let timerID = null;

// DOM Element Definations
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timeDisplay = document.querySelector(".time-display");

// UI Functions
startButton.addEventListener("click", () => {
  timerID = setInterval(() => {
    time -= 1;
    // Zero Occurence

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timeDisplay.innerText = `${minutes}:${seconds.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    })}`;
    console.log(minutes, seconds);
  }, 100);
});

pauseButton.addEventListener("click", () => {
  clearInterval(timerID);
});
