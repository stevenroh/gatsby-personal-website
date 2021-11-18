module.exports = {
  siteMetadata: {
    description: "Personal page",
    locale: "en",
    title: "Steven Roh",
    formspreeEndpoint: "https://formspree.io/f/xoqyodav",
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
