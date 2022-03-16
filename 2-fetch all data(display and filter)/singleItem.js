import showSingleItem from "./modules/showSingleItem.js";

const displaySingleItem = () => {
  const id = Number(localStorage.getItem("item"));
  showSingleItem(id);
};

// filterSingleItem();
window.addEventListener("DOMContentLoaded", () => {
  displaySingleItem();
});
