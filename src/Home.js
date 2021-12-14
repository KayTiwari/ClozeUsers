import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import TitleCard from "./components/TitleCard";
import UserContainer from "./UserContainer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <TitleCard />
      <NavBar />
      <UserContainer />
    </div>
  );
};

export default Home;
