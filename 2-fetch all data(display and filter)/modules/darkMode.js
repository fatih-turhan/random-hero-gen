import get from "./getElement.js";

const darkBtn = get(".dark-btn");

darkBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  if (document.documentElement.classList.contains("dark-mode")) {
    darkBtn.textContent = "light";
  } else {
    darkBtn.textContent = "dark";
  }
});
