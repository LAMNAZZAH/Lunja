import Head from 'next/head';
import DiscoveryNavBar from './NavBars/DiscoveryNavBar';
import Footer from './Footer';
import { authContext } from '../contexts/auth';
import { useContext } from 'react';
import AdminNavBar from './NavBars/AdminNavBar';

import styles from './Layout.module.scss';

export default function Layout({children}) {

    const { isLoggedIn } = useContext(authContext);

    return (
        <div className={styles.layoutContainer}>
            <div>
            { isLoggedIn ?
            (<AdminNavBar/>) : (
                <DiscoveryNavBar/>
                )
            }
            
            {children}
            </div>
            <Footer/>
        </div>
    )
}

