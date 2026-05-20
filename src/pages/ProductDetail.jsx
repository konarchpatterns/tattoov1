import React, { useEffect } from 'react';
import '../product.css';
import ProductHero from '../components/product/ProductHero';
import ProductTryItOn from '../components/product/ProductTryItOn';
import ProductStory from '../components/product/ProductStory';
import ProductBigFeatures from '../components/product/ProductBigFeatures';
import ProductHowTo from '../components/product/ProductHowTo';
import ProductRealVibes from '../components/product/ProductRealVibes';
import ProductRelated from '../components/product/ProductRelated';

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="product-detail-page">
      <div className="pd-container">
        <div className="pd-breadcrumbs">
          HOME &gt; COLLECTIONS &gt; DRAGON REBIRTH
        </div>

        <ProductHero />
        
        <div className="pd-features-strip-top">
          <div className="pd-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            WATERPROOF<br/>3-7 DAYS
          </div>
          <div className="pd-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            SKIN SAFE<br/>& NON-TOXIC
          </div>
          <div className="pd-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            EASY TO APPLY<br/>& REMOVE
          </div>
          <div className="pd-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
            PREMIUM<br/>QUALITY INK
          </div>
        </div>

        <div className="pd-split-section" style={{ height: 'auto', alignItems: 'stretch' }}>
          <ProductTryItOn />
          <ProductStory />
        </div>

        <ProductHowTo />

        <h2 className="pd-section-title">REAL PEOPLE. REAL VIBES.</h2>
        <ProductRealVibes />

        <h2 className="pd-section-title">YOU MAY ALSO LIKE</h2>
        <ProductRelated />
      </div>
    </main>
  );
};

export default ProductDetail;
