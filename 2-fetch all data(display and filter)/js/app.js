// *********** FETCH DATA *************
import get from "../modules/getElement.js";
import fetchData from "../modules/fetchData.js";
import showItems from "../modules/showItems.js";
import showFilterButtons from "../modules/showFilterButtons.js";

window.addEventListener("DOMContentLoaded", async () => {
  // get return
  const data = await fetchData();
  // showItems when loads
  showItems(data);
  // filter by categories
  showFilterButtons(data, "gender");
  showFilterButtons(data, "alignment");
});
