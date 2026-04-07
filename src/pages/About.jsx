import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // i18n import qilingan
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/About.css';

import video from "../assets/video/Belyo.mp4"

const About = () => {
  const { t } = useTranslation(); // Tarjima funksiyasini chaqirish

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic', 
    });
  }, []);

  // Xizmatlar ro'yxati (endi o'zbekcha so'zlar emas, tarjima kalitlari turadi)
  const services = [
    "service_1",
    "service_2",
    "service_3",
    "service_4",
    "service_5",
    "service_6",
  ];

  return (
    <div className="about-rayxon-container">
      {/* 2. HERO ABOUT SECTION */}
      <section className="about-hero" >
        <div className="text-side" data-aos="fade-right" data-aos-delay="200">
          <h2 className="header-label">{t('about_us_label')}</h2>
          <h1 className="main-title">{t('about_us_title')}</h1>
          
          <div className="about-content">
            <p className="brand-desc">
              {t('about_us_desc1')}
            </p>
            
            <p className="about-details">
              {t('about_us_desc2')}
            </p>
          </div>
          
          <button className="book-now-btn">{t('contact_us_btn')}</button>
        </div>
        
        <div className="video-side" data-aos="fade-left" data-aos-delay="400">
          <div className="video-container">
            {/* video avtomat aylanib turishi uchun loop qo'shildi */}
            <video src={video} className="about-video" controls muted autoPlay loop></video>
          </div>
        </div>
      </section>

      {/* 3. SERVICE TICKER SECTION */}
      <section className="service-ticker" data-aos="fade-up" data-aos-delay="600">
        <div className="ticker-content">
          {services.map((serviceKey, index) => (
            <span key={index} className="ticker-item">
              {/* Har bir kalit so'zni tarjima qilib chiqaradi */}
              {t(serviceKey)}
              {index < services.length - 1 && <span className="ticker-dot">&bull;</span>}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;