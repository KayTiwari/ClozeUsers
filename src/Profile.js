import React, { useContext } from "react";
import TitleCard from "./components/TitleCard";
import NavBar from "./components/NavBar";
import { AppContext } from "./AppContext";
import './App.css'

// User profile
const Profile = (props) => {
  const context = useContext(AppContext);

  console.log(context.selectedUser);

  let easyProp = context.selectedUser.item;

  console.log(easyProp);

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

  var date = new Date(easyProp.dob.date);
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
          src={easyProp.picture.large}
          alt={easyProp.name.first}
        />
        <div>
          <h2>
            {easyProp.name.first} {easyProp.name.last}
          </h2>
        </div>
        <div>
          <h3>
            Date of Birth: {months[month]} {day}, {year}
          </h3>
        </div>
        <div>
          <h3>Phone: {easyProp.phone}</h3>
        </div>{" "}
        <div>
          <h3>Email: {easyProp.email}</h3>
        </div>
        <div>
          <h3>
            {easyProp.location.street.number} {easyProp.location.street.name},{" "}
            {easyProp.location.city} {easyProp.location.state}{" "}
            {easyProp.location.postcode}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;

//large picture
//first and last name
// Phone number + email address
//street, city, state, postal code
// Date of birth formatted Month Day, Year
