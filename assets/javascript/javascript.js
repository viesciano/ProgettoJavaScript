document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display-1");
    const primaryOperationsColumn = document.getElementById("primary-operations-column");
    const secondaryOperationsColumn = document.getElementById("secondary-operations-column");
    const mainContainer = document.getElementById("main-container");
    let sum = 0;
    let countdownInterval;

    function formatTime(seconds) {
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updateDisplay() {
        display.textContent = formatTime(sum);
    }

    function createElement(type, className, id, textContent) {
        const element = document.createElement(type);
        if (className) element.className = className;
        if (id) element.id = id;
        if (textContent) element.textContent = textContent;
        return element;
    }

    function addButtons() {
        const minusButton = createElement("button", "basic-but", "minus-button", "-");
        const plusButton = createElement("button", "basic-but", "plus-button", "+");
        primaryOperationsColumn.appendChild(minusButton);
        primaryOperationsColumn.appendChild(plusButton);

        const startButton = createElement("button", "oper-but", "start-button", "Start");
        const stopButton = createElement("button", "oper-but", "stop-button", "Stop");
        const resetButton = createElement("button", "oper-but", "reset-button", "Reset");
        secondaryOperationsColumn.appendChild(startButton);
        secondaryOperationsColumn.appendChild(stopButton);
        secondaryOperationsColumn.appendChild(resetButton);
    }

    mainContainer.addEventListener("click", function (event) {
        const action = event.target.getAttribute("id");

        switch (action) {
            case "minus-button":
                if (sum > 0) {
                    sum -= 60;
                    updateDisplay();
                }
                break;

            case "plus-button":
                sum += 60;
                updateDisplay();
                break;

            case "start-button":
                clearInterval(countdownInterval);
                countdownInterval = setInterval(() => {
                    if (sum > 0) {
                        sum--;
                        updateDisplay();
                    } else {
                        clearInterval(countdownInterval);
                    }
                }, 1000);
                break;

            case "stop-button":
                clearInterval(countdownInterval);
                break;

            case "reset-button":
                clearInterval(countdownInterval);
                sum = 0;
                updateDisplay();
                break;
        }
    });

    addButtons();
    updateDisplay();
});
