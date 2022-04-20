import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Lore1 from "../img/lore1.png";
import Lore2 from "../img/lore2.png";

const Lore = () => {
  return (
    <div>
    <Navigation />
      <div className='images__container'>
        <img src={Lore1} alt="" />
        <img src={Lore2} alt="" />
      </div>
    <Footer />
    </div>
  );
};

export default Lore;