const Pagination = ({ filmsQuantity }) => {
  const pagination = filmsQuantity.map((__, index) => {
    console.log("filmsQuantity", filmsQuantity);
    console.log("index", index);
    return <div key={index}>{index + 1}</div>;
  });
  return <div className="pagination">{filmsQuantity !== 0 && pagination}</div>;
};
export default Pagination;
