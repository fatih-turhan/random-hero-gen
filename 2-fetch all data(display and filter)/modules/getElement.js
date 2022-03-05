const getElement = (selected) => {
  const element = document.querySelector(selected);
  if (element) return element;
  throw new Error("your selected item doesn't exist");
};

export default getElement;
