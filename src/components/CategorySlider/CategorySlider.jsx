import { Box, useMediaQuery } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import  styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import CategorySliderItem from "@/components/CategorySlider/CategorySliderItem";
import { categoriesVisited } from "../../mock/categoriesVisited";
import Title from "@/components/Title/Title";
//icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const CategorySlider = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box sx={{ mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: isMobile ? "10px" : "0",
        }}
      >
        <Title text="Categorías más visitadas" />
        {/* btns */}
        <Box
          sx={{
            display: "flex",
            mt:7
          }}
        >
          <button
            onClick={() => {}}
            className="category-slider_custom-prev-button"
          >
            <BsArrowLeft />
          </button>
          <button
            onClick={() => {}}
            className="category-slider_custom-next-button"
          >
            <BsArrowRight />
          </button>
        </Box>
      </Box>
      {/* swiper */}
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
          prevEl: ".category-slider_custom-prev-button",
          nextEl: ".category-slider_custom-next-button",
        }}
        className="category-slider_swiper"
      >
        {categoriesVisited.map((cat, index) => (
          <SwiperSlide key={index}>
            <CategorySliderItem {...cat} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default CategorySlider;
