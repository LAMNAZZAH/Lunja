import RegisterForm from "../components/Forms/RegisterForm";
import HeadData from "../components/HeadData";
import frame1 from '../public/frame1.svg'
import Image from 'next/image';

import styles from "../styles/register.module.scss";

const register = () => {
  return (
    <>
      <HeadData title="Register Page | Lunja Academy" />
      <main>
        <div className={styles.mainRegisterSection}>
          <div className={styles.leftBlock}>
            <RegisterForm />
          </div>
          <div className={styles.rightBlock}>
            <h1 className={styles.rightTitle}>
              
            </h1>
            <Image src={frame1}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default register;