import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SeoPages = ({ title, children }) => {
  const { site: { siteMetadata: seo } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata{
          title
          description
          siteUrl
          keywords
        }
      }
    }
  `);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || seo.title}</title>
        <meta property="og:description" content={seo.description} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="keyword" content={seo.keywords}/>
      </Helmet>
      {children}
    </>
  );
};

export default SeoPages;
