const path = require('path')
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({actions, graphql}) => {
const { createPage } = actions;
const pluginTemplate = path.resolve('src/templates/plugin-page.js');  
const pluginTagTemplate = path.resolve("src/templates/plugin-tags.js");
const pluginsSoftwareTemplate = path.resolve("src/templates/plugin-software.js");
const themeTagTemplate = path.resolve("src/templates/theme-tags.js");
const themeTemplate = path.resolve('src/templates/theme-page.js');

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
              thumbnail
              github
              download
              support
              layout
              ghcommentid
              date
              tags
              software
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
              thumbnail
              github
              download
              support
              layout
              ghcommentid
              date
              tags
              software
            }
          }
        }
      }
    }`)
    .then(res => {
    if(res.errors) {
        return Promise.reject(res.errors);
    }

    const themes = res.data.themes.edges
    const plugins = res.data.plugins.edges

    // plugins/tags/software pages:
    let software = []
    // Iterate through each post, putting all found softwares into `tags`
    _.each(plugins, edge => {
      if (_.get(edge, "node.frontmatter.software")) {
        software = software.concat(edge.node.frontmatter.software)
      }
    })
    // Eliminate duplicate softwares
    software = _.uniq(software)

    // Make software tag pages
    software.forEach(softwares => {
      createPage({
        path: `/plugins/softwares/${_.kebabCase(softwares)}/`,
        component: pluginsSoftwareTemplate,
        context: {
          softwares,
        },
      })
    })
    
    //Next set
    // Theme Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(themes, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/themes/tags/${_.kebabCase(tag)}/`,
        component: themeTagTemplate,
        context: {
          tag,
        },
      })
    })

    //Next set
    // Plugin Tag pages:
    let plugintags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(plugins, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        plugintags = plugintags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    plugintags = _.uniq(plugintags)

    // Make tag pages
    plugintags.forEach(tag => {
      createPage({
        path: `/plugins/tags/${_.kebabCase(tag)}/`,
        component: pluginTagTemplate,
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

    fmImagesToRelative(node);

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