import { useContext } from 'react';
import { authContext } from '../../contexts/auth';


import CreateGroup from '../../components/group/CreateGroup';
import CreatePost from '../../components/group/CreatePost';
import MyGroups from '../../components/group/MyGroups';
import Post from '../../components/group/Post';

import styles from '../../styles/groups.module.scss';

const groups = () => {
    const { user } = useContext(authContext);
  return (
    <div>
        <div className={styles.groupsContainer}>
            <div className={styles.leftContainer}>
                <CreateGroup />
                <MyGroups user={user}/>
                <h1>left</h1>
                <h1>left</h1>
                <h1>left</h1>
                <h1>left</h1>
                <h1>left</h1>
                <h1>left</h1>
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.addPostContainer}></div>
                <CreatePost />
                <Post />
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>
                <h1>middle</h1>

            </div>
            <div className={styles.rightContainer}>
                <h1>right</h1>
                <h1>right</h1>
                <h1>right</h1>
                <h1>right</h1>
                <h1>right</h1>

            </div>
        </div>
    </div>
  )
}

groups.requireAuth = true;

export default groups