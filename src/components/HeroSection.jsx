import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./HeroSection.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const heroSectionDetailsArr = [
  {
    img: "./src/assets/hero_section/0.jpg",
    carouselID: 1,
    headingS1: "Built Strong",
    headingS2: "to Last Generations",
    paragraph:
      "Premium 6-inch and 9-inch concrete blocks engineered for maximum durability across Nigeria.",
    btn1: "Request a Quote",
    btn2: "Explore Products",
  },
  {
    img: "./src/assets/hero_section/6.jpg",
    carouselID: 1,
    headingS1: "Laying Groundwork ",
    headingS2: "for Brighter Futures",
    paragraph:
      "Our sustainably produced concrete blocks offer unmatched insulation, structural safety, and lasting aesthetic appeal for your home.",
    btn1: "Request a Quote",
    btn2: "Explore Products",
  },
];

const HeroSection = () => {
  return (
    <Swiper
      className="hero-swiper"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      speed={1000}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        stopOnLastSlide: true,
        pauseOnMouseEnter: true,
      }}
    >
      {heroSectionDetailsArr.map((detail) => {
        return (
          <SwiperSlide key={detail.carouselID}>
            <img src={detail.img} alt="" />
            <section className="hero-content">
              <h1 className="hero-title text-left">
                <span>{detail.headingS1}</span>
                <span className="hero-title-accent">{detail.headingS2}</span>
              </h1>
              <p className="hero-subtitle">{detail.paragraph}</p>
              <div className="hero-actions">
                <a href="#contact" className="hero-cta primary">
                  {detail.btn1}
                </a>
                <a href="#services" className="hero-cta secondary">
                  {detail.btn2}
                </a>
              </div>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSection;
