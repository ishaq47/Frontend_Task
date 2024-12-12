// src/components/ContactForm.js
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'; 
import "react-phone-input-2/lib/style.css"; 

const ContactForm = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="max-w-4xl mx-auto p-4 pt-20 rounded-md">
      <h1 className="text-3xl font-semibold mb-4 text-center">Got Any Questions?</h1>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-gray-700">Subject/Query</label>
            <input
              type="text"
              placeholder="What do you got in your mind?"
              className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email address"
              className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <div className="relative mt-2">
              
                <div className="w-full" >
                <PhoneInput
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  placeholder="Enter phone number"
                  country={"pk"} 
                  inputClass="!w-full !px-4 !py-2 !bg-gray-200 !rounded-md !focus:outline-none !focus:ring-1 !focus:ring-blue-600"
                  dropdownClass="!bg-gray-200" 
                />
                </div>
              
            </div>
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Company</label>
          <input
            type="text"
            placeholder="Your Company's name"
            className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            placeholder="Your City's name"
            className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="md:px-24 px-4 py-2 font-semibold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none"
          >
            Send Your Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
