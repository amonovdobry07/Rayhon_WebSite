import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Tarjima uchun hook
import '../assets/styles/Contact.css';

const Contact = () => {
  const { t } = useTranslation(); // t funksiyasini chaqiramiz
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Telefon raqami uchun 13 ta belgi limiti (+998901234567 formatida)
    if (name === 'phone' && value.length > 13) return; 
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetEmail = "raykhon.textile@gmail.com"; 
    // Email mavzusi va tanasini ham tarjimaga moslaymiz
    const subject = encodeURIComponent(t("contact_email_subject") + formData.firstName);
    
    const body = encodeURIComponent(
      `${t("contact_form_name")}: ${formData.firstName} ${formData.lastName}\n` +
      `${t("contact_form_phone")}: ${formData.phone}\n` +
      `${t("contact_form_email")}: ${formData.email}\n\n` +
      `${t("contact_form_message_body")}:\n${formData.message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-container">
        
        {/* Chap qism: Ma'lumotlar */}
        <div className="contact-info" data-aos="fade-right">
          <h2 className="contact-title">{t("contact_visit_us")}</h2>
          
          <div className="info-block">
            <h3>{t("contact_main_address")}</h3>
            <p>{t("contact_address_text")}</p>
          </div>

          <div className="info-block">
            <h3>{t("contact_work_hours")}</h3>
            <p>{t("contact_hours_weekdays")}</p>
            <p>{t("contact_hours_sunday")}</p>
          </div>

          <div className="info-block">
            <h3>{t("contact_get_in_touch")}</h3>
            <p>{t("contact_phone")}</p>
            <p>{t("contact_email_address")}</p>
          </div>
        </div>

        {/* O'ng qism: Forma */}
        <div className="contact-form-box" data-aos="fade-left">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="input-group">
                <label>{t("contact_label_fname")}</label>
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder={t("contact_placeholder_fname")} 
                  required 
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>{t("contact_label_lname")}</label>
                <input 
                  type="text" 
                  name="lastName" 
                  placeholder={t("contact_placeholder_lname")} 
                  required 
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-group">
              <label>{t("contact_label_phone")}</label>
              <input 
                type="text" 
                name="phone" 
                placeholder="+998901234567" 
                required 
                value={formData.phone}
                onChange={handleChange}
              />
              <small className="limit-hint">{formData.phone.length}/13</small>
            </div>

            <div className="input-group">
              <label>{t("contact_label_email")}</label>
              <input 
                type="email" 
                name="email" 
                placeholder="misol@mail.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>{t("contact_label_message")}</label>
              <textarea 
                name="message" 
                placeholder={t("contact_placeholder_message")} 
                rows="5" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">{t("contact_submit_btn")}</button>
          </form>
        </div>
      </div>

      {/* Xarita qismi */}
      <div className="map-container" data-aos="zoom-in">
        <iframe 
          src="https://maps.google.com/maps?q=Buxoro%20viloyati,%20Kogon%20tumani,%20B.Naqshband%20MFY,%20Kirakashxona%20ko'chasi%20107-uy&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="450" 
          style={{ border: 0, borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title={t("contact_main_address")}
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;