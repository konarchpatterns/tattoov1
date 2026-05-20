import React from 'react';

const ProductRealVibes = () => {
  const images = [
    '/images/men.png',
    '/images/travel.jpg',
    '/images/women.png',
    '/images/dragon.jpg'
  ];

  return (
    <div className="pd-real-vibes-horizontal">
      <div className="pd-vibes-left">
        <h2 className="pd-section-title" style={{ fontSize: '18px', marginBottom: '5px' }}>REAL PEOPLE.<br/>REAL VIBES.</h2>
        <div style={{ color: '#970C0F', fontSize: '10px', fontWeight: 'bold', marginBottom: '20px' }}>#TOKIYOVIBE</div>
        <button className="pd-vibe-btn">VIEW GALLERY</button>
      </div>
      
      <div className="pd-vibes-right">
        {images.map((img, idx) => (
          <div key={idx} className="pd-vibe-item">
            <img src={img} alt={`Vibe ${idx}`} />
          </div>
        ))}
        <div className="pd-vibe-cta-box">
          <h3>JOIN SOK+<br/>REBELS</h3>
          <p>TAG US TO GET<br/>FEATURED</p>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default ProductRealVibes;
