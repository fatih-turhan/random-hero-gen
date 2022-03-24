// *********** FETCH DATA *************
import giveData from "../modules/giveData.js";
import showItems from "../modules/showItems.js";
import showFilterButtons from "../modules/showFilterButtons.js";
import showRandomBtn from "../modules/showRandomBtn.js";
import "../modules/getID.js";
import "../modules/filterAll.js";
import paginate from "../modules/paginate.js";
import showPagesBtns from "../modules/showPageBtns.js";
import showPages from "../modules/showPages.js";
import pageBtnFunct from "../modules/pageBtnFunc.js";
import get from "../modules/getElement.js";
import "../modules/darkMode.js";

// import "../modules/pageBtnFunc.js";

// let index = 0;
// let pages = [];

// const showPages = (pages, index) => {
//   showItems(pages[index]);
//   showPagesBtns(pages, index);
// };

window.addEventListener("DOMContentLoaded", async () => {
  // get return
  const data = await giveData();
  // paginate
  const pages = paginate(data);

  // showPages
  showPages(pages, 0);
  // pageFunct
  pageBtnFunct(pages);

  // show random
  showRandomBtn(data);
  // filter by categories
  showFilterButtons(data, "gender");
  showFilterButtons(data, "alignment");
});
