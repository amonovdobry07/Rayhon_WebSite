import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // i18n import qilingan
import {  MarketsList  } from '../data/MarketPlace'; 

const MarketPlace = () => {
  const { t } = useTranslation(); // t funksiyasini chaqirish

  return (
    <div style={{ padding: '60px 10%', textAlign: 'center', minHeight: '80vh' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#2c3e50' }}>
        {t('marketplace_title')}
      </h2>
      <p style={{ color: '#7f8c8d', marginBottom: '50px', fontSize: '1.2rem' }}>
        {t('marketplace_subtitle')}
      </p>

      <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {MarketsList.map((shop) => (
          <Link 
            key={shop.id} 
            to={`/market-place/${shop.id}`} 
            style={{ 
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              alignItems: 'center', width: '250px', height: '180px',
              backgroundColor: shop.bgColor, textDecoration: 'none',
              borderRadius: '20px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img src={shop.logo} alt={shop.name} style={{ width: '120px', objectFit: 'contain' }} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;