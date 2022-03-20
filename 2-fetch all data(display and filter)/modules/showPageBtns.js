import get from "./getElement.js";

const buttonsContainer = get(".pages-buttons-container");

const showPagesBtns = (pages, activeIndex) => {
  let btnsHTML = pages.map((_, index) => {
    return `<button data-index="${index}" class="page-btn ${
      activeIndex === index ? "active-page-btn" : "null"
    }">${index + 1}</button>`;
  });
  btnsHTML.push('<button class="prev-btn">next</button>');
  btnsHTML.unshift('<button class="prev-btn">prev</button>');
  buttonsContainer.innerHTML = btnsHTML.join("");
};

export default showPagesBtns;
