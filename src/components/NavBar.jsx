import React from 'react';

const NavBar = () => {
  return (
    <header>
      <div className="announcement-bar">
        100% CERTIFIED LAB GROWN DIAMONDS
        <div className="top-links">
          <a href="#">FAQs</a>
          <a href="#">Support</a>
          <a href="#">About us</a>
        </div>
      </div>
      <nav className="main-nav">
        <div className="logo">
          <a href="/">VARNIYA</a>
        </div>
        <div className="nav-links">
          <a href="#">ENGAGEMENT RINGS</a>
          <a href="#">MEN'S RINGS</a>
          <a href="#">RINGS</a>
          <a href="#">EARRINGS</a>
          <a href="#">READY TO SHIP</a>
          <a href="#">LEARN</a>
        </div>
        <div className="nav-actions">
          <button className="custom-design">Custom Design?</button>
          <a href="#" className="icon-link"><i className="fas fa-user"></i></a>
          <a href="#" className="icon-link"><i className="fas fa-search"></i></a>
          <a href="#" className="icon-link"><i className="fas fa-heart"></i></a>
          <a href="#" className="icon-link">
            <i className="fas fa-shopping-bag"></i>
            <span className="cart-count">0</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar; 