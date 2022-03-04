// ********** RANDOM HERO GEN ***********

const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";

const img = document.querySelector(".img");
const title = document.querySelector(".title");
const text = document.querySelector(".text");
const btns = [...document.querySelectorAll(".btn")];
const randomBtn = document.querySelector(".random-btn");

// give random from list
const giveRand = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

// fetch the data
const getData = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  const randomHero = data[giveRand(data)];
  const { sm: image } = randomHero.images;
  const { name } = randomHero;
  const { gender, race } = randomHero.appearance;
  const { fullName: realName, alignment } = randomHero.biography;
  return {
    image,
    name,
    gender,
    race,
    realName,
    alignment,
  };
};
// use data from api
const useItems = (data) => {
  img.src = data.image;
  title.textContent = `Hero's name is`;
  text.textContent = data.name;
  btns.forEach((btn) => btn.classList.remove("btn-active"));
  btns[0].classList.add("btn-active");
  btns.forEach((btn) => {
    const selected = btn.dataset.id;
    btn.addEventListener("click", () => {
      title.textContent = `Hero's ${selected} is`;
      text.textContent = data[selected];
      btns.forEach((btn) => btn.classList.remove("btn-active"));
      btn.classList.add("btn-active");
    });
  });
};

const showItems = async () => {
  // return new obj from fetch
  const data = await getData(url);
  // use data from fetch
  useItems(data);
};

window.addEventListener("DOMContentLoaded", showItems);
randomBtn.addEventListener("click", showItems);
