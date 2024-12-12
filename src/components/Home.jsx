import React from 'react';
import {  FaHospital, FaVial, FaPills, FaUserMd } from 'react-icons/fa';
import Milestones from './homeComponents/Milestones';
import CareFeatures from './homeComponents/CareFeature';
import WellnessToolkit from './homeComponents/WellnessToolkit';
import KeyFeatures from './homeComponents/KeyFeatures';
import HealthCare from './homeComponents/HealthCare';
import button1 from '../assets/button1.png'
import button2 from '../assets/button2.png'
import button3 from '../assets/button3.png'
import button4 from '../assets/button4.png'


function Home() {
  return (
    <>
  
    <div className="bg-gray-100">
      <header className="  text-center md:p-16 p-8">
        <h1 className=" md:text-4xl text-2xl mb-4">One Technology.<br/> Millions <a className='text-blue-600'>Improved</a> Lives.</h1>
        <button className=" bg-blue-500 text-white px-6 py-3 font-semibold rounded-full hover:bg-blue-600">Get in Touch</button>
      </header>
      <section className="container mx-auto p-8">
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <img src="../../src/assets/12pro.png" alt="Phone Mockup" className="w-full" />
            <div className="absolute top-1/4 left-16 md:left-20  transform md:-translate-x-0 -translate-x-1/2">
            <img src={button3} alt='btn' className='md:w-[180px] w-[120px] hover:scale-105'/>
           
            </div>
            <div className="absolute top-1/4  right-1/4  transform md:-translate-x-0 translate-x-1/2">
            <img src={button1} alt='btn' className='md:w-[250px] w-[160px] hover:scale-105'/>
            </div>
            <div className="absolute bottom-1/4  md:left-[-60px] left-1/4 ">
              
            <img src={button2} alt='btn' className='md:w-[160px] w-[100px] hover:scale-105'/>
            </div>
            <div className="absolute md:bottom-1/4 bottom-3 md:right-[-60px] right-1/2 transform md:-translate-x-0 translate-x-1/2">
            <img src={button4} alt='btn' className='md:w-[190px] w-[130px] hover:scale-105'/>

            </div>
          </div>
        </div>
      </section>
      <Milestones/>
    <CareFeatures/>
    <WellnessToolkit/>
    <KeyFeatures/>
    <HealthCare/>
    </div>
   
    </>
  );
}

export default Home;
