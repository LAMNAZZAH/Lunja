import styles from "./NavLinks.module.scss";
import Link from "next/link";
import { Button } from "@mantine/core";
import { User } from 'tabler-icons-react';

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
        <Link href="/login"><a className={styles.loginLink}>Login</a></Link>
      <Link href="/register">
        <button
          className={styles.registerButton}
        >
          Get Started
        </button>
      </Link>
      </ul>
    </div>
  );
};

export default NavLinks;
