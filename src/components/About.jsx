import React from 'react';
import about from '../assets/about.png'
import OurIdentity from './aboutComponents/OurIdentity';
import Milestones from './homeComponents/Milestones';
import Aboutpage from './aboutComponents/Aboutpage';
import AppAccess from './aboutComponents/AppAccess';
const About = () => {
  return (
    <>
    <div className='bg-gray-100'>
    <section className="flex flex-col items-center justify-center p-6 ">
      <div className="relative w-full max-w-4xl mx-auto mt-10">
        <div className=" flex items-center justify-center ">
          <div className="relative w-full max-w-auto mx-auto  rounded-lg overflow-hidden">
            <div className="p-6 text-center">
              <p className='text-semibold '>Welcome to</p>
              <h2 className="md:text-4xl text-2xl mb-4">
              Revolutionized Healthcare through <br/> Innovation and Accessibility.
              </h2>
              <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
        <img
          src={about}
          alt="Devices"
          className="w-full h-auto"
        />
      </div>

    </section>
    <OurIdentity/>
    <Milestones/>
    <Aboutpage/>
    <AppAccess/>
    </div>
    </>
  );
};

export default About;
