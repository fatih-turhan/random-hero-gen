// *********** FETCH DATA *************
const getElement = (selected) => {
  const element = document.querySelector(selected);
  if (element) return element;
  throw new Error("your selected item doesn't exist");
};
const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";

const fetchData = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  const datas = data.map((item) => {
    const { name } = item;
    const {
      intelligence: int,
      strength: str,
      speed,
      durability: dur,
      power,
      combat,
    } = item.powerstats;
    const { gender, race, height, eyeColor, hairColor } = item.appearance;
    const { fullName: realName, alignment } = item.biography;
    const { md: img } = item.images;
    return {
      name,
      int,
      str,
      speed,
      dur,
      power,
      combat,
      gender,
      race,
      height,
      eyeColor,
      hairColor,
      realName,
      alignment,
      img,
    };
  });
  return datas;
};

const showItems = async () => {
  const data = await fetchData();
};

window.addEventListener("DOMContentLoaded", () => {
  showItems();
});
