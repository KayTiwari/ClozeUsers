import React, { useState, createContext } from "react";

export const AppContext = createContext();
export const MainContext = (props) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  return (
    <AppContext.Provider
      value={{
        users: users,
        selectedUser: selectedUser,
        setUsers: setUsers,
        setSelectedUser: setSelectedUser,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
