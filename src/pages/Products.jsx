import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // i18n ni import qilamiz
import ProductsSection from '../data/Products'; 
import '../assets/styles/Product.css'; 

const Products = () => {
  const { t } = useTranslation(); // Tarjima funksiyasini chaqiramiz
  const [activeCategory, setActiveCategory] = useState('all');

  // Katalog tugmalari ro'yxati (nomlari tarjima qilinadi)
  const categories = [
    { id: 'all', name: t('cat_all') },
    { id: 'bambuk', name: t('cat_bambuk') },
    { id: 'super_satin', name: t('cat_super_satin') },
    { id: 'xb', name: t('cat_xb') },
    { id: 'stripe', name: t('cat_stripe') },
    { id: 'havi', name: t('cat_havi') },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? ProductsSection 
    : ProductsSection.filter(product => product.category === activeCategory);

  // Narxni tarjimaga moslab chiqarish
  const formatPrice = (price) => {
    return price ? `${price.toLocaleString('ru-RU')} ${t('currency')}` : t('not_available');
  };

  return (
    <div className="products-page">
      <div className="products-header">
        {/* Sarlavhalar tarjimadan keladi */}
        <h1 className="page-title" data-aos="fade-down">{t('products_catalog_title')}</h1>
        <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">{t('products_catalog_subtitle')}</p>
      </div>

      <div className="category-filter" data-aos="fade-up" data-aos-delay="200">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card" data-aos="fade-up">
            <div className="product-image-wrapper">
              <img src={product.image} alt={t(product.titleKey)} />
            </div>
            
            <div className="product-info">
              {/* Maxsulot nomi JS fayldagi titleKey orqali topiladi */}
              <h3 className="product-title">{t(product.titleKey)}</h3>
              
              <div className="product-prices">
                <div className="price-item">
                  <span className="price-label">{t('single_bed')}</span>
                  <span className="price-value">{formatPrice(product.price.single)}</span>
                </div>
                <div className="price-item">
                  <span className="price-label">{t('double_bed')}</span>
                  <span className="price-value double-price">{formatPrice(product.price.double)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>{t('no_products_in_category')}</p>
        </div>
      )}
    </div>
  );
};

export default Products;