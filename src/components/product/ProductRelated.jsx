import React, { useState } from 'react';

const relatedProducts = [
  { id: 1, name: 'Samurai Code', price: '499', img: '/images/sc_samurai.png', gallery: ['/images/sc_samurai.png', '/images/samurai.jpg', '/images/men.png'] },
  { id: 2, name: 'Koi Flow', price: '499', img: '/images/cat_spiritual.png', gallery: ['/images/cat_spiritual.png', '/images/flora.png', '/images/animal.png'] },
  { id: 3, name: 'Oni Wrath', price: '499', img: '/images/sc_oni.png', gallery: ['/images/sc_oni.png', '/images/goth.png', '/images/anime-chaos.png'] },
  { id: 4, name: 'Sakura Storm', price: '499', img: '/images/cat_minimalist.png', gallery: ['/images/cat_minimalist.png', '/images/women.png', '/images/y2k.png'] },
  { id: 5, name: 'Cyber Dragon', price: '499', img: '/images/sc_dragon.png', gallery: ['/images/sc_dragon.png', '/images/dragon.jpg', '/images/anime.png'] }
];

const RelatedCard = ({ product }) => {
  const [activeImg, setActiveImg] = useState(product.img);
  return (
    <div className="sc-product-card-wrapper" style={{ width: '100%', minWidth: '220px' }}>
      <div className="sc-product-card">
        <div className="sc-product-icons">
          <button className="sc-icon-btn sc-eye-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
          <button className="sc-icon-btn sc-heart-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <img src={activeImg} alt={product.name} className="sc-product-image" />
        
        <div className="sg-gallery-stack">
          {product.gallery.map((gImg, idx) => (
            <div 
              key={idx} 
              className={`sg-gallery-thumb ${activeImg === gImg ? 'active' : ''}`}
              style={{ backgroundImage: `url(${gImg})`, backgroundSize: 'cover', backgroundPosition: 'center', cursor: 'pointer' }}
              onMouseEnter={() => setActiveImg(gImg)}
              onClick={() => setActiveImg(gImg)}
            ></div>
          ))}
          <div className="sg-gallery-more">+3</div>
        </div>

        <div className="sc-add-to-cart-wrapper">
          <button className="sc-btn-add-cart">Add To Cart</button>
        </div>
      </div>
      <div className="sc-product-info" style={{ textAlign: 'left' }}>
        <h3 className="sc-product-title">{product.name}</h3>
        <div className="sc-product-price">
          <span className="sc-current-price">₹{product.price}</span>
        </div>
      </div>
    </div>
  );
};

const ProductRelated = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px' }}>
      {relatedProducts.map(p => (
        <RelatedCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductRelated;
