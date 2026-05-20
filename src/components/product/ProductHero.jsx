import React, { useState } from 'react';

const ProductHero = () => {
  const [size, setSize] = useState('S');
  const [placement, setPlacement] = useState('ARM');
  const [qty, setQty] = useState(1);

  const placements = [
    { id: 'ARM', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> },
    { id: 'NECK', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg> },
    { id: 'CHEST', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
    { id: 'BACK', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> }
  ];

  const [activeImg, setActiveImg] = useState('/images/dragon.jpg');
  
  const gallery = [
    '/images/dragon.jpg',
    '/images/sc_dragon.png',
    '/images/men.png',
    '/images/travel.jpg',
    '/images/samurai.jpg'
  ];

  return (
    <div className="pd-hero">
      <div className="pd-hero-left">
        <div className="pd-gallery-container">
          <div className="pd-gallery-thumbs">
            {gallery.map((img, idx) => (
              <div 
                key={idx}
                className={`pd-thumb ${activeImg === img ? 'active' : ''}`}
                onClick={() => setActiveImg(img)}
              >
                <img src={img} alt={`Thumb ${idx}`} />
              </div>
            ))}
          </div>
          <div className="pd-thumb-chevron">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </div>
        <div className="pd-main-img-container">
          <img src={activeImg} alt="Dragon Rebirth" className="pd-main-img" />
          <div className="pd-jap-overlay">
            東京の魂
          </div>
        </div>
      </div>
      
      <div className="pd-hero-right">
        <span className="pd-badge">BEST SELLER</span>
        <h1 className="pd-title">DRAGON REBIRTH</h1>
        <div className="pd-subtitle">JAPANESE TEMPORARY TATTOO</div>
        
        <div className="pd-rating">
          <span className="text-red">★★★★★</span>
          <span className="text-gray">(1,354 REVIEWS)</span>
        </div>
        
        <div className="pd-price-row">
          <span className="pd-current-price">₹499</span>
          <span className="pd-old-price">₹799</span>
          <span className="pd-discount">SAVE 37%</span>
        </div>
        
        <div className="pd-options-group">
          <div className="pd-options-header">
            <span>SIZE</span>
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>SIZE GUIDE</span>
          </div>
          <div className="pd-size-btns">
            {['S', 'M', 'L'].map(s => (
              <button 
                key={s}
                className={`pd-size-btn ${size === s ? 'active' : ''}`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        
        <div className="pd-options-group">
          <div className="pd-options-header">
            <span>PLACEMENT</span>
          </div>
          <div className="pd-placement-btns">
            {placements.map(p => (
              <button 
                key={p.id}
                className={`pd-place-btn ${placement === p.id ? 'active' : ''}`}
                onClick={() => setPlacement(p.id)}
              >
                {p.icon}
                <span>{p.id}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="pd-quantity-row">
          <span style={{ fontSize: '10px', fontWeight: 'bold' }}>QUANTITY</span>
          <div className="pd-qty-selector">
            <button className="pd-qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
            <span className="pd-qty-val">{qty}</span>
            <button className="pd-qty-btn" onClick={() => setQty(qty + 1)}>+</button>
          </div>
        </div>
        
        <div className="pd-action-btns">
          <button className="pd-add-to-cart" style={{ backgroundColor: '#cc0000' }}>
            ADD TO CART
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </button>
          <button className="pd-buy-now">BUY NOW</button>
        </div>

      </div>
    </div>
  );
};

export default ProductHero;
