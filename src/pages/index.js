import * as React from 'react';


import SeoPages from '../components/SeoPages';

import carousel1 from '../assets/images/carousel-1.jpeg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <SeoPages>
      <main>
        <Header />
        <section className="
          h-screen
          hero
        ">
          <img
            src={carousel1}
            className="
            h-full
            w-full
            object-cover
            "
          />
        </section>
        <Footer/>
      </main>
    </SeoPages>
  );
};

export default IndexPage;
