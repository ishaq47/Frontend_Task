import React from 'react';
import email from '../../assets/Email-icon.png'
import call from '../../assets/Call.png'
import location from '../../assets/Location.png'
import { TiSocialFacebook } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { FaFacebook, FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';
import { FiFacebook } from 'react-icons/fi';
const ContactSection = () => {
  return (
    <div className=" text-center py-10 md:px-8 px-4">
      <h2 className="text-3xl font-semibold mb-8">Seamless Communication</h2>

      <div className="flex flex-col md:flex-row  justify-center gap-4 mb-10">
        {/* Email Card */}
        <div className='md:w-1/2  flex flex-col gap-3'>
          <div className="bg-blue-500 text-white w-full md:h-1/2  p-6 rounded-xl flex  items-end justify-between">
           
            <p className="">info@wellnest.com</p>
           
            <div>
            <img
              src={email} // Replace with the correct email image path
              alt="Email Icon"
              className=" md:w-20 mb-4"
            />
             <p className="text-xl font-bold mt-2">Email Us</p>
            </div>
          </div>

          {/* Let's Talk Card */}
          <div className="bg-blue-300  w-full md:h-1/2  p-6 rounded-xl flex  items-end justify-between">
            <div className='flex flex-col gap-2'>
              <p className="  text-start">Pakistan<br/> +92 (51) 2870441</p>
              <p className=" text-start">UAE<br/> +97 (154) 3416210</p>
            </div>
            <div>
              <img
                src={call} // Replace with the correct phone image path
                alt="Phone Icon"
                className=" md:w-20 mb-4"
              />
              <p className="text-xl font-bold mt-2">Let’s talk</p>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-blue-200  md:w-1/2   p-6 rounded-xl flex  items-end justify-between">
          <div className=''>
            <p className="text-lg font-bold">Head Office</p>
            <p>Evacuee Trust Complex, Agha Khan Rd,</p>
            <p>F-5/1, Islamabad, Pakistan.</p>
            <p className="text-lg font-bold mt-4">Regional Office</p>
            <p>Sharjah Media City (Shams)</p>
            <p>Sharjah, United Arab Emirates.</p>

          </div>
          <div>
            <img
              src={location} // Replace with the correct location image path
              alt="Location Icon"
              className=" md:w-28 mb-4 "
            />
            <p className="text-xl font-bold mt-2">Location</p>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className='my-16'>
        <h3 className="text-3xl font-semibold mb-6">Our Socials</h3>
        <div className="flex justify-evenly ">
          <a href="#" className=" rounded-full p-3 bg-blue-400">
            <FaFacebookF  className='text-4xl text-white' />
          </a>
          <a href="#" className=" rounded-full p-3 bg-blue-400">
            <SlSocialInstagram className='text-4xl text-white' />
          </a>
          <a href="#" className=" rounded-full p-3 bg-blue-400">
            <FaTiktok className='text-4xl text-white ' />
          </a>
          <a href="#" className=" rounded-full p-3 bg-blue-400">
            <IoLogoYoutube className='text-4xl text-white' />
          </a>
          <a href="#" className=" rounded-full p-3 bg-blue-400">
            <FaLinkedinIn className='text-4xl text-white' />
          </a>
          {/* Add similar icons for TikTok, YouTube, and LinkedIn */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
