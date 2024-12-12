import React from 'react';
import { FaStethoscope, FaPills, FaHospital, FaHeartbeat, FaUsers, FaFileMedical } from 'react-icons/fa';
import group from '../../assets/group.png'; // Replace with your image path
// import doctorBadge from '../assets/doctor-badge.png'; // Replace with your badge image path

const KeyFeatures = () => {
  const features = [
    {
      icon: <FaStethoscope className="text-indigo-500 text-xl mb-2" />,
      title: 'Consult Doctor',
      description: 'Talk to licensed doctors anytime, anywhere. Get expert advice, prescriptions, or second opinions through audio, video calls or chat.',
    },
    {
      icon: <FaPills className="text-indigo-500 text-xl mb-2" />,
      title: 'Medicine',
      description: 'Get digital prescriptions and order over-the-counter medicines effortlessly. Enjoy quick delivery and free reminders for refills.',
    },
    {
      icon: <FaHospital className="text-indigo-500 text-xl mb-2" />,
      title: 'Pharmacy',
      description: 'Explore a complete range of health and wellness products. Convenient shopping with trusted quality guaranteed.',
    },
    {
      icon: <FaHeartbeat className="text-indigo-500 text-xl mb-2" />,
      title: 'Vitals',
      description: 'Monitor key health metrics like blood pressure, sugar levels or BMI. Get personalized insights to manage your health better.',
    },
    {
      icon: <FaUsers className="text-indigo-500 text-xl mb-2" />,
      title: 'Family Records & Checkups',
      description: 'Manage & track your family’s medical history effortlessly with our secure and reliable e-health records system.',
    },
    {
      icon: <FaFileMedical className="text-indigo-500 text-xl mb-2" />,
      title: 'Lab Tests',
      description: 'Book diagnostic tests easily and avoid long queues. Receive accurate, fast results directly in the app.',
    },
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <p className='text-blue-500 font-semibold text-center'>QUICK ACTIONS</p>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Key features especially <br/> for you</h2>
        <div className="flex flex-col md:flex-row items-center md:justify-between  md:items-start">
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 relative">
            <img src={group} alt="Doctor Image" className="w-full h-auto relative z-10" />
          </div>
          <div className="w-full md:w-1/3">
            <div className="">
              {features.map((feature, index) => (
                <div key={index} className="p-4   border-b-2 border-gray-300 flex items-start">
                  <div className="mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
