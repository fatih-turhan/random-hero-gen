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
      powerstats: {
        intelligence: int,
        strength: str,
        speed,
        durability: dur,
        power,
        combat,
      },
    } = item;
    const {
      appearance: { gender, race, height, weight, eyeColor, hairColor },
    } = item;
    const {
      biography: { fullName: realName, alignment },
    } = item;
    const {
      images: { md: img },
    } = item;
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
