document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display-1");
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
  
    mainContainer.addEventListener("click", function (event) {
        const action = event.target.getAttribute("id");
  
        switch(action) {
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
  
    updateDisplay();
  });