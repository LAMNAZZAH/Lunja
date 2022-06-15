import { useState, useEffect } from 'react'; 
import axios from 'axios';
import { Badge } from '@mantine/core';

import styles from './styles/PostTags.module.scss';

const Posttags = (props) => {
    const [tags, setTags] = useState();

    const fetchTags = async () => {
      const postId = props.postId;
      const response = await axios.get(`http://localhost:5000/api/post/tag/${postId}`);
      if (!response.data?.ok) return; 
      const data = await response.data?.tags;
      setTags(data);
    }

    useEffect(() => {
      fetchTags();
    }, [props])

  return (
    <div className={styles.postTagsContainer}>
        {
        tags?.map(tag => {
          return (
            <Badge color="grape">{tag}</Badge>
          )
        })
        }
    </div>
  )
}

export default Posttags