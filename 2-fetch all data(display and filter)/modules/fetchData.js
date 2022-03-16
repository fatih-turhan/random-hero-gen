import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

// url
const url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";

// fetch and filter from data
const fetchData = async () => {
  // fetch data
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    const result = get(".result-text");
    result.textContent = "opps, there is an error";
    console.log(error);
    hideLoading();
  }
};

export default fetchData;
