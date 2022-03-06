import get from "./getElement.js";
import showItems from "./showItems.js";

// buttonsContainer
const buttonsContainer = get(".buttons-container");

const showFilterButtons = (dataInput, cat) => {
  const category = cat;
  const data = dataInput;

  // create title
  const title = document.createElement("h3");

  title.textContent = `filter by ${category}`;
  title.classList.add("filter-title");
  buttonsContainer.appendChild(title);

  // get specific button categories
  const btnCategories = data.reduce(
    (total, item) => {
      if (!total.includes(item[category])) {
        total.push(item[category]);
      }
      return total;
    },
    ["all"]
  );
  // show all buttons
  const showButtons = btnCategories
    .map((item) => {
      return `<button class="btn ${category}" data-id="${item}">${item}</button>`;
    })
    .join("");
  const buttonContChild = document.createElement("div");
  buttonContChild.classList.add("buttonContChild");
  buttonContChild.innerHTML = showButtons;
  buttonsContainer.appendChild(buttonContChild);

  // add active to buttons
  const allBtns = document.querySelectorAll(".btn");
  allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // remove active from all
      allBtns.forEach((btn) => btn.classList.remove("btn-active"));
      // add active the clicked one
      btn.classList.add("btn-active");
    });
  });

  // filter from dynamic buttons
  const buttonCategory = `.${category}`;
  const btns = document.querySelectorAll(buttonCategory);
  btns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const selected = e.currentTarget.dataset.id;
      const filtredData = data.filter((item) => {
        if (item[category] === selected) {
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
