module.exports = {
  siteMetadata: {
    description: "Personal page",
    locale: "en",
    title: "Steven Roh",
    formspreeEndpoint: "",
    showThemeLogo: false,
  },
  plugins: [
    {
      resolve: "@rohs/gatsby-theme-intro",
      options: {
        theme: "gh-inspired",
      },
    },
  ],
};
