import React from 'react';
import identity from '../../assets/identity.png'
const OurIdentity = () => {
  return (
    <div className="container mx-auto md:pl-4 py-8 ">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 p-4">
        <p className='font-semibold text-blue-500'>OUR IDENTITY</p>
          <h2 className="text-2xl font-semibold  mb-4">Behind The Brand</h2>
          <p className="text-gray-700">
            We are the pioneers of AI driven healthcare innovation, dedicated to simplify the access
            to medical services. At our core, we infuse technology with care to create a platform that
            connects patients, doctors, and healthcare providers in a seamless ecosystem. Our
            identity is rooted in trust, accessibility, and excellence — ensuring that every user
            experiences customized, reliable, and efficient care. With us, healthcare isn’t just a
            service, it’s a commitment to empowering healthier lives.
          </p>
        </div>
       
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <div className="w-full md:w-1/2 p-4">
        <p className='font-semibold text-blue-500'>OUR MISSION</p>

          <h2 className="text-2xl font-semibold  mb-4">Future Of Exceptional Care</h2>
          <p className="text-gray-700">
            Our mission is to bridge the gap between patients and healthcare providers, as we strive
            to make quality care accessible to everyone, anytime, anywhere. We are revolutionizing
            healthcare by providing smooth, accessible, and comprehensive digital health solutions.
            We aim to empower our consumers to take control of their well-being through AI driven
            technology, offering everything from appointments to accessible medical records — all in
            one place. We are creating a healthier, happier world!
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            src={identity}
            alt="Healthcare"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurIdentity;
