import RegisterForm from "../../components/Form/RegisterForm";
import styles from "./Register.module.css";
import hiFive from "../../assets/register_success.png";

const Register = () => {
  return (
    <div className={styles.registerPageWrapper}>
      <img
        className={styles.registerFormImage}
        src={hiFive}
        alt="person exploring map"
      />
      <RegisterForm />
    </div>
  );
};

export default Register;
