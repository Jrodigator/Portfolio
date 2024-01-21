import React, { useState } from "react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  const smoothScroll = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className={styles.transparentnavbar}>
      <h1 className={styles.logo}>Jared Rodrigues</h1>

      {/* Hamburger Menu */}
      <div
        className={`${styles.hamburger}`}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {/* Nev Items */}
      <div className={`${styles.navitems} ${isNavExpanded ? styles.show : ""}`}>
        <a className={styles.navitem} href="#Home" onClick={(e) => { e.preventDefault(); smoothScroll('Home'); }}>
          Home
        </a>
        <a className={styles.navitem} href="#About" onClick={(e) => { e.preventDefault(); smoothScroll('About'); }}>
          About
        </a>
        <a className={styles.navitem} href="#Gallery" onClick={(e) => { e.preventDefault(); smoothScroll('Gallery'); }}>
          Gallery
        </a>
        <a className={styles.navitem} href="#Contact" onClick={(e) => { e.preventDefault(); smoothScroll('Contact'); }}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
