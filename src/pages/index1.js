import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SeoPages from '../components/SeoPages';

const IndexPage = () => {
  return (
    <SeoPages>
      <main className="fadeIn">
        <Header />
        <section className="
          h-screen
          hero
        ">
          <StaticImage
            src="../assets/images/carousel-1.jpeg"
            placeholder="blurred"
            layout="fullWidth"
            className="h-full w-full object-cover"
            alt="hero-1-image"
          />
        </section>
        <Footer />
      </main>
    </SeoPages>
  );
};

export default IndexPage;
