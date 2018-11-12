module.exports = {
  siteMetadata: {
    title: 'BetterDocs | #1 Discord Themes & Plugins',
    siteUrl: `https://betterdocs-react.netlify.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/mobile.png",         
        // WebApp Manifest Configuration
        appName: 'BetterDocs Discord #1 Plugins & Themes', // Inferred with your package.json
        appDescription: 'A Discord enhancement project. Free quality Themes and Plugins for Discord and easy installation instructions for BetterDiscord and more!',
        developerName: 'Christopher Ramos',
        developerURL: 'https://github.com/MrRobotjs',
        dir: 'auto',
        lang: 'en-US',
        background: '#262626',
        theme_color: '#262626',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: false,
          firefox: false,
          opengraph: true,
          twitter: true,
          yandex: true,
          windows: false
        },
      },
    },
    'gatsby-plugin-netlify-cache',
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
        ignore: ['_defaults'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `plugins`,
        path: `${__dirname}/src/plugins/`,
        ignore: ['_defaults'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-image',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'BetterDocs Discord #1 Plugins & Themes',
        short_name: 'BetterDocs',
        start_url: '/',
        background_color: '#262626',
        theme_color: '#262626',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sourceMap: true,
        outFile: './src/styles/main.css',
        includePaths: ['src/styles'],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto'],
          variants: [`100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`]
        }
      }
    },
    'gatsby-transformer-remark',
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
    'gatsby-plugin-offline',
  ],
}
