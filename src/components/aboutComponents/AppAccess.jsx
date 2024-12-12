import React from "react";
import phone from "../../assets/black.png"
import playstore from '../../assets/playstore.png'
import apple from '../../assets/apple.png'
import huwai from '../../assets/huwai.png'
const AppAccess = () => {
    return (
        <div className="bg-blue-50 py-12 px-6 lg:py-20 lg:px-20">
          
            <div className="flex flex-col bg-[#D3DAFF] rounded-2xl p-3 lg:flex-row items-center justify-between gap-10">
               
                <div className="relative max-w-md lg:max-w-lg">
                    <img
                        src={phone} 
                        alt="Mobile App"
                        className="drop-shadow-lg"
                    />
                </div>

               
                <div className="text-center lg:text-left">
                    <h2 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
                        Get the best healthcare access to you.
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm lg:text-base">
                        Access top-notch healthcare services at your fingertips. Download
                        the app now!
                    </p>
                 
                    <div className="mt-6 flex justify-center lg:justify-start gap-4">
                        <a
                            href="#"
                            className="inline-block  text-white  py-2 rounded-md text-sm hover:opacity-90"
                        >
                            <img src={playstore} alt="Google Play" className="md:h-12" />
                        </a>
                        <a
                            href="#"
                            className="inline-block text-white  py-2 rounded-md text-sm hover:opacity-90"
                        >
                             <img src={apple} alt="App Store" className="md:h-12" />
                        </a>
                        <a
                            href="#"
                            className="inline-block  text-white  py-2 rounded-md text-sm hover:opacity-90"
                        >
                             <img src={huwai} alt="App Gallery" className="md:h-12" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="mt-16 bg-black text-white py-8 px-6 rounded-2xl">
                <h3 className="text-center text-[#5F77FF] text-3xl font-semibold">
                    Want to know more?
                </h3>
                <div className="mt-4 flex justify-center">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600">
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppAccess;
