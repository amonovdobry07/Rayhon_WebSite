import Header from '../components/layout/Header'
import './App.css'

import Home from '../pages/Home'
import Products from '../pages/Products'
import MarketPlace from '../pages/MarketPlace'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MarketDetails from '../pages/MarketDetail'

import Footer from '../components/ui/Footer'
import { useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'

import translationUz from '../locales/translationUz'
import translationRu from '../locales/translationRu'
import translationEn from '../locales/translationEn'
import translationTr from '../locales/translationTr'
import translationFr from '../locales/translationFr'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUz },
    ru: { translation: translationRu },
    en: { translation: translationEn },
    tr: { translation: translationTr},
    fr: { translation: translationFr},  
  },
  lng: "uz", // Boshlang'ich til
  fallbackLng: "uz", // Agar til topilmasa qaytadigan til
  interpolation: {
    escapeValue: false // React xavfsizlik uchun o'zi buni hal qiladi
  }
});

import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS stillari

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 100,    
    });
  }, []);

  return (
    // Asosiy quti (Wrapper)
    <div className='App'>
        <Header /> 

        {/* Asosiy ma'lumotlar o'zgaradigan qism */}
        <main className="main-content">
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/market-place" element={<MarketPlace />} />
                <Route path="/market-place/:marketName" element={<MarketDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer /> 
    </div>
  )
}

export default App