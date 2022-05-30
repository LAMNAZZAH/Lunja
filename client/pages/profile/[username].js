import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";
import { authContext } from "../../contexts/auth";
import NotFound from "../404.js";
import MainProfileInfo from "../../components/profile/MainProfileInfo";

import axios from "axios";

import University from "../../components/profile/University";

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
            <section className={styles.aboutSection}>
              <div className={styles.titleBlock}>
                <h2>About</h2>
              </div>
              <div className={styles.bodyBlock}>
                <div className={styles.about}>{User?.about}</div>
                <div className={styles.interests}>
                  <h3>Interests</h3>
                </div>
              </div>
            </section>
            <section className={styles.myfeedSection}>
              <div className={styles.titleBlock}>
                <h2>Posts</h2>
              </div>
              <div className={styles.latestPostsBlock}></div>
            </section>
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
            <section className={styles.peopleYouMayKnowSection}>
              <div className={styles.titleBlock}>
                <h2>People You May Know</h2>
              </div>
            </section>
            <section className={styles.blogSection}>
              <div className={styles.titleBlock}>
                <h2>Blog</h2>
              </div>
              <div className={styles.blogsBlock}>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
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
  //!note: when using utils functions throws error, for that using axios directly here
  const user = await axios.get(
    `${process.env.URL}/api/account/user/${username}`
  );
  if (user.data?.ok) {
    User = await user?.data.user;
    console.log(User);
  }

  userId = user?.data.user?.user_id 
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
