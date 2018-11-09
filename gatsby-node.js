const path = require('path');

exports.createPages = ({actions, graphql}) => {
const { createPage } = actions;
const pluginTemplate = path.resolve('src/templates/plugin-page.js');  
const themeTemplate = path.resolve('src/templates/theme-page.js');
return graphql(`{
    plugins:allMarkdownRemark(filter: { collection: { eq: "plugins" } }) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              author
              github
              download
              support
              layout
              ghcommentid
              date
              tags
            }
          }
        }
      },
      themes:allMarkdownRemark(filter: { collection: { eq: "themes" } }) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              author
              github
              download
              support
              layout
              ghcommentid
              date
            }
          }
        }
      }
    }`)
    .then(res => {
    if(res.errors) {
        return Promise.reject(res.errors);
    }

    res.data.plugins.edges.forEach(({ node }) => {
            createPage({
            path: '/plugins' + node.frontmatter.path,
            component: pluginTemplate,
            context: {}, // additional data can be passed via context
            })
        })

    res.data.themes.edges.forEach(({ node }) => {
        createPage({
        path: '/themes' + node.frontmatter.path,
        component: themeTemplate,
        context: {}, // additional data can be passed via context
        })
    })

    })
}
// Adds 'collection' to node
exports.onCreateNode =({ node, getNode, actions }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const { createNodeField } = actions;
        node.collection = getNode(node.parent).sourceInstanceName;
    }
}