"use client";
import React, { useRef } from "react";
import styles from "@app/dashboard/homepage/home.module.scss";
import { useParallax } from "react-scroll-parallax";
import { useEffect } from "react";
import Link from "next/link";
import ParticlesContainer from "@/app/components/ParticlesContainer";

export default function About() {
  return (
    <div className={styles.main2}>
      <div className={styles.container}>
        <h1 className={`${styles.localheader} ${styles.text2}`}>About</h1>
        <h1 className={`${styles.localheader} ${styles.text}`}>Page</h1>
      </div>
    </div>
  );
}