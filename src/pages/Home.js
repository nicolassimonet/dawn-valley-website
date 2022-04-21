import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hexa1 from "../img/hexa1.png";
import Hexa2 from "../img/hexa2.png";
import Hexa3 from "../img/hexa3.png";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="container__hexagon">
        <div className="content__hexa-1">
          <img className="hexagon" width="150" height="150" src={Hexa1} alt="" />
          <h2 className="title__hexa">Titre 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            sit temporibus aliquid consequatur maiores qui voluptate nam quam
            vitae aperiam.
          </p>
        </div>

        <div className="content__hexa-2">
          <img className="hexagon__2" width="150" height="150" src={Hexa2} alt="" />
          <h2 className="title__hexa">Titre 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            voluptates ab, modi voluptatum aliquid repudiandae odit dolorem
            consequuntur laboriosam voluptas.
          </p>
        </div>

        <div className="content__hexa-3">
          <img className="hexagon__3" width="150" height="150" src={Hexa3} alt="" />
          <h2 className="title__hexa">Titre 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            distinctio dolore amet cupiditate quos laudantium incidunt
            dignissimos rem at suscipit!
          </p>
        </div>
      </div>
      <div className="container__trailer">
        <iframe
          className="trailer__video"
          title="trailer-video"
          src="https://www.youtube.com/watch?v=p8kfR4vlDww"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
