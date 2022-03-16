import get from "./getElement.js";
import showItems from "./showItems.js";
import giveData from "./giveData.js";
import { showLoading } from "./toggleLoading.js";

const form = get(".form");
const input = get(".input");

form.addEventListener("keyup", async () => {
  showLoading();
  const data = await giveData();

  const inputValue = input.value;
  const filtredData = data.filter((item) => {
    return item.name.toLowerCase().includes(inputValue);
  });

  showItems(filtredData);

  // remove active from all buttons
  const allBtns = document.querySelectorAll(".btn");
  allBtns.forEach((btn) => {
    btn.classList.remove("btn-active");
  });
});
