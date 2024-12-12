// src/components/HealthcareAccess.js
import React from 'react';
import Pro17 from '../../assets/17.png'
import apple from '../../assets/apple.png'
import playstore from '../../assets/playstore.png'
import huwai from '../../assets/huwai.png'

const HealthCare = () => {
  return (
    <div className="bg-[#5F77FF59] p-8 flex flex-col md:flex-row rounded-xl md:m-10 items-center justify-between">
      <div className="md:w-1/2 p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Get the best healthcare <br/> access to you.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your health, your way! Smarter care is just a tap away. Get the app and stay connected to wellness.
        </p>
        <div className="flex space-x-4">
          <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
            <img src={playstore} alt="Google Play" className="md:h-12 " />
          </a>
          <a href="https://apps.apple.com/us/app/store" target="_blank" rel="noopener noreferrer">
            <img src={apple} alt="App Store" className="md:h-12 " />
          </a>
          <a href="https://appgallery.huawei.com" target="_blank" rel="noopener noreferrer">
            <img src={huwai} alt="App Gallery" className="md:h-12 " />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 p-4">
        <img src={Pro17} alt="Phones" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HealthCare;
