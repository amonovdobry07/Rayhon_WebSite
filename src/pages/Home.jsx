import React from "react";
import "../assets/styles/Home.css";
import { Link } from "react-router-dom"; 
import { useTranslation } from "react-i18next"; // Tarjima hookini qo'shdik

// Gird rasmlari
import home_page_1 from "../assets/images/homePageImages/home_page_1.jpg";
import home_page_2 from "../assets/images/homePageImages/home_page_2.jpg";
import home_page_3 from "../assets/images/homePageImages/home_page_3.jpg";

// Maxsulot rasmlari
import product_photo_1 from "../assets/images/ProductImages/product_photo_1.jpg"
import product_photo_2 from "../assets/images/ProductImages/product_photo_2.jpg"
import product_photo_3 from "../assets/images/ProductImages/product_photo_3.jpg"
import product_photo_4 from "../assets/images/ProductImages/product_photo_4.jpg"
import product_photo_5 from "../assets/images/ProductImages/product_photo_5.jpg"
import product_photo_6 from "../assets/images/ProductImages/product_photo_6.jpg"

// =========================================================
// 1. SWIPER IMPORTLARI
// =========================================================
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules';
// =========================================================

const Home = () => {
  const { t } = useTranslation(); // t funksiyasini faollashtirdik

  return (
    <div className="portfolio-container">
      
      {/* Intro Section */}
      <header className="intro-section" data-aos="fade-down">
        <h1 className="intro-text">
          {t("intro_text")}
        </h1>
      </header>

      {/* Hero Image Grid Section */}
      <section className="image-grid">
        <div className="grid-item tall" data-aos="fade-right">
          <img src={home_page_1} alt="Landscape" />
        </div>
        <div className="grid-item" data-aos="fade-left" data-aos-delay="200">
          <img src={home_page_2} alt="Portrait" />
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section className="about-section">
        <div className="about-image" data-aos="zoom-in-up">
          <img src={home_page_3} alt="Photographer with camera" />
        </div>

        <div className="about-content" data-aos="fade-up" data-aos-delay="200">
          <div className="text-wrapper">
            <p>{t("about_p1")}</p>
            <p>
              {t("about_p2_part1")}{" "}
              <strong>"{t("style_tag")}"</strong>{" "}
              {t("about_p2_part2")}
            </p>
          </div>
          <Link to="/contact">
            <button className="book-now-btn">{t("order_btn")}</button>
          </Link>
        </div>
      </section>

      {/* Second Section - Maxsulotlar karuseli */}
      <section className="products-section">
        <h1 className="section-title" data-aos="fade-up">{t("products_title")}</h1>

        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            slidesPerView={3} 
            spaceBetween={30} 
            freeMode={true}   
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
            modules={[FreeMode]} 
            className="productSwiper"
          >
            <SwiperSlide className="product-slide">
              <Link to="/products"><img src={product_photo_1} alt="Maxsulot 1" /></Link>
            </SwiperSlide>
            <SwiperSlide className="product-slide">
              <Link to="/products"><img src={product_photo_2} alt="Maxsulot 2" /></Link>
            </SwiperSlide>
            <SwiperSlide className="product-slide">
              <Link to="/products"><img src={product_photo_3} alt="Maxsulot 3" /></Link>
            </SwiperSlide>
            <SwiperSlide className="product-slide">
              <Link to="/products"><img src={product_photo_4} alt="Maxsulot 4" /></Link>
            </SwiperSlide>
            <SwiperSlide className="product-slide">
              <Link to="/products"><img src={product_photo_5} alt="Maxsulot 5" /></Link>
            </SwiperSlide>
            <SwiperSlide className="product-slide">
              <Link to="/products"><img src={product_photo_6} alt="Maxsulot 6" /></Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Home;