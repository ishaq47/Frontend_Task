import React from 'react';

const Milestones = () => {
  return (
    <section >
      <div className="container mx-auto text-center">
        <p className='text-blue-500 font-semibold'>OUR IMPACT</p>
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">Our Milestones</h2>
        <div className='md:flex justify-between '>
        <p className="text-gray-600 text-xl font-semibold mb-12">Top used healthcare app used <br/> by millions of happy users</p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-indigo-600 mb-2">15M+</p>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-indigo-600 mb-2">3K+</p>
            <p className="text-gray-600">Health Providers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-indigo-600 mb-2">2M+</p>
            <p className="text-gray-600">Downloads from app stores</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-indigo-600 mb-2">4.7</p>
            <p className="text-gray-600">Rating out of 5</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
