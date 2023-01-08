import React, { Children, useState, useEffect} from 'react';
import config from "./firebase/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        config.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setLoading(false)

        })
    })
    if (loading) {
        return <>loading...</>
    }
    return (
        <AuthContext.Provider>
        value={{
          currentUser
        }}
  
        {children}
      </AuthContext.Provider>
    )
}
