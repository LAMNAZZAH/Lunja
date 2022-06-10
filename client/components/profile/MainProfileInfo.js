import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge, ActionIcon, Modal } from "@mantine/core";
import { useRouter } from 'next/router';
import Image from "next/image";
import { Upload } from "tabler-icons-react";
import Cookies from "js-cookie";
import axios from 'axios';

import styles from "./styles/MainProfileInfo.module.scss";

const MainProfileInfo = (props) => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const [profile, setProfile] = useState();
  const [background, setBackground] = useState();

  const [backgroundOpened, setBackgroundOpened] = useState(false);
  const [profileImage, setProfileImage] = useState({ preview: "", data: "" });
  const [backgroundImage, setBackgroundImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");

  const fetchImage = async (userProfile, image) => {
    
    if (userProfile == null) {
      setBackground(null);
      setProfile(null);
      return;
    }

    const profileUrl = `http://localhost:5000/api/account/user/profile/${userProfile}`;
        await axios.get(profileUrl, { responseType: "blob" }).then((res) => {
          let imageUrl = URL.createObjectURL(res.data);
          if (image == 'profile') return setProfile(imageUrl);
          else return setBackground(imageUrl);
        }).catch(err => {
          setBackground(null); 
          setProfile(null);
          return;
        });
  }

  useEffect(() => {
    fetchImage(props.User?.profile_url, 'profile');
    fetchImage(props.User?.background_url, 'background');
  }, [props.User])


  const handleSubmitBackground = async e => {
    e.preventDefault(); 
    let formData = new FormData(); 
    formData.append('file', backgroundImage.data); 
    const token = Cookies.get('token'); 
    const response = await fetch("http://localhost:5000/api/upload/uploadBackground", 
      {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
      }
    );
    if (response) setStatus(response.statusText);
    if (response.status === 200) {
      setBackgroundOpened(false);
      setBackgroundImage({ preview: "", data: "" });
    }
  }


  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", profileImage.data);
    const token = Cookies.get("token");
    const response = await fetch(
      "http://localhost:5000/api/upload/uploadProfile",
      {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
      }
    );
    if (response) setStatus(response.statusText);
    if (response.status == 200) {
      setOpened(false);
      setProfileImage({ preview: "", data: "" });
    }
  };

  const handleProfileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setProfileImage(img);
  };

  const handleBackroundChange = e => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setBackgroundImage(img);
  }

  const User = props.User;

  return (
    <section className={styles.mainSection}>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        <h1>Upload profile picture</h1>
        {profileImage.preview && <img src={profileImage.preview} width="100" height="100" />}
        <hr />
        <form onSubmit={handleSubmitProfile}>
          <input type="file" name="file" onChange={handleProfileChange} />
          <button type="submit">Submit</button>
        </form>
        {status && <h4>{status}</h4>}
      </Modal>
      <Modal
        opened={backgroundOpened}
        onClose={() => setBackgroundOpened(false)}
        title="Introduce yourself!"
      >
        <h1>Upload background Picture</h1>
        {backgroundImage.preview && <img src={backgroundImage.preview} width="100" height="100" />}
        <hr />
        <form onSubmit={handleSubmitBackground}>
          <input type="file" name="file" onChange={handleBackroundChange} />
          <button type="submit">Submit</button>
        </form>
        {status && <h4>{status}</h4>}
      </Modal>
      <div className={styles.ImagesContainer}>
        <div className={styles.backgroundImageContainer}>
          <Image layout="fill" src={background || "/defaultBackground.png"} />
          {props.editable && (
            <ActionIcon onClick={() => setBackgroundOpened(true)}>
              <Upload color="gray" />
            </ActionIcon>
          )}
          <div className={styles.profileImageContainer}>
            <Image
              width={100}
              height={100}
              //!!!!!
              src={profile || "/defaultProfile.png"}
            />
            {props.editable && (
              <ActionIcon onClick={() => setOpened(true)}>
                <Upload color="gray" />
              </ActionIcon>
            )}
          </div>
        </div>
      </div>
      <div className={styles.mainProfileInfoContainer}>
        <div className={styles.NameBiefSection}>
          <div className={styles.left}>
            <div className={styles.fullname}>
              {User?.first_name + " " + User?.last_name}
            </div>
            <div className={styles.degreeLevel}>{User?.level}</div>
            <div className={styles.accountType}>
              <Badge size="lg">{User?.account_type}</Badge>
            </div>
            <Link href="/ContactInfo">
              <a className={styles.contactInfo}>Contact Info</a>
            </Link>
            <div className={styles.followBlock}>
              <div className={styles.following}>
                Following <span>15</span>
              </div>
              <div className={styles.followers}>
                Followers <span>51</span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.university}>
              {props.Univuser?.university}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainProfileInfo;
