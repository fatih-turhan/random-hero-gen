import get from "./getElement.js";
import showItems from "./showItems.js";

// buttonsContainer
const buttonsContainer = get(".buttons-container");

const showFilterButtons = (dataInput) => {
  const data = dataInput;
  // get specific button categories
  const btnCategories = data.reduce(
    (total, item) => {
      if (!total.includes(item.gender)) {
        total.push(item.gender);
      }
      return total;
    },
    ["all"]
  );
  // show all buttons
  const showButtons = btnCategories
    .map((item) => {
      return `<button class="btn" data-id="${item}">${item}</button>`;
    })
    .join("");
  buttonsContainer.innerHTML = showButtons;
  // filter from dynamic buttons
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const selected = e.currentTarget.dataset.id;
      const filtredData = data.filter((item) => {
        if (item.gender === selected) {
          return item;
        }
      });
      if (selected === "all") {
        showItems(data);
      } else {
        showItems(filtredData);
      }
    });
  });
};

export default showFilterButtons;
