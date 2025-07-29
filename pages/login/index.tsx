import Header from "@/components/Header/Header";
import styles from "./loginPage.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <h1 className={styles.title}>Boardgame App</h1>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
