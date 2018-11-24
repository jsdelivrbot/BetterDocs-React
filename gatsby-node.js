const path = require('path')
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

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
            excerpt
            html
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
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
            excerpt
            html
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              author
              github
              download
              support
              layout
              ghcommentid
              date
              images {
                image
                name
              }
            }
          }
        }
      },
      allMarkdownRemark {
        edges {
          node {
            excerpt
            html
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
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
            path: '/plugins' + node.fields.slug,
            component: pluginTemplate,
            context: {
              slug: node.fields.slug,
            }, // additional data can be passed via context
            })
        })

    res.data.themes.edges.forEach(({ node }) => {
        createPage({
        path: '/themes' + node.fields.slug,
        component: themeTemplate,
        context: {
          slug: node.fields.slug,
        }, // additional data can be passed via context
        })
    })

    })
}
// Adds 'collection' to node
exports.onCreateNode =({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        node.collection = getNode(node.parent).sourceInstanceName;

        const relativeFilePath = createFilePath({
          node,
          getNode,
          basePath: "pages",
        })
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        // Creates new query'able field with name of 'slug'
        createNodeField({
          node,
          name: "slug",
          value: slug,
        })
        createNodeField({
          node,
          name: "path",
          value: slug,
        })
    }
}