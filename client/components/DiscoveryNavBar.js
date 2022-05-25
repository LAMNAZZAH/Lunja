import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Drawer, ActionIcon } from "@mantine/core";
import { Menu2, X, User } from "tabler-icons-react";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

import LunjaLogo from "../public/lunjaLandscapeLight.svg";

import styles from "./DiscoveryNavBar.module.scss";

const DiscoveryNavBar = () => {
  const router = useRouter();
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  useEffect(() => {
    setBurgerIsOpen(false);
  }, [router.pathname]);

  return (
    <div className={styles.navBar}>
      <Drawer
        overlayBlur="5"
        size="80%"
        position="right"
        opened={burgerIsOpen}
        onClose={() => setBurgerIsOpen(false)}
        title="Menu"
        padding="xl"
      >
        <NavLinks />
      </Drawer>

      <div className={styles.logo}>
        <Link href="/">
          <Image
            priority={true}
            src={LunjaLogo}
            alt="Lunja app Logo"
            height={45}
            width={170}
          />
        </Link>
      </div>

      <ul className={styles.navLinks}>
        <Link href="/">
          <a
            className={
              router.pathname == "/" ? styles.activeNavLink : styles.navLink
            }
          >
            Home
          </a>
        </Link>
        <Link href="/discover">
          <a
            className={
              router.pathname == "/discover"
                ? styles.activeNavLink
                : styles.navLink
            }
          >
            Discover
          </a>
        </Link>
        <Link href="/blog">
          <a
            className={
              router.pathname == "/blog" ? styles.activeNavLink : styles.navLink
            }
          >
            Blog
          </a>
        </Link>
      </ul>
      <div className={styles.loginRegisterContainer}>
      <Link href="/login"><a className={styles.loginLink}>Login</a></Link>
      <Link href="/register">
        <button
          className={styles.registerButton}
        >
          Get Started
        </button>
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

export default DiscoveryNavBar;
