import showItems from "./showItems.js";
const showRandomBtn = (data) => {
  // create title
  const buttonsContainer = document.querySelector(".buttons-container");

  const div = document.createElement("div");
  div.innerHTML = `  <h3 class="filter-title">random hero</h3>
        <div class="buttonContChild">
          <button class="random-btn btn">random hero</button>
        </div>`;

  const randomNumb = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };

  const randomBtn = document.querySelector(".random-btn");
  randomBtn.addEventListener("click", () => {
    const random = randomNumb(data);
    console.log(random);
    const randomHero = data.filter((item) => {
      if (item.id === random) {
        return item;
      }
    });
    console.log(randomHero);
    showItems(randomHero);
  });
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selected = e.currentTarget;
      const card = document.querySelector(".card");
      console.log(selected);
      if (selected.classList.contains("random-btn")) {
        card.classList.add("random-card");
      }
    });
  });
};

export default showRandomBtn;
