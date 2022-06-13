import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ActionIcon, Button } from '@mantine/core'

import styles from './styles/MyGroups.module.scss';

const MyGroups = ({ user }) => {
    const [myGroups, setMyGroups] = useState();

    const fetchMyGroups = async () => {
        const adminId = user.user_id;

        const response = await axios.get(`http://localhost:5000/api/group?adminId=${adminId}`); 
        const data = await response.data;
        if (!data.ok) return;
        return setMyGroups(data?.myGroups);
    }

    useEffect(() => {
        fetchMyGroups();
    }, [])

  return (
    <div className={styles.myGroupsContainer}>
        <div className={styles.myGroupsTitleBlock}>
            <h3>My Groups</h3>
        </div>
        <div className={styles.myGroupsBodyBlock}>
            {
                myGroups?.map(group => {
                    return (
                        <div className={styles.groupContainer}>                        
                        <div className={styles.imageContainer}>
                            <Image layout="fill" src={"/group.png"} />
                        </div>
                            <h3>{group.name}</h3>
                        <div className={styles.infoContainer}>
                            <h4>{group.university_name}</h4>
                        </div>
                        <ActionIcon component={Link} href={`/group/${group.name}`}>
                        <Button variant='outline'>Explore</Button>
                        </ActionIcon>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MyGroups