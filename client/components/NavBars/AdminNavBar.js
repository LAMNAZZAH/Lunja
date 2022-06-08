import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Drawer, ActionIcon } from "@mantine/core";
import axios from 'axios';

import { Menu2, X } from "tabler-icons-react";
import AdminNavLinks from "./AdminNavLinks";
import { authContext } from "../../contexts/auth";

import LunjaLogo from "../../public/lunjaLandscapeLight.svg";

import styles from "./AdminNavBar.module.scss";

const AdminNavBar = () => {
  const { user } = useContext(authContext);
  const router = useRouter();
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [profile, setProfile] = useState();


  const fetchImage = async (userProfile) => {
    const profileUrl = `http://localhost:5000/api/account/user/profile/${userProfile}`;
        await axios.get(profileUrl, { responseType: "blob" }).then((res) => {
          let imageUrl = URL.createObjectURL(res.data);
          setProfile(imageUrl);
        }).catch(err => {
          return;
        });
  } 

  useEffect(() => {
    fetchImage(user?.profile_url);
  }, [])


  useEffect(() => {
    setBurgerIsOpen(false);
  }, [router.pathname]);


  return (
    <div className={styles.navBar}>
      <Drawer
        overlayBlur="5"
        size="50%"
        position="right"
        opened={burgerIsOpen}
        onClose={() => setBurgerIsOpen(false)}
        title="Menu"
        padding="xl"
      >
        <AdminNavLinks />
      </Drawer>

      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image
              priority={true}
              src={LunjaLogo}
              alt="Lunja app Logo"
              height={45}
              width={170}
            />
          </a>
        </Link>
      </div>

      <ul className={styles.navLinks}>
        <div className={styles.navlink}>
          <Link href="/">
            <a>
              <Image
                className={styles.icon}
                src="/home.svg"
                width={23}
                height={23}
              />
            </a>
          </Link>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>

        <div className={styles.navlink}>
          <Link href="/group">
            <a>
              <Image
                className={styles.icon}
                src="/group.svg"
                width={23}
                height={23}
              />
            </a>
          </Link>
          <Link href="/discover">
            <a>Groups</a>
          </Link>
        </div>

        <div className={styles.navlink}>
          <Link href="/blog">
            <a>
              <Image
                className={styles.icon}
                src="/notifications.svg"
                width={23}
                height={23}
              />
            </a>
          </Link>
          <Link href="/notification">
            <a>Notifications</a>
          </Link>
        </div>
      </ul>
      <div className={styles.ProfileNameContainer}>
        <Link href={`/profile/${user.username}`}>
          <a className={styles.username}>{user.username}</a>
        </Link>
        <Link href={`/profile/${user.username}`}>
          <div className={styles.avatarContainer}>
          {profile && <Image layout="fill" src={profile || '/defaultProfile.png'} className={styles.avatar} />}
          </div>
        </Link>
      </div>

      <div className={styles.navBurger}>
        <ActionIcon onClick={() => setBurgerIsOpen(true)}>
          {burgerIsOpen == true ? <X /> : <Menu2 color="lightgreen" />}
        </ActionIcon>
      </div>
    </div>
  );
};

export default AdminNavBar;
