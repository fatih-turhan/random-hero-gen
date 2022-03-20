const paginate = (data) => {
  const itemsPerPage = 50;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);
  const newData = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  });
  return newData;
};

export default paginate;
