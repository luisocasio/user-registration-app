import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userLogOutReducer } from "../../features/loginSlice";
import userLogOut from "../../axios/userLogOut";
import NavMenu from "../NavMenu/NavMenu";
import { Button } from "antd";
import "antd/dist/antd.css";
import styles from "./Nav.module.css";
import { FiLogOut } from "react-icons/fi";

const Nav = () => {
  let isUserLoggedIn = useSelector((state) => state.loggedIn.login);
  console.log("isUserLoggedIn", isUserLoggedIn)

  let name = localStorage.getItem("myName")
  
  const dispatch = useDispatch();

  const handleLogOut = () => {
    userLogOut();
    dispatch(userLogOutReducer());
  };

  useEffect(() => {
    let isMounted = true;
    console.log("isMounted",isMounted)

    return () => {
     console.log("Clean up")
    }
  }, [isUserLoggedIn]);

  return (
    <nav className={styles.nav}>
      <div className={styles.navMenuWrapper}>
        <NavMenu />
        <Button type="default">
          <Link to="/">Home</Link>
        </Button>
      </div>

      {!name && (
        <div className={styles.navButtonsWrapper}>
          <Button type="default">
            <Link to="/register">Register</Link>
          </Button>
          |
          <Button type="primary">
            <Link to="/login">Log in</Link>
          </Button>
        </div>
      )}

      {name && (
        <div className={styles.navButtonsWrapper}>
          <h1>welcome, {name}</h1> 

          <span className={styles.logoutButton} onClick={handleLogOut}>
            <FiLogOut />
          </span>
        </div>
      )}
    </nav>
  );
};

export default Nav;
