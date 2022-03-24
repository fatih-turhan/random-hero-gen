import showPages from "./showPages.js";

const pageBtnFunct = (pages) => {
  const container = document.querySelector(".pages-buttons-container");
  let index = 0;

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains(".pages-buttons-container")) return;
    if (e.target.classList.contains("page-btn")) {
      index = parseInt(e.target.dataset.index);
    }
    if (e.target.classList.contains("next-btn")) {
      index++;
      if (index > pages.length - 1) {
        index = 0;
      }
    }
    if (e.target.classList.contains("prev-btn")) {
      index--;
      if (index < 0) {
        index = pages.length - 1;
      }
    }
    showPages(pages, index);
  });
};

export default pageBtnFunct;
