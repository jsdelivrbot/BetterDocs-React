module.exports = {
  siteMetadata: {
    title: `BetterDocs | #1 Discord Themes & Plugins`,
    siteUrl: `https://betterdocs-react.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#339b78`, // Setting a color is optional.
        showSpinner: false, // Disable the loading spinner.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `themes`,
        path: `${__dirname}/src/themes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `plugins`,
        path: `${__dirname}/src/plugins/`,
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
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
        publicPath: `admin`,
        htmlTitle: `Content Manager`,
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BetterDocs Discord #1 Plugins & Themes`,
        short_name: `BetterDocs`,
        start_url: `/`,
        background_color: `#262626`,
        theme_color: `#262626`,
        display: `standalone`,
        icon: `src/images/mobile.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sourceMap: true,
        outFile: `./src/styles/main.css`,
        includePaths: [`src/styles`],
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Roboto`],
          variants: [`100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`]
        }
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        //allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        //mergeSecurityHeaders: true, // boolean to turn off the default security headers
        //mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        //mergeCachingHeaders: true, // boolean to turn off the default caching headers
        //transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        //generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    `gatsby-plugin-offline`,
  ],
}
