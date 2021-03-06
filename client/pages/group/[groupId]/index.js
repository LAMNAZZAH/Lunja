import { useRouter } from 'next/router';

import CreatePost from '../../../components/group/CreatePost';
import GroupPosts from '../../../components/group/GroupPosts';

import styles from '../../../styles/group.module.scss';

const group = () => {
    const router = useRouter();

  return (
    <div>
        <div className={styles.groupContainer}>
            <div className={styles.leftContainer}>
                
                
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.addPostContainer}></div>
                <CreatePost />
                <GroupPosts />
            </div>
            <div className={styles.rightContainer}>
        

            </div>
        </div>
    </div>
  )
}

group.requireAuth = true;

export default group