import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserDisp from "./components/UserDisp";
import Pagination from "./components/Pagination";
import Results from "./components/Results";

const UserContainer = () => {
  const [filterTextValue, setFilterTextValue] = useState("");
  const [obtainedUsers, setObtainedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(12);

  // Lists users
  const DisplayUsers = () => {
    if (filterTextValue !== "") {
      let filteredUsers = obtainedUsers?.filter(
        (user) =>
          user.name.first.substring(0, filterTextValue.length).toLowerCase() ===
            filterTextValue.toString().toLowerCase() ||
          user.name.last.substring(0, filterTextValue.length).toLowerCase() ===
            filterTextValue.toString().toLowerCase()
      );
      return filteredUsers.map((item, i) => (
        <UserDisp key={i} item={item}></UserDisp>
      ));
    } else {
      // console.log(obtainedUsers);
      return obtainedUsers?.map((item, i) => (
        <UserDisp key={i} item={item}></UserDisp>
      ));
    }
  };

  // Pulls users from API on mount, or if the page or results number changes
  useEffect(() => {
    axios
      .get(`http://localhost:3001/users?page=${currentPage}&results=${results}`)
      .then((response) => {
        setObtainedUsers(response.data.results);
        return response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage, results]);

  return (
    <div className="userContainer">
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span style={{ marginRight: 10, fontSize: 15 }}>Filter users</span>
        </label>
        <input
          type="text"
          id="user-search"
          placeholder="Enter first or last name..."
          onChange={(e) => setFilterTextValue(e.target.value)}
          name="search"
        />
      </form>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Results results={results} setResults={setResults} />
      <div className="cardContainer">{DisplayUsers()}</div>
    </div>
  );
};

export default UserContainer;
