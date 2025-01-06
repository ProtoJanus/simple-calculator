const displayButtons = document.querySelectorAll(".display-button");
const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear-button");

displayButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(button.textContent === "+" || button.textContent === "-" || button.textContent === "/" || button.textContent === "*") {
            display.textContent = display.textContent + " " + button.textContent + " ";
            console.log("not a number");
        }else{
            display.textContent = display.textContent + button.textContent;
        }
    })
})

clearButton.addEventListener("click", (e) => {
    display.textContent = "";
})