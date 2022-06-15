import { useState, useEffect } from "react";
import axios from "axios";

import UserProfileFetch from "../profile/UserProfileFetch";
import FetchPostImage from "./FetchPostImage";
import PostTags from './PostTags';


import styles from "./styles/Post.module.scss";

const MyGroupsPosts = ({User}) => {
  const [posts, setPosts] = useState();
  const [myGroups, setMyGroups] = useState();

  const fetchMyGroups = async () => {
      const adminId = User.user_id;

      const response = await axios.get(`http://localhost:5000/api/group?adminId=${adminId}`); 
      const data = await response.data;
      if (!data.ok) return;
      return setMyGroups(data?.myGroups);
  }



  const fetchPosts = async () => {
    const array = []; 
    fetchMyGroups();
    myGroups?.forEach(group => {
        array.push(group.class_id);
    });
    const body = {
      groups: array,
    }
    console.log("'BODY: '" + body.groups);
    const response = await axios.post(`http://localhost:5000/api/post`, body);
    const data = response.data;
    if (!data?.ok) return;
    setPosts(data?.groupPosts);
    console.log("dddd: " +myGroups);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.postContainer}>
      {posts?.map((post, index) => {
        return (
          <div className={styles.post}>
            <div key={post?.post_id} className={styles.userInfoBLock}>
              <UserProfileFetch profileUrl={post.user.profile_url} />
              <div className={styles.nameAndGroup}>
                <h3>
                  {post.user.first_name} {post.user.last_name}
                </h3>
                <h4>({post.theclass.name})</h4>
              </div>
            </div>
            <div className={styles.bodyBlock}>
              <div className={styles.textContainer}>
                <h3>{post.content}</h3>
              </div>
              <div className={styles.postImageContainer}>
                <FetchPostImage key={post.image_url} image={post.image_url} />
              </div>
              <div className={styles.tagsContainer}>
                <PostTags postId={post?.post_id} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyGroupsPosts;
