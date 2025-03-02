import React, { useState } from "react";
import UserContext from "./usercontext";

const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const contextValue = {
    username,
    age,
    setUsername,
    setAge,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
