import React from 'react';

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: '#ECECEC' }}>
      <section className="hero-new container">
        <div className="hero-banner-new" style={{ backgroundImage: "url('/images/tv_banner.png')" }}>

          <div className="hero-ticket">
            <div className="ticket-header">
              <div className="stripes"></div>
              <div className="red-badge">京の魂</div>
            </div>
            <div className="ticket-subtitle">TOKYO NO TAMASHII</div>

            <h2 className="ticket-title">INK YOUR STORY.<br />WEAR YOUR <span className="text-red">VIBE.</span></h2>

            <p className="ticket-desc">
              PREMIUM TEMPORARY TATTOOS<br />
              INSPIRED BY TOKYO CULTURE,<br />
              ANIME, AND STREET STYLE.
            </p>

            <ul className="ticket-features">
              <li>
                <svg viewBox="0 0 24 24" className="feature-icon" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                <span><strong>FAST</strong><br />DELIVERY</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" className="feature-icon" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
                <span><strong>SKIN SAFE</strong><br />& NON-TOXIC</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" className="feature-icon" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
                <span><strong>WATERPROOF</strong><br />& LONG LASTING</span>
              </li>

            </ul>

            <button className="btn-shop-now">SHOP NOW</button>

            <div className="vertical-text">TOKIYO VIBE // EST. 2024</div>
            <div className="asterisk-bottom">*</div>
          </div>
        </div>
      </section>

      {/* Black Marquee Bar */}
      <div className="shipping-bar">
        <span>● Free Shipping on Order above $300</span>
        <span>● Free Shipping on Order above $300</span>
        <span>● Free Shipping on Order above $300</span>
        <span>● Free Shipping on Order above $300</span>
      </div>

      <div className="hero-bottom-divider container">
        <strong>TOKIYO <span className="text-red">VIBE</span></strong> /////////////////////////////// &nbsp;&nbsp;
        <span style={{ float: 'right' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" style={{ marginRight: '10px' }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
