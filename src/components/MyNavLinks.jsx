import React from 'react';
import { NavLink } from 'react-router';

const MyNavLinks = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold pb-2 ${className} ${isActive && 'bg-linear-to-r from-[#3599e8] to-[#475ae8] bg-clip-text text-transparent border-b border-[#3599e8]'}`
      }>
      {children}
    </NavLink>
  );
};

export default MyNavLinks;