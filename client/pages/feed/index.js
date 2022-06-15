
import Posts from '../../components/group/Posts';
import CreatePost from '../../components/group/CreatePost';

import styles from '../../styles/Feed.module.scss'


const Feed = () => {
  return (
    <div>
        <div className={styles.feedContainer}>
            <div className={styles.leftContainer}>
                
                
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.addPostContainer}></div>
                <CreatePost />
                <Posts />
            </div>
            <div className={styles.rightContainer}>
        

            </div>
        </div>
    </div>
  )
}

Feed.requireAuth = true;

export default Feed