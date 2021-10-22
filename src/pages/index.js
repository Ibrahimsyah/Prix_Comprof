import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
import { AiOutlinePhone } from '@react-icons/all-files/ai/AiOutlinePhone';

import SeoPages from '../components/SeoPages';

const Landing = () => {
  return (
    <SeoPages title="Site is Under Maintenanca | PT.Prix Company Profile Website">
      <section className="h-screen font-roboto">
        <StaticImage
          src="../assets/images/carousel-1.jpeg"
          placeholder="blurred"
          layout="fullWidth"
          className="h-full w-full object-cover"
          alt="hero-1-image"
        />
        <div className="absolute inset-0 flex flex-col justify-around items-center main-hero">
          <StaticImage
            src="../assets/images/prix_logo.png"
            layout="fixed"
            height={80}
            alt="PT.Prix Logo"
          />
          <div className="mx-40 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-light">
              This Website Is Under Maintenance
            </h1>
            <h2 className="mt-2 text-xl text-center">
              Sorry For The Inconvenience
            </h2>
          </div>
          <div className="text-center text-white">
            <h3 className="text-xl font-normal">Contact Us</h3>
            <h3>Information and Sales</h3>
            <h3>PT. Prix Berkat Abadi</h3>
            <div className="flex flex-row justify-start items-center mt-2">
              <AiOutlineMail />
              <a href="mailto:marketing@prixbi.com" className="ml-3 font-bold">
                marketing@prixbi.com
              </a>
            </div>
            <div className="flex flex-row justify-start items-center mt-1">
              <AiOutlinePhone />
              <h3 className="ml-3 font-bold">(021)-22708903</h3>
            </div>
          </div>
        </div>
      </section>
    </SeoPages>
  );
};

export default Landing;
