import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserDisp from "./UserDisp";
import Pagination from "./Pagination";
import Results from "./Results";

const UserContainer = () => {
  const [value, setValue] = useState("");
  const [obtainedUsers, setObtainedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(12);

  // Filters listed users as search bar is typed in
  //   const handleChange = (e) => {
  //     setValue(e.target.value);
  //   };

  // Lists users
  const DisplayUsers = () => {
    if (value !== "") {
      let filteredUsers = obtainedUsers?.filter(
        (user) =>
          user.name.first.substring(0, value.length).toLowerCase() ===
            value.toString().toLowerCase() ||
          user.name.last.substring(0, value.length).toLowerCase() ===
            value.toString().toLowerCase()
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
      .get(
        `http://localhost:3001/users?page=${currentPage}&results=${results}`
      )
      .then((response) => {
        // console.log(response);
        setObtainedUsers(response.data.results);
        return response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });

    DisplayUsers();
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
          onChange={(e) => setValue(e.target.value)}
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
