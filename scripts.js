const displayButtons = document.querySelectorAll(".display-button");
const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear-button");
const enterButton = document.querySelector("#enter-button");

let isResult = false;

// a display button is a button that will change the display in some way that isn't clearing or showing a result
// in this case all operands and operators
displayButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (isResult) {
            display.textContent = "";
            isResult = false;
        }

        if (button.textContent === "+" || button.textContent === "-" || button.textContent === "/" || button.textContent === "*") {
            if (display.textContent !== "") {
                if (display.textContent.trim().slice(-1) !== "+" && display.textContent.trim().slice(-1) !== "-" && display.textContent.trim().slice(-1) !== "*" && display.textContent.trim().slice(-1) !== "/") {
                    display.textContent = display.textContent + " " + button.textContent + " ";
                }
            }
        } else {
            display.textContent = display.textContent + button.textContent;
        }
    });
});


clearButton.addEventListener("click", (e) => {
    display.textContent = "";
})

enterButton.addEventListener("click", (e) => {
    display.textContent = eval(display.textContent);
    isResult = true;
})