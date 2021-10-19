import React from 'react';
import { Link } from 'gatsby';

import logo from '../assets/images/prix_logo.png';

const Header = () => {
  return (
    <nav className="
          container
          mx-auto
          fixed
          inset-x-0
          flex
          justify-between
          items-center
          py-2
          px-8
          z-10
        ">
      <img
        src={logo}
        className="w-auto h-12"
        alt="PT.Prix Logo"
      />
      <div className="flexitems-center text-white">
        <Link to="/#" className="mx-2">BERANDA</Link>
        <Link to="/#" className="mx-2">TENTANG KAMI</Link>
        <Link to="/#" className="mx-2">PRODUK</Link>
        <Link to="/#" className="mx-2">KONTAK</Link>
      </div>
    </nav>
  );
};

export default Header;
