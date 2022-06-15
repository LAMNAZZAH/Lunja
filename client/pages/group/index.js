import { useContext } from 'react';
import { authContext } from '../../contexts/auth';


import CreateGroup from '../../components/group/CreateGroup';
import CreatePost from '../../components/group/CreatePost';
import MyGroups from '../../components/group/MyGroups';
import Posts from '../../components/group/Posts';
import MyGroupsPosts from '../../components/group/MygroupsPosts';

import styles from '../../styles/groups.module.scss';

const groups = () => {
    const { user } = useContext(authContext);
  return (
    <div>
        <div className={styles.groupsContainer}>
            <div className={styles.leftContainer}>
                <CreateGroup user={user}/>
                <MyGroups user={user}/>
                
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.addPostContainer}></div>
                <CreatePost />
                <MyGroupsPosts User={user}/>
            </div>
            <div className={styles.rightContainer}>
        

            </div>
        </div>
    </div>
  )
}

groups.requireAuth = true;

export default groups