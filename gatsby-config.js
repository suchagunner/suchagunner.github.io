module.exports = {
  siteMetadata: {
    title: `such a gunner 👈🏼`,
    nav: [
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
    `gatsby-plugin-mdx-frontmatter`,
    {
      resolve: "gatsby-remark-external-links",
      options: {
        target: "_blank",
        rel: "noreferrer noopener",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdowns`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "ubuntu",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `such a gunner 👈🏼`,
        short_name: `such a gunner 👈🏼`,
        start_url: `/`,
        background_color: `#ebebeb`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#ebebeb`,
        display: `standalone`,
        icon: `src/images/logo-io.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-web-font-loader",
    "gatsby-plugin-mdx",
    "gatsby-remark-prismjs",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/suchagunner.github.io",
}
