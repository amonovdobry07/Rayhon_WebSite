// Magazin logotiplari
import ozon_img from "../assets/images/MarketPlace/ozon.png"
import yandex_img from "../assets/images/MarketPlace/yandexmarket.png"
import wb_img from "../assets/images/MarketPlace/wb.png"

// Maxsulot rasmlari
import wb_product_1 from "../assets/images/MarketPlace/wb_product_1.jpg"
import wb_product_2 from "../assets/images/MarketPlace/wb_product_2.jpg"
import wb_product_3 from "../assets/images/MarketPlace/wb_product_3.jpg"
import wb_product_4 from "../assets/images/MarketPlace/wb_product_4.jpg"
import wb_product_5 from "../assets/images/MarketPlace/wb_product_5.jpg"
import wb_product_6 from "../assets/images/MarketPlace/wb_product_6.jpeg"

export const MarketsList= [
  { id: 'ozon', name: 'Ozon', logo: ozon_img, bgColor: '#e3ecff' },
  { id: 'wildberries', name: 'Wildberries', logo: wb_img, bgColor: '#fcebf6' },
  { id: 'yandex', name: 'Yandex Market', logo: yandex_img, bgColor: '#fff4cc' }
];

export const MarketProducts = [
  // ==================== OZON MAXSULOTLARI ====================
  { id: 1, market: "ozon", titleKey: "market_prod_xb", price: "2500 rubl", image: wb_product_1, externalLink: "https://uz.ozon.com/product/komplekt-postelnogo-belya-byaz-dvuspalnyy-navolochki-50x50-3867168494/?oos_search=false" },
  { id: 2, market: "ozon", titleKey: "market_prod_satin", price: "3200 rubl", image: wb_product_2, externalLink: "https://uz.ozon.com/product/komplekt-postelnogo-belya-byaz-dvuspalnyy-navolochki-50x50-3867150787/?oos_search=false" },
  { id: 3, market: "ozon", titleKey: "market_prod_havi_pillow", price: "1200 rubl", image: wb_product_3, externalLink: "https://uz.ozon.com/product/komplekt-postelnogo-belya-byaz-dvuspalnyy-navolochki-50x50-3867166528/?__rr=1&abt_att=1&oos_search=false" },
  { id: 4, market: "ozon", titleKey: "market_prod_bamboo", price: "2800 rubl", image: wb_product_4, externalLink: "https://uz.ozon.com/product/komplekt-postelnogo-belya-byaz-dvuspalnyy-navolochki-50x50-3867152711/?oos_search=false" },
  { id: 5, market: "ozon", titleKey: "market_prod_stripe", price: "3500 rubl", image: wb_product_5, externalLink: "https://uz.ozon.com/product/komplekt-postelnogo-belya-byaz-dvuspalnyy-navolochki-50x50-3867155878/?oos_search=false" },
  { id: 6, market: "ozon", titleKey: "market_prod_classic_blanket", price: "4000 rubl", image: wb_product_6, externalLink: "https://uz.ozon.com/product/komplekt-postelnogo-belya-byaz-dvuspalnyy-navolochki-50x50-3867152647/?oos_search=false" },

  // ==================== WILDBERRIES MAXSULOTLARI ====================
  { id: 7, market: "wildberries", titleKey: "market_prod_xb", price: "2450 rubl", image: wb_product_1, externalLink: "https://www.wildberries.ru/catalog/930449777/detail.aspx?targetUrl=GP" },
  { id: 8, market: "wildberries", titleKey: "market_prod_satin", price: "3100 rubl", image: wb_product_2, externalLink: "https://www.wildberries.ru/catalog/930449772/detail.aspx?targetUrl=GP" },
  { id: 9, market: "wildberries", titleKey: "market_prod_havi_pillow", price: "1150 rubl", image: wb_product_3, externalLink: "https://www.wildberries.ru/catalog/930449775/detail.aspx?targetUrl=GP" },
  { id: 10, market: "wildberries", titleKey: "market_prod_bamboo", price: "2750 rubl", image: wb_product_4, externalLink: "https://www.wildberries.ru/catalog/930449774/detail.aspx?targetUrl=GP" },
  { id: 11, market: "wildberries", titleKey: "market_prod_stripe", price: "3400 rubl", image: wb_product_5, externalLink: "https://www.wildberries.ru/catalog/930449776/detail.aspx?targetUrl=GP" },
  { id: 12, market: "wildberries", titleKey: "market_prod_classic_blanket", price: "3900 rubl", image: wb_product_6, externalLink: "https://www.wildberries.ru/catalog/930449773/detail.aspx?targetUrl=GP" },

  // ==================== YANDEX MARKET MAXSULOTLARI ====================
  { id: 13, market: "yandex", titleKey: "market_prod_xb", price: "2600 rubl", image: wb_product_1, externalLink: "https://market.yandex.uz/card/stilnyy-komplekt-postelnogo-belya-s-yarkim-printom-i-myagkoy-teksturoy/5542712603?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12" },
  { id: 14, market: "yandex", titleKey: "market_prod_satin", price: "3300 rubl", image: wb_product_2, externalLink: "https://market.yandex.uz/card/stilnyy-komplekt-postelnogo-belya-s-yarkim-printom-i-myagkoy-teksturoy/5542721288?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12" },
  { id: 15, market: "yandex", titleKey: "market_prod_havi_pillow", price: "1250 rubl", image: wb_product_3, externalLink: "https://market.yandex.uz/card/stilnyy-komplekt-postelnogo-belya-s-yarkim-printom-i-myagkoy-teksturoy/5542697764?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12"},
  { id: 18, market: "yandex", titleKey: "market_prod_classic_blanket", price: "4100 rubl", image: wb_product_6, externalLink: "https://market.yandex.uz/card/stilnyy-komplekt-postelnogo-belya-s-yarkim-printom-i-myagkoy-teksturoy/5542718763?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-12"}
];