import get from "./getElement.js";
import showItems from "./showItems.js";
import giveData from "./giveData.js";
import { showLoading } from "./toggleLoading.js";
import paginate from "./paginate.js";
import showPages from "./showPages.js";
import pageBtnFunct from "./pageBtnFunc.js";

const form = get(".form");
const input = get(".input");
const btnsContainer = get(".pages-buttons-container");

form.addEventListener("keyup", async () => {
  showLoading();
  const data = await giveData();

  const inputValue = input.value;
  const filtredData = data.filter((item) => {
    return item.name.toLowerCase().includes(inputValue);
  });

  const pages = paginate(filtredData);

  if (pages.length === 0) {
    showItems(filtredData);
    btnsContainer.style.display = "none";
  } else {
    showPages(pages, 0);
    pageBtnFunct(pages);
  }

  // remove active from all buttons
  const allBtns = document.querySelectorAll(".btn");
  allBtns.forEach((btn) => {
    btn.classList.remove("btn-active");
  });
});
