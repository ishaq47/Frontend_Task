import React from "react";
import girl from '../../assets/girl.png'
import health from '../../assets/health.png'
import tele from '../../assets/tele.png'
import layer from '../../assets/layer.png'
const WellnessToolkit = () => {
  return (
    <section className="md:px-6 px-4 py-12 bg-gray-50">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">Our Wellness Toolkit</h2>
      <div >
        <div className="md:flex gap-6">
          {/* Telemedicine & Online Consultations */}
          <div className="md:col-span-2 md:w-2/3 flex gap-4 items-end bg-[#ECF1FF] p-8 rounded-3xl">

            <div className="w-2/3">
              <h3 className="text-2xl font-semibold">Telemedicine &<br /> Online Consultations</h3>
              <p className="text-sm text-gray-600 mt-2">
                Providing remote consultations with licensed healthcare professionals across various specialties. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium mt-4 inline-block hover:underline"
              >
                Learn More
              </a>
            </div>
            <img
              src={girl}
              alt="Telemedicine"
              className=" w-1/3 md:h-[450px] rounded-lg mr-6"
            />
          </div>

          {/* Family Health Management */}
          <div className="bg-[#5F77FF] md:w-1/3 px-8 pt-8 rounded-3xl text-center text-white flex flex-col items-center">
            <h3 className="text-2xl font-semibold py-3">Family Health<br /> Management</h3>
            <p className="text-lg font-light  mt-2">
              Manage and track medical info for you and your family, including vitals, appointments, and medical history in one place. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#"
              className=" font-semibold mt-4 inline-block hover:underline"
            >
              Learn More
            </a>
            <img
              src={health}
              alt="Telemedicine"
              className=" w-[180px] mt-6"
            />
          </div>
        </div>

        {/* Prescription Management */}
        <div className="flex flex-wrap gap-6 mt-6 w-full">
        <div className="bg-[#F5F6F9] flex md:w-[55%] items-end p-6 rounded-3xl shadow-sm ">
          <img
            src={tele}
            alt="Prescription Management"
            className="w-[130px] md:relative right-[-10px] bg-cover  "
          />
          <div>
            <h3 className="text-lg font-semibold text-start">Prescription Management</h3>
            <p className="text-sm text-gray-600 mt-2 text-start">
              Offering digital prescription services where users can consult,
              receive prescriptions, and manage their medications. Lorem ipsum dolor sit amet, aliqua.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium mt-4 inline-block text-start hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* AI-Driven Health Assistance */}
        <div className="bg-[#ECF1FF] pl-6 pt-6 md:w-[43%]  flex items-end text-start rounded-3xl shadow-sm">
          <div className="pb-6">
            <h3 className="text-lg font-semibold ">AI-Driven Health Assistance</h3>
            <p className="text-sm text-gray-600 mt-2 ">
              Using advanced AI technology to provide instant health advice, symptom checking, and personalized recommendations.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium mt-4 inline-block text-center hover:underline"
            >
              Learn More
            </a>
          </div>
          <img
            src={layer}
            alt="AI-Driven Health Assistance"
            className="w-[140px] "
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessToolkit;
