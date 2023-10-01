import { NavLink,  } from "react-router-dom";
import { HomeSimple, BoxIso } from "iconoir-react";
import logo from "/coolbox-icon.svg";
import styles from "../styles/NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="Coolbox" />
        <p className={styles.logoName}>Cool Module</p>
      </header>
      <nav className={styles.navbar}>
        <NavLink className={({isActive})=>isActive ? styles.navItemActive : styles.navItem} to="/">
          <HomeSimple />
          Inicio
        </NavLink>
        <NavLink className={({isActive})=>isActive ? styles.navItemActive : styles.navItem} to="/upload-products">
          <BoxIso />
          Productos
        </NavLink>
      </nav>
      <footer className={styles.footer}>Created by UX & Performance</footer>
    </div>
  );
};
