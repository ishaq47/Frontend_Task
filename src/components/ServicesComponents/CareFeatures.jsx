import React from "react";
import group6 from "../../assets/heart (6).png";
import group5 from "../../assets/heart (5).png";
import group4 from "../../assets/heart (4).png";
import group3 from "../../assets/heart (3).png";
import group2 from "../../assets/heart (2).png";
import group1 from "../../assets/heart (1).png";
import { BiColor } from "react-icons/bi";

const CareFeatures = () => {
  const features = [
    {
      title: "Personalized Wellness Programs",
      description:
        "Custom health and fitness plans designed to meet individual needs, including mental and physical health components.",
      image: group6, // Replace with an actual icon or image
      bgColor: "bg-white",
    },
    {
      title: "Emergency Response Integration",
      description:
        "Connecting users to emergency services or facilitating quick medical responses during urgent health situations.",
      image: group5, // Replace with an actual icon or image
      bgColor: "bg-white",
    },
    {
      title: "Health Insurance Solutions",
      description:
        "Offering tailored health and life insurance plans, including digital management tools for easy access and claims processing.",
      image: group4, // Replace with an actual icon or image
      bgColor: "bg-[#5F77FF]",
      color: "text-white"
    },
    {
      title: "Health Monitoring Tools",
      description:
        "Providing users with digital tools to track their vitals, medical history, and progress with personalized health plans.",
      image: group3, // Replace with an actual icon or image
      bgColor: "bg-white",
    },
    {
      title: "Corporate Health Solutions",
      description:
        "Providing businesses with comprehensive wellness programs, health benefits, and employee care solutions.",
      image: group2, // Replace with an actual icon or image
      bgColor: "bg-white",

    },
    {
      title: "OPD Care System",
      description:
        "Efficient, digital-driven OPD solutions that streamline patient management and care.",
      image: group1, // Replace with an actual icon or image
      bgColor: "bg-white",
      imageAlign:'justify-end '
    },
  ];

  return (
    <div className="py-12 px-6 lg:py-20 lg:px-20">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl mb-10">
        Our Extensive Care Features
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md hover:shadow-lg transition ${feature.bgColor} ${feature.color}`}
          >
            <div className={`flex items-center justify-start ${feature.imageAlign}  mb-4 text-2xl`}>
              <img src={feature.image} className={`w-16 `}/>
            </div>
            <h3 className="text-lg font-semibold ">
              {feature.title}
            </h3>
            <p className={`text-sm text-gray-600 ${feature.color} mt-2`}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareFeatures;
