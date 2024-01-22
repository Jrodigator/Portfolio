"use client";
import React, { useRef, useState } from "react";
import styles from "./gallery.module.scss";
import ImageSlider from "@/app/components/ImageSlider";

interface Image {
  url: string;
}

export default function Gallery() {
  const images1: Image[] = [
    { url: "/gallery1/climb1.jpg" },
    { url: "/gallery1/climb2.jpeg" },
    // ... more images load w/ json
  ];
  const images2: Image[] = [
    { url: "/gallery2/art1.jpeg" },
    { url: "/gallery2/art2.jpeg" },
    // ... more images
  ];
  const images3: Image[] = [
    { url: "/gallery3/bg.jpg" },
    { url: "/gallery3/lily.jpeg" },
    // ... more images
  ];
  const [currentImages, setCurrentImages] = useState<Image[]>(images1);

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={styles.header}>Gallery</h1>
        <a className={styles.selector} onClick={() => setCurrentImages(images1)}>1</a>
        <a className={styles.selector} onClick={() => setCurrentImages(images2)}>2</a>
        <a className={styles.selector} onClick={() => setCurrentImages(images3)}>3</a>
      </div>
      <ImageSlider images={currentImages} />
    </div>
  );
}
