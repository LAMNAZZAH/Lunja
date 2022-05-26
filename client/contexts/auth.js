import React, {createContext, useContext, useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { getIsLoggedIn } from '../utils/api/accountApi'

export const authContext = createContext({}); 

     const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getUserFromCookies() {
        const token = Cookies.get('token');
        if (token) { 
            const response = await getIsLoggedIn(token);
            const user = await response; 
            if (user) setUser(user.data);
            console.log( user);
        }
        setLoading(false);
    }

    useEffect(() => {
        getUserFromCookies();
    }, [])

    return (
        <authContext.Provider value={{ isLoggedIn: !!user, user, loading, setLoading, getUserFromCookies }}>
            {children}
        </authContext.Provider>
    )
}

export const PrivateRoute = ({children}) => {
    //!const router = useRouter();
    const { isLoggedIn, loading} = useContext(authContext);
    if (loading || !isLoggedIn && window.pathname !== '/login') return <h3>Loaading. . .</h3>

    return children;
}


export default AuthProvider;
