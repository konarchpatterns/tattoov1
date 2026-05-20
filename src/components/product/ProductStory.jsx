import React from 'react';

const ProductStory = () => {
  return (
    <div className="pd-story">
      <div className="pd-story-text">
        <div className="pd-story-subtitle">THE STORY</div>
        <h2 className="pd-story-title">INSPIRED BY TOKYO STREET CULTURE.</h2>
        <p className="pd-story-p">ROOTED IN TRADITION. MADE FOR REBELS.</p>
        <p className="pd-story-p" style={{ color: '#555' }}>
          Dragon Rebirth symbolizes power, resilience, and transformation. 
          A design born in the underground streets of Tokyo.
        </p>
        <div className="pd-story-jap">反逆者のために作られた</div>
      </div>
      <img src="/images/sc_geisha.png" alt="Story" className="pd-story-img" />
    </div>
  );
};

export default ProductStory;
