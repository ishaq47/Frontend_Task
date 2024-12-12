import React from "react";

const Aboutpage = () => {
  const expertiseData = [
    {
      title: "Telemedicine & Online Consultations",
      description:
        "Providing remote consultations with licensed healthcare professionals across various specialties.",
    },
    {
      title: "AI-Driven Health Assistance",
      description:
        "Using advanced AI technology to provide instant health advice, symptom checking, and personalized care recommendations.",
    },
    {
      title: "Health Insurance Solutions",
      description:
        "Offering tailored health and life insurance plans, including digital management tools for easy access and claims processing.",
    },
    {
      title: "Personalized Wellness Programs",
      description:
        "Custom health and fitness plans designed to meet individual needs, including mental and physical health components.",
    },
    {
      title: "Corporate Health Solutions",
      description:
        "Providing businesses with comprehensive wellness programs, health benefits, and employee care solutions.",
    },
    {
      title: "Prescription Management",
      description:
        "Offering digital prescription services where users can consult, receive prescriptions, and manage their medications.",
    },
    {
      title: "Health Monitoring Tools",
      description:
        "Providing users with digital tools to track their vitals, medical history, and progress with personalized health plans.",
    },
    {
      title: "Emergency Response Integration",
      description:
        "Connecting users to emergency services or facilitating quick medical responses during urgent health situations.",
    },
    {
      title: "Family Health Management",
      description:
        "Manage and track medical info for you and your family, including vitals, appointments, and medical history in one place.",
    },
  ];

  return (
    <div className="px-6 py-12 lg:px-20 lg:py-20  text-gray-700">
      <section className="text-center">
        <h2 className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
          About Us
        </h2>
        <h1 className="text-3xl font-semibold lg:text-4xl text-gray-900">
          Our Story
        </h1>
        <p className="mt-4 text-sm lg:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
          Our journey began with a simple yet profound idea: to make healthcare more
          accessible and impactful for everyone. Recognizing the challenges of traditional
          care systems, we set out to bridge the gap through innovative solutions. Along
          the way, we’ve achieved remarkable milestones, empowering countless individuals
          to prioritize their health. But our story is far from over—we’re just getting
          started.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-blue-600 text-sm font-semibold uppercase tracking-wider text-center">
          Our Expertise
        </h2>
        <h1 className=" text-3xl font-semibold lg:text-4xl text-center text-gray-900">
          Healthcare Solutions For You
        </h1>
        <p className="mt-4 text-sm lg:text-lg leading-relaxed text-gray-600 text-center max-w-3xl mx-auto">
          Our expertise delivers accessible, tech-driven healthcare solutions, from online
          consultations to wellness programs and insurance tech, designed to simplify and
          enhance your healthcare journey with quality and convenience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="p-6  transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
