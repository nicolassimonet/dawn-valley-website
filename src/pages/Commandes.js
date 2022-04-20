import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Commandes = () => {
  return (
    <div>
      <Navigation />
      <div className="commands__container">
        <h1 className="commands__title">Guide des touches</h1>
        <p>
          <p><strong>F6</strong> : Roulette interactions</p>
          <p><strong>I</strong> : Inventaire</p>
          <p><strong>Z</strong> : Ragdoll</p>
          <p><strong>C</strong> : Regarde derrière</p>
          <p><strong>X</strong> : Lever les mains</p>
          <p><strong>J</strong> : Changer la portée de votre voix</p>
          <p><strong>B</strong> : Appeler votre charrette</p>
          <p><strong>H</strong> : Appeler votre cheval</p>
          <p><strong>/clanmenu</strong> : Pour faire apparaitre votre clan après
          deco</p>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Commandes;
