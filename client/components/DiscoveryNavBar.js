import Link from 'next/link'; 
import { useRouter } from "next/router";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button, Drawer, ActionIcon } from '@mantine/core';
import { Menu2, X } from 'tabler-icons-react';

import LunjaLogo from '../public/landscapeLunjaLogoWithTitleDark.png';

import styles from './DiscoveryNavBar.module.scss';


const DiscoveryNavBar = () => {

    const router = useRouter()
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);

    useEffect(() => {
        setBurgerIsOpen(false)
    }, [router.pathname])

    return (
        <div className={styles.navBar}>

            <div className={styles.logo} >
            <Link href="/">
                <Image src={LunjaLogo} alt="Lunja app Logo" height={80} width={200} />
            </Link>
            </div>

            <ul className={styles.navLinks}>
                <Link href="/">
                    <a className={router.pathname == "/" ? styles.activeNavLink : styles.navLink}>Home</a>
                </Link>
                <Link href="/discover">
                    <a className={router.pathname == "/discover" ? styles.activeNavLink : styles.navLink}>Discover</a>
                </Link>
                <Link href="/blog">
                    <a className={router.pathname == "/blog" ? styles.activeNavLink : styles.navLink}>Blog</a>
                </Link>
                <Link href="/login">
                    <Button>Login</Button>
                </Link>
            </ul>

            <div className={styles.navBurger}>
                <ActionIcon onClick={() => setBurgerIsOpen(true)}>
                    {burgerIsOpen == true ? <X/> : <Menu2/>}
                </ActionIcon>
            </div>
            
        </div>
    )
}

export default DiscoveryNavBar; 