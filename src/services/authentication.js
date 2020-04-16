import React from "react";

const { createContext, useContext } = React;

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
    const value = {
        signIn: props.signIn || signIn
    };

    return ( 
        <AuthProvider.Provider value={value}>
            {props.children}
        </AuthProvider.Provider>
    )
};

export const useAuth () => {
    return useContext(AuthContext);
}

const signIn = (body) => {
    // ...
}

// https://medium.com/the-guild/injectable-services-in-react-de0136b6d476 