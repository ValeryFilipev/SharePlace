import React from "react";
import { SocialIcon } from "react-social-icons";

import "./index.css";

const Footer = () => (
  <footer className="footer">
    <SocialIcon
      target="_blank"
      url="https://vk.com/id195832525"
      bgColor="#4a76a8"
    />
    <SocialIcon
      target="_blank"
      url="https://github.com/ValeryFilipev"
      bgColor="white"
    />
    <SocialIcon
      target="_blank"
      url="https://linkedin.com/in/valery-filipev-742628158"
    />
    <SocialIcon
      target="_blank"
      url="https://www.instagram.com/fan_and_fighter_of_jesus"
      bgColor="#FCAF45"
    />
      <SocialIcon
        target="_blank"
        url="https://+375292686480"
        network="whatsapp"
      />
  </footer>
);

export default Footer;
