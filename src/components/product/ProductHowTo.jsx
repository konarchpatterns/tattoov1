import React from 'react';

const ProductHowTo = () => {
  const steps = [
    { num: 1, text: 'CLEAN SKIN', icon: '/images/sc_samurai.png' },
    { num: 2, text: 'APPLY TATTOO', icon: '/images/sc_samurai.png' },
    { num: 3, text: 'WET FOR 30 SECS', icon: '/images/sc_samurai.png' },
    { num: 4, text: 'REMOVE PAPER', icon: '/images/sc_samurai.png' },
    { num: 5, text: 'FLEX YOUR VIBE', icon: '/images/sc_samurai.png' }
  ];

  return (
    <div className="pd-how-to-horizontal">
      <div className="pd-how-to-left">
        <h2 className="pd-section-title" style={{ fontSize: '18px', marginBottom: '5px' }}>HOW TO APPLY</h2>
        <div className="pd-story-jap" style={{ color: '#970C0F' }}>適用方法</div>
      </div>
      
      <div className="pd-how-to-row">
        {steps.map((s, idx) => (
          <div key={idx} className="pd-how-step-card">
            <div className="pd-how-step-img">
              <img src={s.icon} alt={s.text} />
              <div className="pd-how-step-num">{s.num}</div>
            </div>
            <div className="pd-how-step-text">{s.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHowTo;
