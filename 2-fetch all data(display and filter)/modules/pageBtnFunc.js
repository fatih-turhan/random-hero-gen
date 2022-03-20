import showPages from "./showPages.js";

const pageBtnFunct = (pages) => {
  const container = document.querySelector(".pages-buttons-container");

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains(".pages-buttons-container")) return;
    if (e.target.classList.contains("page-btn")) {
      const index = parseInt(e.target.dataset.index);
      console.log(index);
      showPages(pages, index);
    }
  });
};

export default pageBtnFunct;
