import LoginForm from "../components/Forms/LoginForm";
import HeadData from "../components/HeadData";
import styles from "../styles/Login.module.scss";

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
              Welcome Back To Lunja
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default login;
