import React, { useState } from "react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleHamClick = () => {
    console.log("clicked");
    setIsNavExpanded(!isNavExpanded);
  };
  // () => setIsNavExpanded(!isNavExpanded)
  return (
    <nav className={styles.transparentnavbar}>
      <h1 className={styles.logo}>Jared Rodrigues</h1>
      
      {/* Hamburger Menu */}
      <div className={`${styles.hamburger}`} onClick={handleHamClick}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {/* Nev Items */}
      <div className={`${styles.navitems} ${isNavExpanded ? styles.show : ""}`}>
        <a className={styles.navitem} href="#home">Home</a>
        <a className={styles.navitem} href="#about">About</a>
        <a className={styles.navitem} href="#services">Gallery</a>
        <a className={styles.navitem} href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
