import React from 'react';
import HTMLpic from '../../assets/html-removebg-preview.png';
import CSSpic from '../../assets//css-removebg-preview.png';
import Jspic from '../../assets/javascript-removebg-preview.png';
import Tailwind from '../../assets/tailwind-removebg.png';
import Reactimg from '../../assets/react-removebg.png';
import Figmaimg from '../../assets/figma.png';
import { FaGithub } from 'react-icons/fa6';

const SkillsSection = () => {
  return (
    <div className="max-w-9/12 mx-auto py-6">
      <p className="font-semibold text-[#494b90]">02</p>
      <p className="text-xl font-bold mb-4">My Skills</p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* HTML */}
        <div className="flex flex-col justify-center items-center rounded-md p-3 bg-[#161c2a] hover:scale-105 transition">
          <img src={HTMLpic} className="w-20 sm:w-[100px]" alt="HTML5" />
          <p className="mt-2">HTML5</p>
        </div>

        {/* CSS */}
        <div className="flex flex-col justify-center items-center rounded-md p-3 bg-[#161c2a] hover:scale-105 transition">
          <img src={CSSpic} className="w-20 sm:w-[90px]" alt="CSS3" />
          <p className="mt-2">CSS3</p>
        </div>

        {/* JS */}
        <div className="flex flex-col justify-center items-center rounded-md p-3 bg-[#161c2a] hover:scale-105 transition">
          <img src={Jspic} className="w-24 sm:w-[120px]" alt="Javascript" />
          <p className="mt-2">Javascript</p>
        </div>

        {/* Tailwind */}
        <div className="flex flex-col justify-center items-center rounded-md p-3 bg-[#161c2a] hover:scale-105 transition">
          <img
            src={Tailwind}
            className="w-24 sm:w-[110px]"
            alt="Tailwind CSS"
          />
          <p className="mt-2">Tailwind CSS</p>
        </div>

        {/* React */}
        <div className="flex flex-col justify-center items-center rounded-md p-3 bg-[#161c2a] hover:scale-105 transition">
          <img src={Reactimg} className="w-20 sm:w-[80px]" alt="React" />
          <p className="mt-2">React</p>
        </div>

        {/* GitHub */}
        <div className="flex flex-col justify-center items-center rounded-md p-3 bg-[#161c2a] hover:scale-105 transition">
          <FaGithub size={60} />
          <p className="mt-2">Git & Github</p>
        </div>

        {/* Figma */}
        <div className="flex flex-col justify-center items-center rounded-md p-3 bg-[#161c2a] hover:scale-105 transition">
          <img src={Figmaimg} className="w-20 sm:w-[80px]" alt="Figma" />
          <p className="mt-2">Figma</p>
        </div>

        {/* ⭐ NEXT.JS PROFESSIONAL LEARNING CARD */}
        <div className="relative flex flex-col justify-center items-center rounded-md p-3 bg-[#161c2a] hover:scale-105 transition overflow-hidden">
          {/* soft glow background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,153,232,0.25),transparent_60%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(71,90,232,0.20),transparent_60%)] animate-pulse"></div>
          </div>

          {/* animated border */}
          <div className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-[#3599e8] via-[#475ae8] to-[#3599e8] opacity-40 animate-spin-slow"></div>

          {/* inner bg */}
          <div className="absolute inset-[2px] bg-[#161c2a] rounded-md"></div>

          {/* glow dot */}
          <div className="absolute w-20 h-20 bg-[#3599e8]/10 blur-2xl rounded-full"></div>

          {/* Learning badge */}
          <span className="absolute top-2 right-2 text-[11px] px-2 py-[2px] rounded-full bg-[#3599e8]/15 text-[#3599e8] border border-[#3599e8]/30 z-10">
            Learning
          </span>

          {/* N icon */}
          <div
            className="relative w-16 h-16 flex items-center justify-center rounded-full bg-black text-white text-xl font-bold z-10
            shadow-[0_0_15px_#3599e8,0_0_30px_#475ae8]">
            N
          </div>

          {/* text */}
          <p className="mt-2 text-transparent bg-clip-text bg-linear-to-r from-[#3599e8] to-[#475ae8] font-semibold z-10">
            Next.js
          </p>
        </div>
      </div>

      <div className="divider max-w-full mx-auto"></div>
    </div>
  );
};

export default SkillsSection;
