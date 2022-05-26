import React, { useContext } from "react";
import styles from "./AdminNavLinks.module.scss";
import Link from "next/link";
import { SmartHome, Users, Notification } from "tabler-icons-react";

const AdminNavLinks = () => {
  return (
    <>
      <ul className={styles.navLinks}>
        <div className={styles.navLink}>
          <Link href="/">
            <SmartHome size={30} strokeWidth={3} color={"#808080"} />
          </Link>
          <a>Home</a>
        </div>

        <div className={styles.navLink}>
          <Link href="/discover">
            <Users size={30} strokeWidth={3} color={"#808080"} />
          </Link>
          <a>Groups</a>
        </div>

        <div className={styles.navLink}>
          <Link href="/blog">
            <Notification size={30} strokeWidth={3} color={"#808080"} />
          </Link>
          <a>Notifications</a>
        </div>
      </ul>
    </>
  );
};

export default AdminNavLinks;
