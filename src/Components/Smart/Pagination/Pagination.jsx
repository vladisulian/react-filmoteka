import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getPaginationRange from "./getPaginationRange";
import("./Pagination.scss");

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  const [visiblePages, setVisiblePages] = useState(5);

  useEffect(() => {
    // Create a function to change visiblePages for different devices
    const handleResize = () => {
      window.innerWidth < 768 ? setVisiblePages(5) : setVisiblePages(10);
    };

    // create eventListener resize, use handleResize function as callback
    window.addEventListener("resize", handleResize);

    // remove eventListener in Unmounting stage, handleResize as callback
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Get the range of pages to display
  const pagesToShow = getPaginationRange(currentPage, totalPages, visiblePages);

  // Use for loop to create a page button for each page in the range
  for (let i = 0; i < pagesToShow.length; i++) {
    const pageNumber = pagesToShow[i];
    if (pageNumber === currentPage) {
      pages.push(
        <li
          key={pageNumber}
          className="active"
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </li>
      );
    } else {
      pages.push(
        <li key={pageNumber} onClick={() => onPageChange(pageNumber)}>
          {pageNumber}
        </li>
      );
    }
  }

  return (
    <>
      <ul className="pagination">
        <li className="arrows" onClick={() => onPageChange(currentPage - 1)}>
          P
        </li>
        {pages}
        <li className="arrows" onClick={() => onPageChange(currentPage + 1)}>
          F
        </li>
      </ul>
    </>
  );
};
export default Pagination;

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
