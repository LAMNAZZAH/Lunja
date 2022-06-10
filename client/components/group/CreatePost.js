import { authContext } from "../../contexts/auth";
import { useContext, useEffect, useState } from "react";
import { Modal, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";

import styles from "./styles/CreatePost.module.scss";

const CreatePost = () => {
  const { user } = useContext(authContext);
  const [profile, setProfile] = useState();
  const [opened, setOpened] = useState();
  const [image, setImage] = useState({ preview: "", data: "" });

  const form = useForm({
    initialValues: {
      content: '',
    },});

  const fetchImage = async (userProfile) => {
    const profileUrl = `http://localhost:5000/api/account/user/profile/${userProfile}`;
    await axios
      .get(profileUrl, { responseType: "blob" })
      .then((res) => {
        let imageUrl = URL.createObjectURL(res.data);
        setProfile(imageUrl);
      })
      .catch((err) => {
        return;
      });
  };

  const handleSubmitPost = async (e) => {
    //e.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);
    const token = Cookies.get("token");
    const response = await fetch(
      `http://localhost:5000/api/upload/uploadPostImage?userId=${user.user_id}&classId=${1}&content=${form.values.content}`,
      {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
      }
    );
    //if (response) setStatus(response.statusText);
    if (response.status == 200) {
      setOpened(false);
      setImage({ preview: "", data: "" });
    }
  }

  const handleImageChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  }

  useEffect(() => {
    fetchImage(user?.profile_url);
  }, []);

  return (
    <div className={styles.createPostContainer}>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Post"
        size="55%"
      >
        <form onSubmit={form.onSubmit((values) => handleSubmitPost(values))}>
        <Textarea placeholder="Inspire other students" required  {...form.getInputProps('content')}/>
        <h1>Upload background Picture</h1>
        {image.preview && <img src={image.preview} width="100" height="100" />}
        <hr />
          <input type="file" name="file" onChange={handleImageChange} />
          <button type="submit">Submit</button>
        </form>
      </Modal>

      <div className={styles.profileAndInput}>
        <div className={styles.profileContainer}>
          <Image layout="fill" src={profile || "/defaultProfile.jpg"} />
        </div>
        <button
          className={styles.openCreatePostModal}
          onClick={() => setOpened(true)}
          type="button"
        >
          Share What You Think May Benifit Other Students
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
