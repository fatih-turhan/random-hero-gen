import showItems from "./showItems.js";
import showPagesBtns from "./showPageBtns.js";

const showPages = (pages, index) => {
  showItems(pages[index]);
  showPagesBtns(pages, index);
};

export default showPages;
