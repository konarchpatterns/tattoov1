import React from 'react';

const categories = [
  { name: 'Men Tattoo', img: '/images/men.png' },
  { name: 'Women Tattoo', img: '/images/women.png' },
  { name: 'New Arrival', img: '/images/new.png' },
  { name: 'Animal Tattoo', img: '/images/animal.png' },
  { name: 'Flora Tattoo', img: '/images/flora.png' },
  { name: 'Mythology Tattoo', img: '/images/myth.png' },
  { name: 'Full Sleeve\nTattoo', img: '/images/fs.png' },
  { name: 'Spiritual Tattoo', img: '/images/spirtual.png' },
  { name: 'Anime Tattoo', img: '/images/anime.png' },
  { name: 'Finger Tattoo', img: '/images/cat_finger.png' }
];

const CategoryGrid = () => {
  return (
    <div style={{ backgroundColor: '#ECECEC' }}>
      <section id="categories" className="categories-section container">

        <div className="category-header-wrapper">

          <div className="category-header-left">
            <h2 className="cat-main-title">Our<br /><span className="text-red">Category's</span></h2>
            <div className="cat-divider"></div>
            <p className="cat-subtitle">
              EXPLORE OUR WIDE RANGE OF PREMIUM<br />
              TEMPORARY TATTOOS. FIND YOUR VIBE.
            </p>
          </div>

          <div className="category-header-center">
            <div className="watermark-text">東京の魂</div>
          </div>

          <div className="category-header-right">
            <p className="cat-meta-text">
              TOKYO INSPIRED<br />
              INKED TEMPORARILY<br />
              MADE FOR YOU
            </p>
            <svg viewBox="0 0 200 60" className="barcode-svg" preserveAspectRatio="none">
              <rect x="0" y="0" width="4" height="60" fill="#000" />
              <rect x="8" y="0" width="2" height="60" fill="#000" />
              <rect x="14" y="0" width="8" height="60" fill="#000" />
              <rect x="26" y="0" width="2" height="60" fill="#000" />
              <rect x="32" y="0" width="6" height="60" fill="#000" />
              <rect x="42" y="0" width="2" height="60" fill="#000" />
              <rect x="48" y="0" width="4" height="60" fill="#000" />
              <rect x="56" y="0" width="8" height="60" fill="#000" />
              <rect x="68" y="0" width="2" height="60" fill="#000" />
              <rect x="74" y="0" width="10" height="60" fill="#000" />
              <rect x="88" y="0" width="4" height="60" fill="#000" />
              <rect x="96" y="0" width="2" height="60" fill="#000" />
              <rect x="102" y="0" width="6" height="60" fill="#000" />
              <rect x="112" y="0" width="4" height="60" fill="#000" />
              <rect x="120" y="0" width="8" height="60" fill="#000" />
              <rect x="132" y="0" width="2" height="60" fill="#000" />
              <rect x="138" y="0" width="6" height="60" fill="#000" />
              <rect x="148" y="0" width="4" height="60" fill="#000" />
              <rect x="156" y="0" width="2" height="60" fill="#000" />
              <rect x="162" y="0" width="8" height="60" fill="#000" />
              <rect x="174" y="0" width="4" height="60" fill="#000" />
              <rect x="182" y="0" width="2" height="60" fill="#000" />
              <rect x="188" y="0" width="6" height="60" fill="#000" />
              <rect x="198" y="0" width="2" height="60" fill="#000" />
            </svg>
            <div className="barcode-footer">TOKIYO VIBE // EST. 2024</div>
            <div className="red-asterisk-box">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="#e50914" strokeWidth="3" strokeLinecap="square" fill="none">
                <line x1="12" y1="4" x2="12" y2="20" />
                <line x1="4.5" y1="7.5" x2="19.5" y2="16.5" />
                <line x1="4.5" y1="16.5" x2="19.5" y2="7.5" />
              </svg>
            </div>
          </div>

        </div>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <img src={cat.img} alt={cat.name} />
              <div className="category-name">
                {cat.name.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== cat.name.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryGrid;
