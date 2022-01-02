module.exports = {
  siteMetadata: {
    title: `such a gunner 👈🏼`,
    nav: [
      {
        label: "Writing",
        route: "/writing",
      },
      {
        label: "Log",
        route: "/log",
      },
      {
        label: "TIL",
        route: "/til",
      },
    ],
    description: `May the chill be with you.`,
    author: `@suchagunner`,
    siteUrl: `https://suchagunner.github.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-client-side-redirect`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `such a gunner 👈🏼`,
        short_name: `such a gunner 👈🏼`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/logo-io.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/suchagunner.github.io"
}
