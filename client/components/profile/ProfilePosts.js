import { useState, useEffect } from 'react';
import axios from 'axios'; 

import UserProfileFetch from './UserProfileFetch';
import FetchPostImage from '../group/FetchPostImage';
import PostTags from '../group/PostTags';


import styles from "./styles/ProfilePosts.module.scss";

const ProfilePosts = ({User}) => {
    const [post, setPost] = useState();

    const fetchPost = async () => {
        const response = await axios.get(`http://localhost:5000/api/post/latest/${User.user_id}`); 
        if (!response.data?.ok) return; 
        const data = await response.data.post; 
        setPost(data);
    }

    useEffect(() => {
        fetchPost();
    }, [])


  return (
    <section className={styles.profilePostsContainer}>
      
      <div className={styles.bodyContainer}>
      <div className={styles.post}>
      <div className={styles.titleBlock}>
        <h2>Posts</h2>
      </div>
            <div className={styles.userInfoBLock}>
              <UserProfileFetch profileUrl={User?.profile_url} />
              <div className={styles.nameAndGroup}>
                <h3>
                  {User?.first_name} {User?.last_name}
                </h3>
              </div>
            </div>
            <div className={styles.bodyBlock}>
              <div className={styles.textContainer}>
                <h3>{post?.content}</h3>
              </div>
              <div className={styles.postImageContainer}>
                <FetchPostImage image={post?.image_url} />
              </div>
              <div className={styles.tagsContainer}>
                <PostTags postId={post?.post_id} />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ProfilePosts;
