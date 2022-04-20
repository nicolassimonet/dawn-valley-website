import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Banner from "../img/banner.png"

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
          <a href="https://top-serveurs.net/rdr/dawnvalley-redm"><img className="banner" src={Banner} alt="Bannière dawn valley" /></a>
      </div>
      <Footer />
    </div>
  );
};

export default Vote;