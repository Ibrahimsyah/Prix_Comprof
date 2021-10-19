import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import hamburgerIcon from '../assets/icons/hamburger.png';

const Header = () => {
  const [collapse, setCollapse] = useState(true);
  const [dropdownCollapse, setDropdownCollapse] = useState(true);
  const mainNavRef = useRef();

  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownCollapse((prev) => !prev);
  };

  return (
    <nav
      className="
          bg-purple-400
          mx-auto px-8 inset-x-0 z-10
          fixed
          inset-x-0 z-10
          transition transition-all duration-100
          flex flex-col justify-between items-center
          md:flex-row
        "
    >
      <div
        ref={mainNavRef}
        className="py-4 flex flex-row justify-between w-full md:w-auto items-center h-auto">
        <StaticImage
          src="../assets/images/prix_logo.png"
          layout="fixed"
          height={40}
          alt="PT.Prix Logo"
        />
        <img src={hamburgerIcon}
          onClick={toggleCollapse}
          className="w-auto h-8 block md:hidden cursor-pointer"/>
      </div>
      <div
        className={`
          md:flex flex-col md:flex-row md:items-center
          text-white
          my-6 md:my-0 md:mt-0
          w-full md:w-auto
          space-x-0 space-y-4 md:space-x-4 md:space-y-0
          ${collapse ? 'hidden' : 'flex'}
        `}
      >
        <Link to="/#" className="block md:inline">BERANDA</Link>
        <Link to="/#" className="block md:inline">TENTANG KAMI</Link>
        <div className="relative" onClick={toggleDropdown}>
          <p className="cursor-pointer select-none">PRODUCT</p>
          <ul
            className={`
            md:absolute 
            flex flex-col 
            p-4 rounded-md 
            md:bg-white 
            text-white md:text-black text-sm 
            space-y-3 
            ${dropdownCollapse ? 'hidden' : 'block'}`}
          >
            <Link to="/#" className="mx-2 block md:inline">PRODUK1</Link>
            <Link to="/#" className="mx-2 block md:inline">PRODUK2</Link>
            <Link to="/#" className="mx-2 block md:inline">PRODUK3</Link>
          </ul>
        </div>
        <Link to="/#" className="mx-2 block md:inline">KONTAK</Link>
      </div>
    </nav>
  );
};

export default Header;
