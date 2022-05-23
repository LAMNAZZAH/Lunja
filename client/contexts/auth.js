import React, {createContext, useContext, useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import { getIsLoggedIn } from '../utils/api/accountApi'

const authContext = createContext({}); 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        async function getUserFromCookies() {
            const token = Cookies.get('token');
            if (token) {
                const {data: user} = await getIsLoggedIn();
                if (user) setUser(user);
            }
            setLoading(false);
        }
        getUserFromCookies();
    }, [])

    return (
        <authContext.Provider value={{isLoggedIn: !!user, user, loading}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext);