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
    const { gender, race, height, weight, eyeColor, hairColor } = item.appearance;
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
      weight,
    };
  });
  return datas;
};

const container = getElement(".cards-center");

const useItems = (arr) => {
  const items = arr
    .map((item) => {
      return `    <!-- single card -->
        <article class="card">
          <!-- img -->
          <div class="img-container">
            <img
              class="img"
              src="${item.img}"
              alt=""
            />
            <!-- title -->
            <h2 class="title">${item.name}</h2>
            <!-- name -->
          </div>
          <!-- info -->
          <div class="info">
            <div class="info-grid">
              <!-- real name -->
              <p class="text">name: <span class="result">${item.realName}</span></p>
              <!-- alignment -->
              <p class="text">alignment: <span class="result">${item.alignment}</span></p>
            </div>
            <!-- appearances -->
            <div class="info-hower">
              <!-- powers-title -->
              <p class="text info-hower-title">
                appearances
                <!-- down -icon -->
                <i class="hower-icon fas fa-chevron-down"></i>
              </p>
              <!-- powers-texts -->
              <div class="info-grid hide-info">
                <p class="text">gender: <span class="result">${item.gender}</span></p>
                <p class="text">race: <span class="result">${item.race}</span></p>
                <p class="text">height: <span class="result">${item.height[0]}</span></p>
                <p class="text">weight: <span class="result">${item.weight[0]}</span></p>
                <p class="text">eye color: <span class="result">${item.eyeColor}</span></p>
                <p class="text">hair color: <span class="result">${item.hairColor}</span></p>
              </div>
            </div>
            <!-- end of appearances -->
            <!-- powers -->
            <div class="info-hower">
              <!-- powers-title -->
              <p class="text info-hower-title">
                all powers
                <!-- down -icon -->
                <i class="hower-icon fas fa-chevron-down"></i>
              </p>
              <!-- powers-texts -->
              <div class="info-grid hide-info">
                <p class="text">int: <span class="result">${item.int}</span></p>
                <p class="text">str: <span class="result">${item.str}</span></p>
                <p class="text">speed: <span class="result">${item.speed}</span></p>
                <p class="text">durab: <span class="result">${item.dur}</span></p>
                <p class="text">power: <span class="result">${item.power}</span></p>
                <p class="text">combat: <span class="result">${item.combat}</span></p>
              </div>
            </div>
            <!-- end of powers -->
          </div>
          <!-- end of info -->
        </article>
        <!-- end of single card -->`;
    })
    .join("");
  container.innerHTML = items;
};

const showItems = async () => {
  const data = await fetchData();
  useItems(data);
};

const btns = document.querySelectorAll(".btn");

console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const selected = e.currentTarget.dataset.id;
    const data = await fetchData();
    const filtredData = data.filter((item) => {
      if (item.gender === selected) {
        return item;
      }
    });
    useItems(filtredData);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  showItems();
});
