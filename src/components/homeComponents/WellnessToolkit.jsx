import React from 'react';
import { FaPills, FaUserMd, FaClinicMedical, FaVial, FaMicroscope } from 'react-icons/fa';
import pro16 from '../../assets/16.png'
import pro15 from '../../assets/15.png'
const WellnessToolkit = () => {
  const features = [
    {
      icon: <FaPills className="text-yellow-500 text-xl" />,
      title: 'Medicines Reminders',
      backgroundColor: 'bg-yellow-100',
    },
    {
      icon: <FaUserMd className="text-green-500 text-xl" />,
      title: 'Consult Doctors',
      backgroundColor: 'bg-green-100',
    },
    {
      icon: <FaClinicMedical className="text-indigo-500 text-xl" />,
      title: 'Pharmacy',
      backgroundColor: 'bg-indigo-100',
    },
    {
      icon: <FaVial className="text-purple-500 text-xl" />,
      title: 'Hospital Visit',
      backgroundColor: 'bg-purple-100',
    },
    {
      icon: <FaMicroscope className="text-pink-500 text-xl" />,
      title: 'Lab Tests',
      backgroundColor: 'bg-pink-100',
    },
    {
      icon: <FaVial className="text-orange-500 text-xl" />,
      title: 'Vitals Insights',
      backgroundColor: 'bg-orange-100',
    },
  ];

  return (
    <section className=" py-16 ">
      <div className="container mx-auto px-4">
        <p className='text-blue-500 font-semibold text-center'>IN APP FEATURES</p>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Wellness Toolkit</h2>
        <div className="flex flex-col md:flex-row  items-center justify-center ">
          <div className="w-full  md:pr-8 mb-8 md:mb-0 md:left-[70px] top[-30px] absolute z-10">
            <div className="flex flex-col  gap-4 ">
              <button className='bg-[#FFB489] text-sm rounded-full flex gap-1 p-3 w-fit'> <FaPills className=" text-xl" />Medicines Reminders</button>
              <div className='flex gap-5'>
              <button className='bg-[#B0EDCA] text-sm rounded-full flex gap-1 p-3 w-fit'> <FaUserMd className=" text-xl" />Consult Doctors</button>
              <button className='bg-[#FFEDBB] text-sm rounded-full flex gap-1 p-3 w-fit'> <FaClinicMedical className=" text-xl" />Pharmacy</button>
              </div>
              <button className='bg-[#ECD6FA] text-sm rounded-full flex gap-1 p-3 w-fit'> <FaVial className=" text-xl" />Hospital Visit</button>
              <div className='flex gap-5'>
              <button className='bg-[#ACCDFF] text-sm rounded-full flex gap-1 p-3 w-fit'> <FaMicroscope className=" text-xl" />Lab Tests</button>
              <button className='bg-[#ffdf88fa] text-sm rounded-full flex gap-1 p-3 w-fit'> <FaVial className=" text-xl" />Vitals Insights</button>
              </div>

            </div>
          </div>
          <div className=" flex z-0 ">
            <img src={pro16} alt="Toolkit Image" className="h-[200px] md:h-[450px] z-10 " />
            <img src={pro15} alt="Toolkit Image" className="h-[200px] md:h-[450px] relative z-0 right-20" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessToolkit;
