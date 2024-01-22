import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./swiper.module.scss";
import 'swiper/css';


interface ImageSliderProps {
  images: { url: string }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={50}
      slidesPerView={1}
      direction="horizontal"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <img
            src={image.url}
            alt={`Image ${index}`}
            className={styles.slide}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
