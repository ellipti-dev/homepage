module.exports = {
  siteMetadata: {
    title: "Ellipti",
    description: 'Ellipti is a cross-border accelerator (based in Korea)',
    siteUrl: 'https://www.ellipti.io',
    image: '/ellipti-og.png',
    titleTemplate: "%s | Ellipti",
    twitterUsername: 'elliptiofficial',
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T4SSCCF",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
};
