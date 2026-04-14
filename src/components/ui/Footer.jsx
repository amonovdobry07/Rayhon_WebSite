import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTelegram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Hookni import qildik
import '../../assets/styles/Footer.css'; 

const Footer = () => {
  const { t } = useTranslation(); // t funksiyasini chaqirdik

  return (
    <footer className="custom-footer">
      <div className="footer-top">
        
        {/* Chap qism: Brend va ta'rif */}
        <div className="footer-brand">
          <h2 className="brand-name">Mo'minova Rayhon</h2>
          <p className="brand-description">
            {t("footer_desc")}
          </p>
        </div>
        
        {/* O'rta qism: Havolalar (Linklar) */}
        <div className="footer-links-container">
          <ul className="footer-links-column">
            <li><Link to="/">{t("home")}</Link></li>
            <li><Link to="/about">{t("about")}</Link></li>
            <li><Link to="/contact">{t("contact")}</Link></li>
          </ul>
        </div>

        {/* O'ng qism: Ijtimoiy tarmoqlar */}
        <div className="footer-socials">
          <a href="https://www.instagram.com/rayxon_home_textile/" target="_blank" rel="noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://t.me/krovn2007" target="_blank" rel="noreferrer" className="social-icon">
            <FaTelegram />
          </a>
        </div>

      </div>

      {/* Pastki qism: Kopirayt va chiziq */}
      <div className="footer-bottom">
        <p className="copyright-text">{t("footer_copy")}</p>
        <p className="made-with-text">
          {t("designed_by")} <a href="#">KHALIMOV</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;