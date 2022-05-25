import LoginForm from "../components/Forms/LoginForm";
import HeadData from "../components/HeadData";
import styles from "../styles/Login.module.scss";
import frame1 from '../public/frame1.svg'
import Image from 'next/image';

const login = () => {
  return (
    <>
      <HeadData title="Login Page | Lunja Academy" />
      <main>
        <div className={styles.mainLoginSection}>
          <div className={styles.leftBlock}>
            <LoginForm />
          </div>
          <div className={styles.rightBlock}>
            <h1 className={styles.rightTitle}>
              Welcome Back
            </h1>
            <Image src={frame1}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default login;
