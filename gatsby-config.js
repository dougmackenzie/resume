module.exports = {
  siteMetadata: {
    title: `Doug MacKenzie`,
    description: `Doug MacKenzie is a front-end developer in Melbourne, Australia.`,
    author: `@dougmacknz`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`
  ]
};
