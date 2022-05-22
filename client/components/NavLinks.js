import styles from "./NavLinks.module.scss";
import Link from "next/link";
import { Button } from "@mantine/core";

const NavLinks = () => {
  return (
    <div>
      <ul className={styles.navLinks}>
        <Link href="/">
          <a className={styles.navLink}>Home</a>
        </Link>
        <Link href="/discover">
          <a className={styles.navLink}>Discover</a>
        </Link>
        <Link href="/blog">
          <a className={styles.navLink}>Blog</a>
        </Link>
        <Link href="/login">
          <Button className={styles.loginButton}>Login</Button>
        </Link>
      </ul>
    </div>
  );
};

export default NavLinks;
