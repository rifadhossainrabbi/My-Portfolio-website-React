import React from 'react';
import HeroImage from '../../assets/image-portfolio-removebg-preview.png';
import { IoArrowForwardOutline, IoLogoGithub } from 'react-icons/io5';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
// ১. নিচের ইমপোর্টটি যোগ করা হয়েছে
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex items-center py-10 lg:py-0">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col lg:flex-row-reverse justify-between items-center gap-10">
        {/* Right side Image Section */}
        <div className="flex justify-center w-full lg:w-5/12">
          <img
            src={HeroImage}
            alt="Rifad Hossain"
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-auto max-w-sm rounded-full object-cover object-top aspect-square border-4 border-blue-500/20 shadow-2xl"
          />
        </div>

        {/* Left side section */}
        <div className="w-full lg:w-7/12 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl mb-2">
            <span className="bg-gradient-to-r from-[#7263e4] to-[#6b57ff] bg-clip-text text-transparent font-medium">
              Hi, I'm
            </span>
          </h1>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">
            Rifad Hossain
          </h1>

          {/* ২. এলাইনমেন্ট ঠিক করতে flex এবং gap যোগ করা হয়েছে */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 flex flex-wrap justify-center lg:justify-start gap-x-2">
            <span>Aspiring</span>
            <span className="bg-gradient-to-r from-[#3599e8] to-[#475ae8] bg-clip-text text-transparent font-bold">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'React Specialist',
                    'MERN Stack Developer',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h2>

          <p className="py-6 text-sm sm:text-base text-gray-400 max-w-lg mx-auto lg:mx-0">
            I build modern, responsive and user-friendly web applications with a
            focus on clean code and great user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all w-full sm:w-auto shadow-lg shadow-blue-500/30 cursor-pointer">
              View Projects <IoArrowForwardOutline size={20} />
            </button>

            <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-all w-full sm:w-auto cursor-pointer">
              Contact Me <IoArrowForwardOutline size={20} />
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <p className="mb-4 text-gray-400 font-medium">Follow me on</p>

            <div className="flex gap-5 justify-center lg:justify-start">
              <a
                href="https://github.com/rifadhossainrabbi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform text-white">
                <IoLogoGithub size={28} />
              </a>

              <a
                href="https://linkedin.com/in/rifad-hossain-rabbi-6b51443b6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform">
                <FaLinkedin size={28} color="#0A66C2" />
              </a>

              <a
                href="https://www.facebook.com/rifad.hossain.7796"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform">
                <FaFacebook size={28} color="#1877F2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
