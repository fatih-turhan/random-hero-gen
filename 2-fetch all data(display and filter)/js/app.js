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
  // console.log(pages);
  // showItems when loads
  // showItems(data);
  // showItems(paginate(data)[1]);
  // showPages();

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
