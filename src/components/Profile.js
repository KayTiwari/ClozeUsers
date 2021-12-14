import React, { useContext } from "react";
import TitleCard from "./TitleCard";
import NavBar from "./NavBar";
import { AppContext } from "../AppContext";
import "../App.css";

// User profile
const Profile = () => {
  const context = useContext(AppContext);

  // Locate current user data from selected user in context object to display on profile
  let userData = context.selectedUser.item;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var date = new Date(userData.dob.date);
  var month = date.getMonth();
  var day = date.getDay();
  var year = date.getFullYear();

  return (
    <div>
      <div>
        <TitleCard />
        <NavBar />
      </div>
      <div className="profileDisplay">
        <img
          style={{ width: 300, borderRadius: "50%" }}
          src={userData.picture.large}
          alt={userData.name.first}
        />
        <div>
          <h2>
            {userData.name.first} {userData.name.last}
          </h2>
        </div>
        <div>
          <h3>
            Date of Birth: {months[month]} {day}, {year}
          </h3>
        </div>
        <div>
          <h3>Phone: {userData.phone}</h3>
        </div>{" "}
        <div>
          <h3>Email: {userData.email}</h3>
        </div>
        <div>
          <h3>
            {userData.location.street.number} {userData.location.street.name},{" "}
            {userData.location.city} {userData.location.state}{" "}
            {userData.location.postcode}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
