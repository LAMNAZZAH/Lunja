import axios from 'axios';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './styles/UserProfileFetch.module.scss';

const UserProfileFetch = (props) => {
    const [profile, setProfile] = useState();


    const fetchImage = async (userProfile) => {
   
    
        const profileUrl = `http://localhost:5000/api/account/user/profile/${userProfile}`;
            await axios.get(profileUrl, { responseType: "blob" }).then((res) => {
              let imageUrl = URL.createObjectURL(res.data);
              return setProfile(imageUrl);
            }).catch(err => {
              setProfile(null);
              return;
            });
      } 
    
      useEffect(() => {
        fetchImage(props.profileUrl);
      }, [])
    

  return (
    <div className={styles.profileContainer}>
    <Image layout="fill" src={ profile || "/defaultProfile.png" } />
    </div>
  )
}

export default UserProfileFetch