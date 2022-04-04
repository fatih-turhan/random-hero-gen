import get from "./getElement.js";

let darkMode = localStorage.getItem("darkMode");

const darkToggleBtn = get(".dark-btn");

// darkmode
const enableDark = () => {
  document.documentElement.classList.add("dark-mode");
  darkToggleBtn.textContent = "light";
  localStorage.setItem("darkMode", "enabled");
};

// lightmode
const disableDark = () => {
  document.documentElement.classList.remove("dark-mode");
  darkToggleBtn.textContent = "dark";
  localStorage.setItem("darkMode", null);
};

// enable dark mode in all pages
if (darkMode === "enabled") {
  enableDark();
}
// toggle dark mode
darkToggleBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDark();
  } else {
    disableDark();
  }
});
