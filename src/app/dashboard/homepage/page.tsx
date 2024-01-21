"use client";
import ParticlesContainer from "@/app/components/ParticlesContainer";
import Navbar from "../navbar";
import Home from "./HomePage";
import About from "../about/about";
import Gallery from "../gallery/gallery";
import styles from "./page.module.scss";

export default async function Dashboard() {
  // get url parasm
  return (
    <div>
      <Navbar />
      <div className={styles.scrollContainer}>
        <div className={styles.section}>
          <Home />
        </div>
        <div className={styles.section}>
          <About />
        </div>
        <div className={styles.section}>
          <Gallery />
        </div>
      </div>
    </div>
  );
}
