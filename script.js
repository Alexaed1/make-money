"use strict";


const coinContainer = document.querySelector(".coin-container");
const moneyForm = document.querySelector(".money-form");

moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = document.querySelector("#amount").value;
  const type = document.querySelector("#type").value;
  for (let i = 0; i < amount; i++) {
    const newCoin = document.createElement("li");
    newCoin.textContent = type;
    newCoin.classList.add("coin", type);
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});