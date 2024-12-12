import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import opd from '../../assets/OPD.png'

const CareFeatures = () => {
    const features = [
        {
            title: 'Insurance Tech Suite',
            description: 'Streamline insurance operations with advanced digital tools. Simplify claims, policies, and customer management efficiently.',
        },
        {
            title: 'Smart OPD Care System',
            description: 'Experience seamless outpatient care with our smart, digital-driven OPD solutions. Improve patient management and efficiency.',
            color: 'text-blue-500',
            bgColor:'bg-white border-l-4  border-l-blue-500'
        },
        {
            title: 'Adaptable Health & Life Benefits',
            description: 'Tailor health and life plans to your organization’s needs. Flexible solutions for comprehensive employee coverage.',
        },
        {
            title: 'Client-Centric Health Products',
            description: 'Discover affordable health products designed to build and sustain long-term client relationships.',
        },
        {
            title: 'Integrated Wellness Programs',
            description: 'Promote workplace well-being with customized digital wellness solutions for healthier, happier employees.',
        },
    ];

    return (
        <section className=" py-16">
            <div className="container mx-auto px-4">
                <p className='text-blue-500 text-center font-semibold'>SERVICES</p>
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Extensive Care Features</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start mb-2">

                                <div className={`${feature.bgColor ? feature.bgColor : 'bg-gray-200'} p-3`}>
                                    <FaChevronRight className={`${feature.color ? feature.color : ''} relative float-end top-3 `} />
                                    <h3 className={` text-lg font-semibold ${feature.color ? feature.color : 'text-gray-800'} mb-2`}>{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                             
                            </div>
                        ))}
                    </div>
                
                    <div className="w-full md:w-3/4 bg-[#E6EDFF]">
                        <img src={opd} alt="Feature Image" className="w-full h-auto" />
                    </div>
                
                </div>
            </div>
        </section>
    );
};

export default CareFeatures;
