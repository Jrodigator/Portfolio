import React from "react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.transparentnavbar}>
      <h1 className={styles.logo}>Jared Rodrigues</h1>
      <div className={styles.navitems}>
        <a className={styles.navitem} href="#home">Home</a>
        <a className={styles.navitem} href="#about">About</a>
        <a className={styles.navitem} href="#services">Gallery</a>
        <a className={styles.navitem} href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
