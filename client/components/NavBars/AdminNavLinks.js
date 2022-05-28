import React, { useContext } from "react";
import styles from "./AdminNavLinks.module.scss";
import Link from "next/link";
import Image from "next/image";

const AdminNavLinks = () => {
  return (
    <>
      <ul className={styles.navLinks}>
        <div className={styles.navLink}>
          <Link href="/">
            {/*NOTE: image is inside <a></a> because it throws error that the component isn't allowing forwarding refs */}
            <a>
              <Image src="/home.svg" width={30} height={30} />
            </a>
          </Link>
          <a>Home</a>
        </div>

        <div className={styles.navLink}>
          <Link href="/discover">
            <a>
              <Image src="/group.svg" width={30} height={30} />
            </a>
          </Link>
          <a>Groups</a>
        </div>

        <div className={styles.navLink}>
          <Link href="/blog">
            <a>
              <Image src="/notifications.svg" width={30} height={30} />
            </a>
          </Link>
          <a>Notifications</a>
        </div>
      </ul>
    </>
  );
};

export default AdminNavLinks;
