import giveData from "./giveData.js";
import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const container = get(".singles-center");
const title = get(".singles-title");

const showSingleItem = async (getID) => {
  // get data
  const data = await giveData();
  // get id
  const id = getID;
  //   filter data
  const singleItem = data.filter((item) => {
    if (item.id === id) return item;
  });

  const [
    {
      alignment,
      combat,
      dur,
      eyeColor,
      gender,
      hairColor,
      height,
      img,
      int,
      name,
      power,
      race,
      realName,
      speed,
      str,
      weight,
      birth,
      firstApp,
      publisher,
    },
  ] = singleItem;

  title.innerHTML = `  <h3 class="singles-name">Name:${name}</h3>
    <h3 class="singles-align">
    <span class="result-icon">
    <i class="fas fa-circle"></i>
            </span>
            ${alignment}
            </h3>`;

  const icon = get(".result-icon");
  if (alignment === "bad") {
    icon.classList.add("color-red");
  } else if (alignment === "good") {
    icon.classList.add("color-green");
  }

  container.innerHTML = ` <!-- img-container -->
          <article class="singles-img-cont">
            <img
              class="singles-img"
              src="${img}"
              alt=""
            />
          </article>
          <!-- end of img-container -->
          <!-- info -->
          <article class="singles-infos">
            <!-- singles-info-grid -->
            <div class="singles-info">
              <h3 class="singles-info-title">power</h3>
              <!-- singles-info-grid -->
              <div class="singles-info-grid">
                <p class="singles-info-text">int: <span>${int}</span></p>
                <p class="singles-info-text">str: <span>${str}</span></p>
                <p class="singles-info-text">speed: <span>${speed}</span></p>
                <p class="singles-info-text">dur: <span>${dur}</span></p>
                <p class="singles-info-text">power: <span>${power}</span></p>
                <p class="singles-info-text">comb: <span>${combat}</span></p>
              </div>
              <!-- end of singles-info-grid -->
            </div>
            <!-- end of singles-info-grid -->

            <!-- singles-info-grid -->
            <div class="singles-info">
              <h3 class="singles-info-title">appearance</h3>
              <!-- singles-info-grid -->
              <div class="singles-info-grid">
                <p class="singles-info-text">gender: <span>${gender}</span></p>
                <p class="singles-info-text">race: <span>${race}</span></p>
                <p class="singles-info-text">height: <span>${height[0]}</span></p>
                <p class="singles-info-text">weight: <span>${weight[0]}</span></p>
                <p class="singles-info-text">eye color: <span>${eyeColor}</span></p>
                <p class="singles-info-text">hair color: <span>${hairColor}</span></p>
              </div>
              <!-- end of singles-info-grid -->
            </div>
            <!-- end of singles-info-grid -->
            <!-- singles-info-grid -->
            <div class="singles-info">
              <h3 class="singles-info-title">biography</h3>
              <!-- singles-info-grid -->
              <div class="singles-info-grid">
                <p class="singles-info-text">real name: <span>${realName}</span></p>
                <p class="singles-info-text">place of birth: <span>${birth}</span></p>
                <p class="singles-info-text">first seen: <span>${firstApp}</span></p>
                <p class="singles-info-text">publisher: <span>${publisher}</span></p>
              </div>
              <!-- end of singles-info-grid -->
            </div>
            <!-- end of singles-info-grid -->
          </article>
          <!-- end of info -->`;

  hideLoading();
};
export default showSingleItem;
