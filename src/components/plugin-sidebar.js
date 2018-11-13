import React from 'react'
import plugin from '../styles/plugin.module.scss'
import { StaticQuery, graphql, Link } from 'gatsby'

const Sidebar = () => (
  <StaticQuery
    query={ graphql`
    query pluginsSidebarQuery {
      listPlugins:allMarkdownRemark(filter: { collection: { eq: "plugins" } }) {
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
              frontmatter {
                  path
                  title
                  author
                  github
                  download
                  support
                  layout
                  images {
                    image
                    name
                    }
                  }
              }
          }
      }
  }
  `}
    render={data => (
      <>
        <section className={plugin.sidebarSearch}
      >
        <div className={plugin.searchContainer}
        >
          <input 
          className={plugin.input}
          placeholder='Search plugins library'
          >
          </input>
          <div className={plugin.searchOutput}>
            {data.listPlugins.totalCount}
          </div>
        </div>
        <div className={plugin.Results}
        >
        {data.edges.forEach(({ node }) => (
          <Link 
          className={plugin.resultCard}
          activeClassName={plugin.active}
          to={'plugins' + node.frontmatter.path}
          key={node.id}
          >
            <div className={plugin.header}
            >
              <span className={plugin.title}
              >
              {node.frontmatter.title}
              </span>
              <span className={plugin.author}
              >
              {node.frontmatter.author}
              </span>
            </div>
            <div className={plugin.description}
            >
              <p className={plugin.p}
              >
                {node.excerpt}
              </p>
            </div>
          </Link>
          ))}
        </div>
      </section>
      </>
    )}
  />
)

export default Sidebar
