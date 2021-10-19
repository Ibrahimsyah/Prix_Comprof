import React, { lazy, Suspense } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import SeoPages from '../components/SeoPages';

const Header = lazy(() => import('../components/Header'));
const Footer = lazy(() => import('../components/Footer'));

const IndexPage = () => {
  return (
    <SeoPages>
      <Suspense fallback={<h1>Please Wait...</h1>}>
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
          <Footer/>
        </main>
      </Suspense>
    </SeoPages>
  );
};

export default IndexPage;
