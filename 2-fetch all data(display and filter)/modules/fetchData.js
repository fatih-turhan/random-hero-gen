import { showLoading } from "./toggleLoading.js";
// url
const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";

// fetch and filter from data
const fetchData = async () => {
  // fetch data
  const resp = await fetch(url);
  const data = await resp.json();
  // create id
  let id = 0;
  // filter data
  const datas = data.map((item) => {
    id++;
    const { name } = item;
    const {
      intelligence: int,
      strength: str,
      speed,
      durability: dur,
      power,
      combat,
    } = item.powerstats;
    const { gender, race, height, weight, eyeColor, hairColor } = item.appearance;
    const { fullName: realName, alignment } = item.biography;
    const { md: img } = item.images;
    return {
      id,
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
      weight,
    };
  });
  return datas;
};

export default fetchData;
