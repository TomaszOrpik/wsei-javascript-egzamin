const buttons = document.querySelectorAll("button");
const container = document.getElementById("container");

buttons.forEach(element => {
    element.addEventListener("click", () => {
        container.innerText = element.dataset.text;
    });   
});