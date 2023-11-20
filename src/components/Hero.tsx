import React from "react";
import logo from "../assets/whammyCentralLogo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='hero'>
      <Image src={logo} alt='whammy central logo' width={250} height={250} />
      <h1 className='flex-center hero__title'>Whammy Central</h1>
    </div>
  );
};

export default Hero;
