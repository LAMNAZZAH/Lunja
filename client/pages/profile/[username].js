import Image from 'next/image';
import { useContext } from 'react';
import { authContext } from '../../contexts/auth';

import styles from '../../styles/profile.module.scss';

const profile = () => {

    const { user } = useContext(authContext);
    
  return (
    <div className={styles.profileContainer}>
        <div className={styles.leftBlockContainer}>
            <section className={styles.mainSection}>
                <div className={styles.ImagesContainer}>
                <div className={styles.backgroundImageContainer}>
                    <Image  layout='fill' src='/lmz-01.jpg'/>
                    <div className={styles.profileImageContainer}>
                    <Image width={100} height={100} src='/profile-pic.png'/>
                </div>
                </div>
                
                </div>
            </section>
        </div>
        <div className={styles.rightBlockContainer}>
            <h2>People you may know</h2>
        </div>
    </div>
  )
}

/*export function getServerSideProps {
    
}*/

export default profile