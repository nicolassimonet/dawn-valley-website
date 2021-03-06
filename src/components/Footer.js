import React from 'react';
import Twitter from "../img/twitter.webp";
import Insta from "../img/insta.webp";
import Youtube from "../img/youtube.webp";
import Discord from "../img/discord.webp";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><a href="https://www.instagram.com/dawnvalleyredm/" target="_blank" rel='noopener noreferrer'><img src={Insta} width="40" height="40" alt="" />.</a></li>
        <li><a href="https://twitter.com/DawnvalleyR" target="_blank" rel='noopener noreferrer'><img src={Twitter} width="40" height="40" alt="" />.</a></li>
        <li><a href="https://www.youtube.com/channel/UCqZDD2vqegSmeyIALgGg_nQ" target="_blank" rel='noopener noreferrer'>.<img src={Youtube} width="40" height="40" alt="" /></a></li>
        <li><a href="hhttps://discord.gg/82dfKfXa6D" target="_blank" rel='noopener noreferrer'><img src={Discord} width="40" height="40" alt="" />.</a></li>
      </ul>
    </footer>
  );
};

export default Footer;