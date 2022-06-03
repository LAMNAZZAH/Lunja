import RegisterForm from "../components/Forms/RegisterForm";
import { postRegister } from '../utils/api/accountApi';
import HeadData from "../components/HeadData";
import frame1 from '../public/frame1.svg'
import Image from 'next/image';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import styles from "../styles/register.module.scss";

const register = () => {
  const router = useRouter()

  const notifyErr = (error) => toast.error(error);

  const welcomeBack = (firstName) => toast(`Great ${firstName}!, now you can login to your Account`,
  {
    icon: '👋',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);

  const signingIn = async (data) => {
    const { first_name, last_name, email, account_type, level, username, password } = data; 
    const response = await postRegister(first_name, last_name, email, account_type, level, username, password);
    if (!response?.ok) {
      const errors = await response?.errors;
      errors.forEach(error => {
        notifyErr(error);
      });
      return console.log(errors);
    }
    const user = await response?.user; 
    welcomeBack(user.first_name);
    return router.replace("/login");
  }

  return (
    <>
      <HeadData title="Register Page | Lunja Academy" />
      <main>
        <div className={styles.mainRegisterSection}>
          <div className={styles.leftBlock}>
            <RegisterForm submitCallback={signingIn}/>
          </div>
          <div className={styles.rightBlock}>
            <h1 className={styles.rightTitle}>
              Create Your Free Account
            </h1>
            <Image src={frame1}/>
          </div>
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default register;