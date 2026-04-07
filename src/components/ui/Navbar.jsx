import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Tarjima kutubxonasi
import "../../assets/styles/Navbar.css";

import home_logo from "../../assets/images/homePageImages/home_page_logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); // Til menyusi uchun
  
  const { t, i18n } = useTranslation();

  // Tillarni o'zgartirish funksiyasi
  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLangOpen(false); // Til tanlangach, menyuni yopish
  };

  const closeMenu = () => setIsOpen(false);

  // Tillarni massiv qilib olamiz, map orqali chiqarish oson bo'lishi uchun
  const languages = [
    { code: "uz", label: "UZ" },
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "tr", label: "TR" },
    { code: "fr", label: "FR" },
  ];

  // Custom til o'zgartirgich komponenti (Takrorlanmasligi uchun alohida o'zgaruvchiga oldik)
  const LanguageSwitcher = () => (
    <div className="custom-lang-dropdown">
      <div 
        className="selected-lang" 
        onClick={() => setIsLangOpen(!isLangOpen)}
      >
        {i18n.language?.toUpperCase() || "UZ"} 
        <span className={`chevron ${isLangOpen ? "rotate" : ""}`}>&#9662;</span>
      </div>
      
      <ul className={`lang-options ${isLangOpen ? "open" : ""}`}>
        {languages.map((lang) => (
          <li 
            key={lang.code} 
            onClick={() => changeLanguage(lang.code)}
            className={i18n.language === lang.code ? "active" : ""}
          >
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="main-nav">
      
      {/* ==========================================
          1. DESKTOP UCHUN QUTI
          ========================================== */}
      <div className="desktop-navbar">
        <div className="logo-box">
          <Link to="/" className="logo">
            <img src={home_logo} alt="" />
          </Link>
        </div>

        <div className="nav-links">
          <ul>
            <li><NavLink to="/">{t("home")}</NavLink></li>
            <li><NavLink to="/products">{t("products")}</NavLink></li>
            <li><NavLink to="/market-place">{t("marketplace")}</NavLink></li>
            <li><NavLink to="/about">{t("about")}</NavLink></li>
            <li><NavLink to="/contact">{t("contact")}</NavLink></li>
          </ul>
        </div>

        <div className="change_lang">
          <LanguageSwitcher />
        </div>
      </div>

      {/* ==========================================
          2. MOBILE UCHUN QUTI
          ========================================== */}
      <div className="mobile-navbar">
        <div className="mobile-header">
          <Link to="/" className="logo">
            <img src={home_logo} alt="" />
          </Link>
          
          <div className="mobile-right">
            <div className="change_lang">
              <LanguageSwitcher />
            </div>
            
            <div className="hamburger" onClick={() => setIsOpen(true)}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>

        <div className={`mobile-overlay ${isOpen ? "open" : ""}`}>
          <div className="close-btn" onClick={closeMenu}>&#10005;</div>

          <ul className="mobile-links">
            <li><NavLink to="/" onClick={closeMenu}>{t("home")}</NavLink></li>
            <li><NavLink to="/products" onClick={closeMenu}>{t("products")}</NavLink></li>
            <li><NavLink to="/market-place" onClick={closeMenu}>{t("marketplace")}</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>{t("about")}</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>{t("contact")}</NavLink></li>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;