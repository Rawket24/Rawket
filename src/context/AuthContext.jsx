import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [signIn, setSignIn] = useState(false);

    const value = { signIn, setSignIn };



    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    );
};
