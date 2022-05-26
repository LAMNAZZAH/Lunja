import Head from 'next/head';
import DiscoveryNavBar from './NavBars/DiscoveryNavBar';
import Footer from './Footer';
import { authContext } from '../contexts/auth';
import { useContext } from 'react';
import AdminNavBar from './NavBars/AdminNavBar';

export default function Layout({children}) {

    const { isLoggedIn, getUserFromCookies } = useContext(authContext);

    return (
        <div>
            { isLoggedIn ?
            (<AdminNavBar/>) : (<header>
                <DiscoveryNavBar/>
                </header>)
            }
            {children}
            <Footer/>
        </div>
    )
}

