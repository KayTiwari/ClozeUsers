import React from "react";

// Changes number of users displayed on page
const Results = ({ results, setResults }) => {
  return (
    <div>
      <span>Number of Users Displayed:</span>
      <select onChange={(e) => setResults(e.target.value)} value={results}>
        <option value="12">12</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default Results;
