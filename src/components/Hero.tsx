import React from "react";
import logo from "../assets/whammyCentralLogo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='hero'>
      <h1 className='flex-center hero__title'>Whammy Central</h1>
      <Image className ='hero__image' src={logo} alt='whammy central logo' />
    </div>
  );
};

export default Hero;
