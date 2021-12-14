import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserDisp from "./UserDisp";
import Pagination from "./Pagination";
import Results from "./Results";

const UserContainer = () => {
  // CLOZD_SUGGESTION: It's hard to know what "value" is until later in the file

  const [value, setValue] = useState("");
  const [obtainedUsers, setObtainedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(12);

  // CLOZD_SUGGESTION: Is the commented code below neccessary?

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
      // CLOZD_SUGGESTION: Is the comment below important to keep?

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
        // CLOZD_SUGGESTION: Is the comment below important to keep?

        // console.log(response);
        setObtainedUsers(response.data.results);
        return response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
      
      // CLOZD_SUGGESTION: The function DisplayUsers() is not needed here. Down in the return statement it is called each time state updates.
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
