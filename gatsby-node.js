const path = require('path')
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({actions, graphql}) => {
const { createPage } = actions;
const pluginTemplate = path.resolve('src/templates/plugin-page.js');  
const themeTemplate = path.resolve('src/templates/theme-page.js');
const tagTemplate = path.resolve("src/templates/tags.js");
const pluginstagTemplate = path.resolve("src/templates/plugin-tags.js");

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
              sub
              description
              author
              github
              download
              support
              layout
              ghcommentid
              date
              tags
              software
              images {
                image
                name
              }
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
              sub
              description
              author
              github
              download
              support
              layout
              ghcommentid
              date
              tags
              software
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
              sub
              description
              author
              github
              download
              support
              layout
              ghcommentid
              date
              tags
              software
              images {
                image
                name
              }
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
    let software = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.software")) {
        software = software.concat(edge.node.frontmatter.software)
      }
    })
    // Eliminate duplicate tags
    software = _.uniq(software)

    // Make tag pages
    software.forEach(softwares => {
      createPage({
        path: `/plugins/tags/${_.kebabCase(softwares)}/`,
        component: pluginstagTemplate,
        context: {
          softwares,
        },
      })
    })
    
    //Next set
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
    }
}