import HeroItem from "@/components/Hero/HeroItem";

import { v4 as uuidv4 } from "uuid";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Pagination } from "swiper/modules";

import product from "@/assets/Img/png/heroImage.png";

const heroData = [
  { id: uuidv4(), url: product },
  { id: uuidv4(), url: product },
  { id: uuidv4(), url: product },
];

const Hero = ({ withSlider = true }) => {
  if (withSlider) {
    return (
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={10}
        className="swiper"
      >
        {heroData.map(({ id, url }) => (
          <SwiperSlide className="slide" key={id}>
            <HeroItem url={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  } else {
    return <HeroItem url={heroData[0].url} />;
  }
};
export default Hero;
