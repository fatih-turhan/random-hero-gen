import get from "./getElement.js";

const loading = get(".loading");

export const showLoading = () => {
  loading.classList.remove("hide-loading");
  console.log("hello world");
};
export const hideLoading = () => {
  loading.classList.add("hide-loading");
  console.log("hello world");
};
