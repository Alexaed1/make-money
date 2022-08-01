"use strict";

let sum = 0;
const totalParagraph = document.querySelector(".total");
const buttons = document.querySelectorAll(".vending button");


buttons.forEach((item) => {
  item.addEventListener("click", () => {
    sum += parseInt(item.getAttribute("data-cost"));
    totalParagraph.textContent = `Total: $${sum}.00`;
  });
});


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


const bulb = document.querySelector(".bulb");
const onBtn = document.querySelector(".onBtn");
const offBtn = document.querySelector(".offBtn");
const toggleBtn = document.querySelector(".toggleBtn");
const endBtn = document.querySelector(".endBtn");

onBtn.addEventListener("click", () => {
  bulb.classList.add("on");
});

offBtn.addEventListener("click", () => {
  bulb.classList.remove("on");
});

toggleBtn.addEventListener("click", () => {
  bulb.classList.toggle("on");
});

endBtn.addEventListener("click", () => {
  bulb.remove();
  onBtn.disabled = true;
  offBtn.disabled = true;
  toggleBtn.disabled = true;
  endBtn.disabled = true;
});