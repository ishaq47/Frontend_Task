import React from 'react';
import apple from '../assets/apple.png';
import playstore from '../assets/playstore.png';
import huwai from '../assets/huwai.png';
import logo from '../assets/logo1.png';
import upper from '../assets/upper.png';


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white pt-10 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
                {/* Logo and Description */}
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <img src={logo} alt="Logo" className="w-[150px] mb-3" />
                    <h2 className="text-xl font-bold">WellNest</h2>
                    <p className="text-sm text-gray-400 text-center md:text-left">
                        Your health, your way! Smarter care is just a tap away.
                    </p>
                </div>

                {/* Footer Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Our Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Download App */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Download App</h3>
                        <div className="flex flex-col gap-3">
                            <a href="#"><img src={playstore} alt="Google Play" className="w-28" /></a>
                            <a href="#"><img src={apple} alt="App Store" className="w-28" /></a>
                            <a href="#"><img src={huwai} alt="App Gallery" className="w-28" /></a>
                        </div>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Socials</h3>
                        <div className="flex space-x-1">
                            <button className="border-white border-2 rounded-lg px-4 py-2">FB</button>
                            <button className="border-white border-2 rounded-lg px-4 py-2">IG</button>
                            <button className="border-white border-2 rounded-lg px-4 py-2">X</button>
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Location</h3>
                        <p className="text-sm text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center mt-10 md:flex md:justify-between">
                <p className="text-sm text-gray-400">&copy; 2024 Ideation. All Rights Reserved</p>
                <div className="flex justify-center space-x-4 mt-3">
                    <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
                </div>
            </div>

            {/* Floating Scroll-to-Top Button */}
            <div className="fixed bottom-4 right-4  rounded-full shadow-lg">
                <a href="#top">
                    <img src={upper} alt="Scroll to Top" className="w-12 h-12" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
