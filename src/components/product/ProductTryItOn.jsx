import React, { useState } from 'react';

const ProductTryItOn = () => {
  const [skinTone, setSkinTone] = useState('#E5C4A1');
  const [gender, setGender] = useState('M');
  const [placement, setPlacement] = useState('ARM');

  const skinTones = ['#F5D0B5', '#E5C4A1', '#C59A72', '#7D512D', '#3B2211'];

  return (
    <div className="pd-try-on">
      <div className="pd-try-on-bg-grid"></div>
      
      <div className="pd-try-on-content">
        <div className="pd-try-controls">
          <h2 className="pd-try-title">TRY IT ON</h2>
          <div className="pd-try-subtitle">PREVIEW ON YOUR BODY</div>
          
          <div className="pd-try-group">
            <span className="pd-try-label">SKIN TONE</span>
            <div className="pd-skin-tones">
              {skinTones.map(color => (
                <button
                  key={color}
                  className={`pd-skin-btn ${skinTone === color ? 'active' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSkinTone(color)}
                ></button>
              ))}
            </div>
          </div>
          
          <div className="pd-try-group">
            <span className="pd-try-label">GENDER</span>
            <div className="pd-gender-btns">
              <button 
                className={`pd-gender-btn ${gender === 'M' ? 'active' : ''}`}
                onClick={() => setGender('M')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="14" r="6"/><line x1="14.24" y1="9.76" x2="20" y2="4"/><line x1="16" y1="4" x2="20" y2="4"/><line x1="20" y1="8" x2="20" y2="4"/></svg>
              </button>
              <button 
                className={`pd-gender-btn ${gender === 'F' ? 'active' : ''}`}
                onClick={() => setGender('F')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="6"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="9" y1="19" x2="15" y2="19"/></svg>
              </button>
            </div>
          </div>
          
          <div className="pd-try-group">
            <span className="pd-try-label">PLACEMENT</span>
            <div className="pd-try-place-btns">
              {['ARM', 'NECK', 'CHEST', 'BACK'].map(p => (
                <button
                  key={p}
                  className={`pd-try-place-btn ${placement === p ? 'active' : ''}`}
                  onClick={() => setPlacement(p)}
                  title={p}
                >
                  <img src={`/images/icon-${p.toLowerCase()}.svg`} alt={p} style={{ width: '30px', height: '30px', filter: placement === p ? 'none' : 'grayscale(1)' }} onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
                  <span style={{ display: 'none' }}>{p.charAt(0)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pd-try-viewport">
          <img src="/images/dragon.jpg" alt="Try on preview" className="pd-try-img" />
        </div>
      </div>
    </div>
  );
};

export default ProductTryItOn;
