import React, { useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import CloseIcon from "@material-ui/icons/Close";
import Img1 from '../img/1.jpeg';
import Img2 from '../img/2.jpeg';
import Img3 from '../img/3.jpeg';
import Img4 from '../img/4.jpeg';
import Img5 from '../img/5.jpeg';
import Img6 from '../img/6.jpeg';
import Img7 from '../img/7.jpeg';
import Img8 from '../img/8.jpeg';
import Img9 from '../img/9.jpeg';
import Img10 from '../img/10.jpeg';
import Img11 from '../img/11.jpeg';
import Img12 from '../img/12.jpeg';
import Img13 from '../img/13.jpeg';
import Img14 from '../img/14.jpeg';
import Img15 from '../img/15.jpeg';
import Img16 from '../img/16.jpeg';
import Img17 from '../img/17.png';

const Galerie = () => {

  let data =[
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 14,
      imgSrc: Img14,
    },
    {
      id: 15,
      imgSrc: Img15,
    },
    {
      id: 16,
      imgSrc: Img16,
    },
    {
      id: 17,
      imgSrc: Img17,
    }
  ]

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);

  }
  return (
    <div>
    <div className={model ? "model open" : "model"}>
      <img src={tempimgSrc} alt="" />
        <CloseIcon onClick={() => setModel(false)} />
    </div>
      <Navigation />
        <div className="gallery">
          {data.map((item, index)=>{
            return(
              <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} style={{width: '100%'}} alt="" />
              </div>
            )
          })}
        </div>
      <Footer />
    </div>
  );
};

export default Galerie;
