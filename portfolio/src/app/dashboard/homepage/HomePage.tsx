"use client";
import React from "react";
import styles from "./home.module.scss";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.main2}>
      <div>
        <img
          src="/bg.jpg"
          alt="hero"
          className={`${styles.bgimg} ${styles.parallax}`}
        />
        
        <h2 className={`${styles.localheader} ${styles.text2}`}>Jared</h2>
        <h1 className={`${styles.localheader} ${styles.text}`}>Rodrigues</h1>

      </div>
    </div>
  );
}
