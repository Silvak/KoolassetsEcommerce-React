import { Box } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import CategorySliderItem from "@/components/CategorySlider/CategorySliderItem";

const CATEGORIES = [
  "Computación",
  "Telefonía",
  "Prendas",
  "Herramientas",
  "Herramientas",
  "Herramientas",
  "Herramientas",
  "Herramientas",
  "Herramientas",
];

const CategorySlider = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="title">Caterías más visitadas</h2>
        <Box>
          <button onClick={() => {}} className="custom-prev-button">
            &lt;
          </button>
          <button onClick={() => {}} className="custom-next-button">
            &gt;
          </button>
        </Box>
      </Box>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        className="swiper"
      >
        {CATEGORIES.map((categoria, index) => (
          <SwiperSlide key={index}>
            <CategorySliderItem categoria={categoria} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default CategorySlider;
