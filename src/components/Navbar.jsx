import React, { useState } from 'react';
import MyNavLinks from './MyNavLinks';
import { AiOutlineDownload } from 'react-icons/ai';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/skills', text: 'Skills' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
  ];

  return (
    <nav className="bg-transparent shadow py-4 relative z-50">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-[#3599e8] to-[#475ae8] bg-clip-text text-transparent">
            Rifad Hossain
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navItems.map((item, ind) => (
            <MyNavLinks key={ind} to={item.path}>
              {item.text}
            </MyNavLinks>
          ))}
        </ul>

        {/* Right Download button (Desktop) */}
        <div className="hidden lg:block">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white transition-all cursor-pointer font-medium">
            <AiOutlineDownload size={20} />
            Download CV
          </a>
        </div>

        {/* mobile a menu toggle  */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-3xl text-blue-500 cursor-pointer">
          <HiOutlineMenu />
        </button>
      </div>

      {/* mobile sidebar open hole puro page fixed dawar karone halka jhapsha ba opacity pabe r baire kotaho click korle abar sidebar dekah jabe na ease-in-out er dara cole jabe */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#0f172a] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-[60] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setOpen(false)}
              className="text-3xl text-gray-400 hover:text-white cursor-pointer">
              <HiX />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col gap-6 mb-10">
            {navItems.map((item, ind) => (
              <li key={ind} onClick={() => setOpen(false)} className="text-lg">
                <MyNavLinks to={item.path}>{item.text}</MyNavLinks>
              </li>
            ))}
          </ul>

          {/* Download CV (Mobile) */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition w-full">
            <AiOutlineDownload size={20} />
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
