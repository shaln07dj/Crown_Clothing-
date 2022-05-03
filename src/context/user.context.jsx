import { createContext, useState,useEffect } from "react";

import { onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";
// as the actual value you want to access
export  const UserContext = createContext({
    currentUser: null,
    setCurrentUser:() => null,

});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}

    
    useEffect(() => {
        const unsubsribe = onAuthStateChangedListener((user) =>{
            console.log(user);
        });
    
    return unsubsribe
    }, [])


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};