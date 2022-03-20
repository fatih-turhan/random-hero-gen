// *********** FETCH DATA *************
import giveData from "../modules/giveData.js";
import showItems from "../modules/showItems.js";
import showFilterButtons from "../modules/showFilterButtons.js";
import showRandomBtn from "../modules/showRandomBtn.js";
import "../modules/getID.js";
import "../modules/filterAll.js";
import paginate from "../modules/paginate.js";

window.addEventListener("DOMContentLoaded", async () => {
  // get return
  const data = await giveData();
  // paginate
  const pages = paginate(data);
  // console.log(pages);
  // showItems when loads
  // showItems(data);
  showItems(paginate(data)[1]);
  // show random
  showRandomBtn(data);
  // filter by categories
  showFilterButtons(data, "gender");
  showFilterButtons(data, "alignment");
});
