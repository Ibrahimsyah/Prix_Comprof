module.exports = {
  siteMetadata: {
    title: 'Prix Comprof',
    description: 'PT.Prix Company Profile',
    siteUrl: 'https://prixbi.com',
    keywords: 'Prix, PT. Prix, PT.Prix, PT.Prix Company Profile',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
  pathPrefix: '/Prix_Comprof',
};
