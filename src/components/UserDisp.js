import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { AppContext } from "../AppContext";

// Displays user card
const UserDisp = (props) => {
  let userCard;
  let navigate = useNavigate();
  let context = useContext(AppContext);

  function handleClick() {
    context.setSelectedUser(props);
    navigate("./Profile");
  }

  if (props.item !== undefined)
    userCard = [
      <div className="userCard" onClick={handleClick}>
        <div>
          <img
            style={{ borderRadius: "50%", marginTop: 10 }}
            src={props.item.picture.large}
            alt={props.item.name.first}
          />
        </div>
        <div>
          <h2>
            {props.item.name.first} {props.item.name.last}
          </h2>{" "}
        </div>
        <div>
          <h2>Age: {props.item.dob.age}</h2>
        </div>
        <div>
          <h2>{props.item.email}</h2>
        </div>
        <div>
          <h2>
            {props.item.location.city}, {props.item.location.country}
          </h2>
        </div>
      </div>,
    ];

  return <div>{userCard}</div>;
};

export default UserDisp;
