import React from "react";
import "./App.css";

// CLOZD_SUGGESTION: This seems like stand alone component. Should this go inside the 'components' folder?


const Pagination = ({ currentPage, setCurrentPage }) => {
  const nextPage = (nextPage) => {
    if (nextPage) {
      return currentPage + 1;
    } else {
      if (currentPage > 1) {
        console.log(currentPage);
        return currentPage - 1;
      } else {
        return currentPage;
      }
    }
  };

  return (
    <div>
      <button onClick={() => setCurrentPage(nextPage(false))}>
        Prev. Page
      </button>
      <span style={{ fontSize: 20, margin: 10, borderInline: 'dashed red', }}>{currentPage}</span>
      <button onClick={() => setCurrentPage(nextPage(true))}>Next Page</button>
    </div>
  );
};

export default Pagination;
