import React, {createContext, useContext, useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { getIsLoggedIn } from '../utils/api/accountApi'

const authContext = createContext({}); 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        async function getUserFromCookies() {
            const token = Cookies.get('token');
            if (token) { 
                const response = await getIsLoggedIn(token);
                const user = await response; 
                if (user) setUser(user.data);

                console.log(user);
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

export const ProtecteRoute = ({children}) => {
    const router = useRouter();
    const { isLoggedIn, isLoading,  user} = useAuth();
    if (isLoading || !isLoggedIn) return <h3>Loaading. . .</h3>
    return children;
}

export const useAuth = () => useContext(authContext);