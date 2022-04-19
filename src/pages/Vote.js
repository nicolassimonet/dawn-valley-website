import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Vote = () => {
  return (
    <div>
      <Navigation />
      <div className="container__header">
        <p className="vote-us">
          Votez pour nous juste{" "}
          <a
            className="link"
            href="https://top-serveurs.net/rdr/dawnvalley-redm"
          >
            ici
          </a>
        </p>
        <img className="banner" src="./banner.png" alt="Bannière dawn valley" />
      </div>
      <Footer />
    </div>
  );
};

export default Vote;