import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Rules = () => {
  return (
    <div>
    <Navigation />
      <div className='rules__container'>
      <iframe
          className="webpage__rules"
          title="page réglement"
          src="https://althasy.gitbook.io/dawnvalley-redm/reglement/reglement-de-base" />
      </div>
    <Footer />
    </div>
  );
};

export default Rules;