document.addEventListener("DOMContentLoaded", () => {
    const shoppingList = document.getElementById("shopping-list");
    const btn1 = document.getElementById("button-1");
    const btn2 = document.getElementById("button-2");
    const btn3 = document.getElementById("button-3");

    btn1.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = "chleb";
        shoppingList.appendChild(li);
    })

    btn2.addEventListener("click", () => {
        shoppingList.children[shoppingList.children.length-1].remove();
    })

    btn3.addEventListener("click", () => {
        const lastEl = shoppingList.children[shoppingList.children.length-1].cloneNode(true);
        shoppingList.appendChild(lastEl);
    })
})