import React from 'react';

const Header = () => {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <p>Get 5% off on purhase above 999</p>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container header-container">

          {/* Left Navigation */}
          <nav className="header-left">
            <a href="#home">Home</a>
            <a href="#new-arrivals">New Arrivals</a>
            <a href="#products">Products</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
          </nav>

          {/* Center Logo */}
          <div className="header-center">
            <img src="/images/tv_logo.png" alt="TOKIYO" className="logo-image" />
          </div>

          {/* Right Navigation & Icons */}
          <div className="header-right">
            <div className="auth-links">
              <a href="#login">Login</a>
              <a href="#signup">SignUp</a>
            </div>
            <div className="header-icons">
              <svg className="icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
              <svg className="icon" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
              <div className="cart-icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24"><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                <span className="cart-badge">1</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
