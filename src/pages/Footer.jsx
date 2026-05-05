import React from 'react';
import { IoMail, IoCall, IoLocationSharp, IoSend } from 'react-icons/io5';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="py-12 w-11/12 max-w-7xl mx-auto text-white">
      {/* numbering */}
      <p className="text-blue-500 font-semibold mb-1">04</p>
      {/* Header */}
      <h1 className="text-3xl font-bold mb-10">Get In Touch</h1>

      {/* Container div */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-8 bg-[#111928] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-xl">
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#0b0f1a] border border-gray-700 p-3 rounded-lg outline-none focus:border-blue-500 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#0b0f1a] border border-gray-700 p-3 rounded-lg outline-none focus:border-blue-500 transition-all"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#0b0f1a] border border-gray-700 p-3 rounded-lg outline-none focus:border-blue-500 transition-all"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-[#0b0f1a] border border-gray-700 p-3 rounded-lg outline-none focus:border-blue-500 transition-all resize-none"></textarea>

            <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white font-bold rounded-lg transition-all cursor-pointer shadow-lg shadow-blue-900/20">
              Send Message <IoSend />
            </button>
          </form>
        </div>

        {/* My Info Section */}
        <div className="lg:col-span-4 bg-[#111928] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-xl flex flex-col justify-between">
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/10 p-3 rounded-xl text-blue-500">
                <IoMail size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">
                  Email
                </p>
                <p className="font-semibold">rifat.dev@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/10 p-3 rounded-xl text-blue-500">
                <IoCall size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">
                  Phone
                </p>
                <p className="font-semibold">+880 1234-567890</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/10 p-3 rounded-xl text-blue-500">
                <IoLocationSharp size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">
                  Location
                </p>
                <p className="font-semibold">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-10">
            <p className="text-gray-500 text-sm mb-4">Connect with me</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-[#0b0f1a] border border-gray-700 rounded-full hover:text-blue-500 hover:border-blue-500 transition-all">
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-[#0b0f1a] border border-gray-700 rounded-full hover:text-blue-500 hover:border-blue-500 transition-all">
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-[#0b0f1a] border border-gray-700 rounded-full hover:text-blue-400 hover:border-blue-400 transition-all">
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-[#0b0f1a] border border-gray-700 rounded-full hover:text-blue-600 hover:border-blue-600 transition-all">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
