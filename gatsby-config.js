require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Miglionico`,
    author: `@kryptonum.studio`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
}
