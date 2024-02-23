import React from 'react';
import "./Hero-banner.css"
import Image from 'next/image';
import HeroImage from "../../../../assets/heroimage.svg"

const HeroBanner = () => {
      return (
            <div className='hero-container text-white '>
                  <div className=' flex flex-row items-center w-full justify-evenly'>
                        <div className='hero-title'>
                              <p className='title-text1'>THE BEST <br></br>
                                    AI-POWERED HEADSHOT FOR EVERYONE</p>
                              <p className='title-text2'>Click, create, and delight in the magic</p>
                              <button className='hero-button'>CREATE YOURS ONE</button>
                        </div>
                        <Image
                              className='HeroImage'
                              src={HeroImage}
                              alt="Logo"
                        />
                  </div>

            </div>
      );
}

export default HeroBanner;
