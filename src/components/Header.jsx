import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import menu from '../assets/menu.png';
import search from '../assets/search.png';
import Logo from '../assets/Logo.png';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-24">
            <img src={Logo} alt="WellNest Logo" className="h-8 mr-4" />
            <ul className="hidden md:flex font-semibold md:flex-row flex-col">
              <li className="mr-6 mb-2 md:mb-0">
                <Link 
                  to="/" 
                  className={`  ${isActive('/') ? 'text-blue-500' : 'text-gray-600'}`}
                >
                  Home
                </Link>
              </li>
              <li className="mr-6 mb-2 md:mb-0">
                <Link 
                  to="/about" 
                  className={`  ${isActive('/about') ? 'text-blue-500' : 'text-gray-600'}`}
                >
                  About Us
                </Link>
              </li>
              <li className="mr-6 mb-2 md:mb-0">
                <Link 
                  to="/services" 
                  className={`  ${isActive('/services') ? 'text-blue-500' : 'text-gray-600'}`}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`  ${isActive('/contact') ? 'text-blue-500' : 'text-gray-600'}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="bg-indigo-500 text-white px-4 py-2 font-semibold rounded-full hover:bg-indigo-600">
              Download App
            </button>
            <img src={search} alt="icons" className="md:w-12" />
            <img src={menu} alt="icons" className="md:w-12" />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center bg-white p-4 shadow-md">
            <li className="mb-2">
              <Link 
                to="/" 
                className={` hover:text-gray-900 ${isActive('/') ? 'text-blue-500' : 'text-gray-600'}`} 
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/about" 
                className={` hover:text-gray-900 ${isActive('/about') ? 'text-blue-500' : 'text-gray-600'}`} 
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/services" 
                className={` hover:text-gray-900 ${isActive('/services') ? 'text-blue-500' : 'text-gray-600'}`} 
                onClick={toggleMenu}
              >
                Our Services
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/contact" 
                className={` hover:text-gray-900 ${isActive('/contact') ? 'text-blue-500' : 'text-gray-600'}`} 
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button 
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-600" 
                onClick={toggleMenu}
              >
                Download App
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
