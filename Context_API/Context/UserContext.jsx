import React, { createContext } from 'react';

export const UserData = createContext();

const UserContext = (props) => {
    const user = "Mera naam Soham hai!!";
  return (
    <UserData.Provider value={user}>
        {props.children}
    </UserData.Provider>
  )
}

export default UserContext
