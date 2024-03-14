import { Box, useMediaQuery } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import  styles
import "swiper/css";
import "swiper/css/pagination";
import "./cartStyles.css";

import { productsData } from "../../mock/productData";

//icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SliderProduct from "./SliderProduct";

function CartSlider() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const productsToSuggest = productsData.slice(0, 10);
  return (
    <Box sx={{ my: 10, maxWidth: "1300px"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: isMobile ? "10px" : "0",
          mb: 4,
        }}
      >
        <h5 className="category-slider_title">También podrían gustarte</h5>
        {/* btns */}
        <Box
          sx={{
            display: "flex",
          }}
        >
          <button
            onClick={() => {}}
            className="category-slider_custom-prev-button"
          >
            <BsArrowLeft onClick={() => {}}
            className="category-slider_custom-prev-button"/>
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
        slidesPerView={4}
        spaceBetween={50}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          412: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2,
          },
          875: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
            // spaceBetween: 10
          },
          1240: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
        navigation={{
          prevEl: ".category-slider_custom-prev-button",
          nextEl: ".category-slider_custom-next-button",
        }}
        className="category-slider_swiper"
      >
        {productsToSuggest.map((product, index) => (
          <SwiperSlide key={index}>
            <SliderProduct product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default CartSlider;
