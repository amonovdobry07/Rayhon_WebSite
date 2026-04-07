import React, { useState } from 'react';
import '../assets/styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Telefon raqami uchun 12 ta belgi limiti
    if (name === 'phone' && value.length > 12) return;
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetEmail = "rayxon.tailor@example.com"; // Xat boradigan email
    const subject = encodeURIComponent("Yangi bog'lanish xabari: " + formData.firstName);
    
    // Email tanasi (body) formatlash
    const body = encodeURIComponent(
      `Ism: ${formData.firstName} ${formData.lastName}\n` +
      `Telefon: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `Xabar:\n${formData.message}`
    );

    // Gmail havolasini ochish
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-container">
        
        {/* Chap qism: Ma'lumotlar */}
        <div className="contact-info" data-aos="fade-right">
          <h2 className="contact-title">Do'konlarimizga tashrif buyuring</h2>
          
          <div className="info-block">
            <h3>Asosiy do'kon</h3>
            <p>217 Tueri Junction, New York, NY 10002</p>
          </div>

          <div className="info-block">
            <h3>2-manzil</h3>
            <p>234 Park Avenue, Apt 5C New York, NY 10029</p>
          </div>

          <div className="info-block">
            <h3>3-manzil</h3>
            <p>350 5th Avenue New York, NY 10118</p>
          </div>

          <div className="info-block">
            <h3>Ish vaqti</h3>
            <p>Dush-Juma: 10:00 - 19:00</p>
          </div>
        </div>

        {/* O'ng qism: Forma */}
        <div className="contact-form-box" data-aos="fade-left">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="input-group">
                <label>Ism *</label>
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="Ismingiz" 
                  required 
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Familiya *</label>
                <input 
                  type="text" 
                  name="lastName" 
                  placeholder="Familiyangiz" 
                  required 
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Telefon *</label>
              <input 
                type="text" 
                name="phone" 
                placeholder="+998901234567" 
                required 
                value={formData.phone}
                onChange={handleChange}
              />
              <small className="limit-hint">{formData.phone.length}/12</small>
            </div>

            <div className="input-group">
              <label>Email *</label>
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
              <label>Xabar *</label>
              <textarea 
                name="message" 
                placeholder="Xabaringizni yozing..." 
                rows="5" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Yuborish</button>
          </form>
        </div>
      </div>

      {/* Xarita qismi (Google Maps Iframe) */}
      <div className="map-container" data-aos="zoom-in">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.422198947612!2d-73.985428!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1647862214321!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          title="Do'kon manzili"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;