import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // i18n import qilingan
import { MarketProducts } from '../data/MarketPlace';

const MarketDetails = () => {
  const { marketName } = useParams();
  const { t } = useTranslation(); // t funksiyasini chaqirish

  const filteredProducts = MarketProducts.filter(
    (product) => product.market === marketName
  );

  return (
    <div style={{ padding: '40px 8%', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      <div style={{ marginBottom: '40px' }}>
        <Link to="/market-place" style={{ color: '#005BFF', textDecoration: 'none', fontWeight: 'bold' }}>
          &larr; {t('back_to_shops')}
        </Link>
        <h2 style={{ textTransform: 'capitalize', marginTop: '15px', fontSize: '2rem', color: '#2c3e50' }}>
          {/* Interpolatsiya yordamida o'zgaruvchini beramiz */}
          {t('products_in_market', { market: marketName })}
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              
              <div style={{ width: '100%', height: '300px', backgroundColor: '#eef0f2' }}>
                <img src={item.image} alt={t(item.titleKey)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div style={{ padding: '20px', textAlign: 'center' }}>
                {/* Maxsulot nomini kalit bo'yicha topadi */}
                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#333' }}>{t(item.titleKey)}</h3>   
                
                <a 
                  href={item.externalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'block', padding: '12px', backgroundColor: '#2c3e50', 
                    color: 'white', textDecoration: 'none', borderRadius: '5px',
                    fontWeight: 'bold', transition: '0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#1a252f'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#2c3e50'}
                >
                  {/* Interpolatsiya: "ozon orqali sotib olish" */}
                  {t('buy_via_market', { market: marketName })}
                </a>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#7f8c8d' }}>
            {t('no_products_in_market')}
          </p>
        )}

      </div>
    </div>
  );
};

export default MarketDetails;