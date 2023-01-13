import Button, { ButtonType } from '../../src/components/ui-kit/Button';
import styles from './index.module.css';
import { useRouter } from 'next/router';
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

const Login = () => {
  const router = useRouter();

  const onLoginClick = () => {
    router.push('/api/auth/login');
  };

  return (
    <div className={styles.login}>
      <Header/>
      <div className={styles.login_container}>
        <h1 className={styles.login_title}>Log in or sign up in seconds</h1>
        <p className={styles.login_subtitle}>
          Create an account or log in to get started <br /> The results will
          be sent to this mail.
        </p>
        <Button
          onClick={onLoginClick}
          className={styles.login_button}
          type={ButtonType.primary}
        >
        <span className={styles.login_button_text}>
          Sign in with Google
        </span>
        </Button>
        <Button
          onClick={onLoginClick}
          className={styles.login_button}
          type={ButtonType.secondary}
        >
        <span className={styles.login_button_text}>
          Sign in with Email
        </span>
        </Button>
        <p className={styles.login_terms}>
          When creating a new account, you agree to the terms & conditions
          and privacy policy
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
