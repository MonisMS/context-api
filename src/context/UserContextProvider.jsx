import React from "react";
import UserContext from "./userContext.js";

const UserContextProvider = ({children}) => {
const [user,setUser] = React.useState(null)
return (
    <UserContext.Provider value={{user,setUser}}>
    {children}                  // childern are the components that are passed in  the main file 
    </UserContext.Provider>
)
}

export default UserContextProvider;