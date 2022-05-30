import Link from "next/link";
import { Badge } from "@mantine/core";
import Image from "next/image";

import styles from "./styles/MainProfileInfo.module.scss";

const MainProfileInfo = (props) => {
  const User = props.User;

  return (
    <section className={styles.mainSection}>
      <div className={styles.ImagesContainer}>
        <div className={styles.backgroundImageContainer}>
          {/*<Image layout="fill" src="/lmz-01.jpg" />*/}
          <Image layout="fill" src={User?.background_url} />
          <div className={styles.profileImageContainer}>
            {/*<Image width={100} height={100} src="/profile-pic.png" />*/}
            <Image width={100} height={100} src={User?.profile_url} />
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
