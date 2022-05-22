import Link from 'next/link'; 
import Image from 'next/image';

import LunjaLogo from '../public/landscapeLunjaLogoWithTitleDark.png';

import styles from './DiscoveryNavBar.module.scss';


const DiscoveryNavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo} >
            <Link href="/">
                <Image src={LunjaLogo} alt="Lunja app Logo" height={80} width={200} />
            </Link>
            </div>
            <ul>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/">
                    <a>Discover</a>
                </Link>
                <Link href="/">
                    <a>Blog</a>
                </Link>
                <Link href="/">
                    <button>Login</button>
                </Link>
            </ul>
        </div>
    )
}

export default DiscoveryNavBar; 