import React from 'react';
import headphones from '../img/headphones.png';
import logo from '../img/logo-melvil-web-white.png';
import './hero.scss';

function Hero() {
  return (
    <section className="hero">
      <div className="logo">
        <a href="https://melvil.cz" target="_blank" rel="noreferrer">
          <img src={logo} alt="" />
        </a>
      </div>
      <h1>Mobilní aplikace Melvil</h1>

      <p>Děkujeme za Vaše nápady na další rozvoj aplikace Melvil.</p>
      <div className="headphonesWrapper">
        <img src={headphones} alt="" />
      </div>
    </section>
  );
}

export default Hero;
