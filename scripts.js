const displayButtons = document.querySelectorAll(".display-button");
const display = document.querySelector("#display");

displayButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        display.textContent = display.textContent + " " + button.textContent;
    })
})