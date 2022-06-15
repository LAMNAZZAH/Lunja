import Image from "next/image";
import { useContext } from "react";
import { authContext } from "../../contexts/auth";

import axios from "axios";

import University from "../../components/profile/University";
import MainProfileInfo from "../../components/profile/MainProfileInfo";
import Interests from "../../components/profile/Interests";
import NotFound from "../404.js";
import PeopleYouMayKnow from "../../components/profile/PeopleYouMayKnow";
import About from "../../components/profile/About";
import ProfilePosts from "../../components/profile/ProfilePosts";

import styles from "../../styles/profile.module.scss";

const profile = ({ univs, User, Univuser }) => {
  const { user } = useContext(authContext);
  const editable = false;

  if (user?.username == User?.username) editable = true;

  return (
    <div>
      {User ? (
        <div className={styles.profile}>
          <div className={styles.profileContainer}>
            <div className={styles.leftBlockContainer}>
              <MainProfileInfo
                User={User}
                Univuser={Univuser}
                editable={editable}
              />
              <About editable={editable} User={User} />
              <Interests editable={editable} User={User} />
              <ProfilePosts User={User}/>
              <University
                univs={univs}
                Univuser={Univuser}
                User={User}
                editable={editable}
              />
            </div>
            <div className={styles.rightBlockContainer}>
              <section className={styles.announcementsSection}>
                <Image layout="fill" src="/announcement.png" />
              </section>
              <PeopleYouMayKnow User={user.user_id} editable={editable} />
              <section className={styles.blogSection}>
                <div className={styles.titleBlock}>
                  <h2>Blog</h2>
                </div>
                <div className={styles.blogsBlock}>
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <NotFound />
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  let univs = [];
  let User = {};
  let Univuser = null;
  let userId = null;

  const response = await axios.get("http://localhost:5000/api/university", {
    Headers: { "Content-Type": "application/json" },
  });

  if (response?.data.ok) {
    univs = await response.data.universities;
    console.log(univs);
  }

  const { username } = context.params;
  //!note: when using utils functions throws error, for that I am using axios directly here
  const user = await axios.get(
    `http://localhost:5000/api/account/user/${username}`
  );
  if (user.data?.ok) {
    User = await user?.data.user;
    console.log(User);
  }

  userId = user?.data.user?.user_id;
  const univuser = await axios.get(
    `http://localhost:5000/api/univuser?userId=${userId}`
  );
  console.log(`http://localhost:5000/api/univuser?userId=${userId}`);
  Univuser = await univuser?.data.univuser;
  console.log("univUser: " + Univuser?.university);

  return {
    props: {
      univs: univs || null,
      User: User || null,
      Univuser: Univuser || null,
    },
  };
}

profile.requireAuth = true;

export default profile;
