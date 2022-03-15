import fetchData from "./fetchData.js";

const giveData = async () => {
  const data = await fetchData();
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

export default giveData;
