import Head from 'next/head';
import DiscoveryNavBar from './DiscoveryNavBar';
import Footer from './Footer';

export default function Layout({children}) {
    return (
        <div>
            <header>
            <DiscoveryNavBar/>
            </header>
            {children}
            <Footer/>
        </div>
    )
}

