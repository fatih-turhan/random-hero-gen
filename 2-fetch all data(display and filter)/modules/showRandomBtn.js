import showItems from "./showItems.js";
import get from "./getElement.js";
import randomNumb from "./randomNumb.js";
import showPagesBtns from "./showPageBtns.js";
import showPages from "./showPages.js";
import paginate from "./paginate.js";

const showRandomBtn = (data) => {
  // create title
  const buttonsContainer = get(".buttons-container");
  const div = document.createElement("div");
  div.innerHTML = `  <h3 class="filter-title">random hero</h3>
        <div class="buttonContChild">
          <button class="random-btn btn">random hero</button>
        </div>`;
  buttonsContainer.appendChild(div);

  // give random from data
  const randomBtn = get(".random-btn");
  randomBtn.addEventListener("click", () => {
    const random = randomNumb(data);
    const randomHero = data.filter((item) => {
      if (item.id === random) {
        return item;
      }
    });
    const newPages = paginate(randomHero);
    showPages(newPages, 0);
    // showItems(randomHero);
    // showPagesBtns(newPages);
  });

  // add class to random card
  // const btns = document.querySelectorAll(".btn");
  // btns.forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     const selected = e.currentTarget;
  //     const card = get(".card");
  //     console.log(selected);
  //     if (selected.classList.contains("random-btn")) {
  //       card.classList.add("random-card");
  //     }
  //   });
  // });
};

export default showRandomBtn;
