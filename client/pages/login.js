import LoginForm from "../components/Forms/LoginForm";
import HeadData from "../components/HeadData";
import frame1 from "../public/frame1.svg";
import Image from "next/image";
import { useContext, useState } from "react";
import { authContext } from "../contexts/auth";
import { postLogin } from "../utils/api/accountApi";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

import styles from "../styles/Login.module.scss";

const login = () => {
  const router = useRouter();
  const { getUserFromCookies } = useContext(authContext);

  const notifyerr = (toastmsg) => toast.error(`${toastmsg}`);
  const notifymssg = (toastmsg) => toast.success(`${toastmsg}`);

  const loggingIn = async (data) => {
    const { usernameOrEmail, password } = data;
    const response = await postLogin(usernameOrEmail, password);
    if (response && response.ok) {
      Cookies.set("token", `Bearer ${response.token}`);
      getUserFromCookies();
      notifymssg("Logged In successfully");
      router.replace("/blog");
    } else {
      const errors = response?.errors;
      errors?.forEach((error) => {
        notifyerr(error);
      });
    }
  };

  return (
    <>
      <HeadData title="Login Page | Lunja Academy" />
      <main>
        <div className={styles.mainLoginSection}>
          <div className={styles.leftBlock}>
            <LoginForm submitCallback={loggingIn} />
          </div>
          <div className={styles.rightBlock}>
            <h1 className={styles.rightTitle}>
              Welcome Back!
            </h1>
            <Image src={frame1} />
          </div>
        </div>
        <Toaster position="top-center" />
      </main>
    </>
  );
};

export default login;
