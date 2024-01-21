"use client";
import React, { useRef } from "react";
import styles from "./home.module.scss";
import { useParallax } from "react-scroll-parallax";
import { useEffect } from "react";
import Link from "next/link";
import ParticlesContainer from "@/app/components/ParticlesContainer";

export default function HomePage() {
  return (
    <div className={styles.main2}>
      <img
        src="/DeskBG.png"
        alt="hero"
        className={`${styles.bgimg} ${styles.parallax}`}
      />
      <ParticlesContainer />
      <h1 className={`${styles.localheader} ${styles.text2}`}>Jared</h1>
      <h1 className={`${styles.localheader} ${styles.text}`}>Rodrigues</h1>
    </div>
  );
}
