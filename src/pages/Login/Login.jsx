import { useSelector } from "react-redux";
import LoginForm from "../../components/Form/LoginForm";
import styles from "./Login.module.css";
import people from "../../assets/people.png";

const Login = () => {
  const isUserLoggedIn = useSelector((state) => state.loggedIn.login);

  return (
    <>
      {!isUserLoggedIn && (
        <div className={styles.loginPageWrapper}>
          <img
            className={styles.loginFormImage}
            src={people}
            alt="people conversating"
          />
          <LoginForm />
        </div>
      )}

      
    </>
  );
};

export default Login;
