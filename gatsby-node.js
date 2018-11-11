const path = require('path');
const _ = require("lodash")

exports.createPages = ({actions, graphql}) => {
const { createPage } = actions;
const pluginTemplate = path.resolve('src/templates/plugin-page.js');  
const themeTemplate = path.resolve('src/templates/theme-page.js');
const tagTemplate = path.resolve("src/templates/tags.js");
return graphql(`{
    plugins:allMarkdownRemark(filter: { collection: { eq: "plugins" } }) {
      group(field: collection) {
        fieldValue
        totalCount
      }
      totalCount
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
        group(field: collection) {
          fieldValue
          totalCount
        }
        totalCount
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
      },
      allMarkdownRemark {
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
      }
    }`)
    .then(res => {
    if(res.errors) {
        return Promise.reject(res.errors);
    }

    const posts = res.data.allMarkdownRemark.edges

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

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