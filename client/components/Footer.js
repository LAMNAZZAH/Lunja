import Image from "next/image";
import Link from 'next/link'


import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.leftBlock}>
      <h2 className={styles.footerTitle}>Lunja Academy</h2>
      <h5 className={styles.footerSubTitle}>
        Copyright © 2022 Lunja Academy <br /> Technologies casablanca,
        <br />
        All rights reserved.
      </h5>
    </div>
    <div className={styles.rightBlock}>
      <div className={styles.footerLinks}>
      <Link href='/privacypolicy'>
      <a className={styles.link}>Privacy Policy</a>
      </Link>
      <Link href='/termsofservice'>
      <a className={styles.link}>Terms Of Service</a>
      </Link>
      </div>
    </div>
  </div>
);

export default Footer;
