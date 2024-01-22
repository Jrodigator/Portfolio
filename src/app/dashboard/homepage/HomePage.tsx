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
        src="/bg_back.png"
        alt="hero"
        className={`${styles.bgimg}`}
      />
      <img
        src="/bg_front.png"
        alt="hero"
        className={`${styles.bgimg2}`}
      />
      <ParticlesContainer />
      <div className={styles.container}>
        <h1 className={`${styles.localheader} ${styles.text2}`}>Jared</h1>
        <h1 className={`${styles.localheader} ${styles.text}`}>Rodrigues</h1>
      </div>
    </div>
  );
}
