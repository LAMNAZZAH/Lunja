import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { authContext } from "../../contexts/auth";

import University from '../../components/profile/University';

import styles from "../../styles/profile.module.scss";

const profile = () => {
  const { user } = useContext(authContext);
  const router = useRouter();

  return (
    <div className={styles.profileContainer}>
      <div className={styles.leftBlockContainer}>
        <section className={styles.mainSection}>
          <div className={styles.ImagesContainer}>
            <div className={styles.backgroundImageContainer}>
              <Image layout="fill" src="/lmz-01.jpg" />
              <div className={styles.profileImageContainer}>
                <Image width={100} height={100} src="/profile-pic.png" />
              </div>
            </div>
          </div>
          <div className={styles.mainProfileInfoContainer}>
            <div className={styles.NameBiefSection}>
              <div className={styles.left}>
                <div className={styles.fullname}>
                  {user.first_name + " " + user.last_name}
                </div>
                <div className={styles.degreeLevel}>{user.level}</div>
                <Link href="/ContactInfo">
                  <a className={styles.contactInfo} >Contact Info</a>
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
                  Moulay Ismail faculte des science meknes
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.aboutSection}>
          <div className={styles.titleBlock}>
             <h2>About</h2>
          </div>
          <div className={styles.bodyBlock}>
            <div className={styles.about}>
              {user.about}
            </div>
            <div className={styles.interests}>
              <h2>Interests</h2>
            </div>
          </div>
        </section>
        <section className={styles.myfeedSection}>
          <div className={styles.titleBlock}>
            <h2>Posts</h2>
          </div>
          <div className={styles.latestPostsBlock}>
          </div>
        </section>
        <University/>
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
        </section>
      </div>
    </div>
  );
};

/*export function getServerSideProps {
    
}*/

profile.requireAuth = true;

export default profile;
