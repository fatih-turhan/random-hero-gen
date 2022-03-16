import get from "./getElement.js";

const container = get(".cards-center");

container.addEventListener("click", (e) => {
  const clicked = e.target.parentElement.parentElement.parentElement;
  const id = clicked.dataset.id;
  localStorage.setItem("item", id);
});
