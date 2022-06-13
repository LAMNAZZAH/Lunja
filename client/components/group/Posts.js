import { useState, useEffect } from "react";
import axios from "axios";

import UserProfileFetch from "../profile/UserProfileFetch";
import FetchPostImage from "./FetchPostImage";

import styles from "./styles/Post.module.scss";

const Posts = () => {
  const [posts, setPosts] = useState();

  const fetchPosts = async () => {
    const response = await axios.get(`http://localhost:5000/api/post`);
    const data = response.data;
    if (!data?.ok) return;
    setPosts(data?.Posts);
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
