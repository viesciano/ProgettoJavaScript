const minusButton = document.getElementById("minus-button");
const plusButton = document.getElementById("plus-button");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const display = document.getElementById("display-1");
let sum = 0;
let countdownInterval;


function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

plusButton.addEventListener("click", function() {
    sum += 1;
    display.textContent = formatTime(sum * 60);
    return;
});

minusButton.addEventListener("click", function() {
    if (sum > 0) {
        sum -= 1;
    }
    display.textContent = formatTime(sum * 60);
    return;
});



startButton.addEventListener("click", function() {
let minutes = sum;
if (minutes < 1) {
    alert("Please set a positive number of minutes")
    return;
}

resetButton.addEventListener("click", function() {
    sum = 0;
    display.textContent = "0:00";
})

let timeRemaining = minutes * 60;
display.textContent = formatTime(timeRemaining);

countdownInterval = setInterval(function() {
    timeRemaining -= 1;
    display.textContent = formatTime(timeRemaining);

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        alert("Time's up!");
    }
}, 1000);
});

stopButton.addEventListener("click", function() {
clearInterval(countdownInterval);
});



