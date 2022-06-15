import axios from 'axios';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './styles/FetchPostImage.module.scss';

const FetchPostImage = (props) => {
    const [postImage, setPostImage] = useState();


    const fetchImage = async (Image) => {
   
        const imageUrl = `http://localhost:5000/api/post/postImage/${Image}`;
            await axios.get(imageUrl, { responseType: "blob" }).then((res) => {
              let imageUrl = URL.createObjectURL(res.data);
              return setPostImage(imageUrl);
            }).catch(err => {
              setPostImage(null);
              return;
            });
      } 
    
      useEffect(() => {
        fetchImage(props.image);
      }, [props])
    

  return (
    <div>
     { props?.image && (<div className={styles.imageContainer}><Image layout="fill" src={ postImage || "/defaultBackground.png" } /></div>)}
    </div>
  )
}

export default FetchPostImage;