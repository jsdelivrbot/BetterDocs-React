import React from 'react'
import plugin from '../styles/plugin.module.scss'
import { StaticQuery, graphql } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Tags from '../components/pluginTags'
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
              fields {
                slug
              }
              frontmatter {
                  path
                  title
                  author
                  github
                  download
                  support
                  layout
                  tags
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
          placeholder='Search Plugins library'
          >
          </input>
          <div className={plugin.searchOutput}>
            {data.listPlugins.totalCount + ' Plugins'}
          </div>
          <Tags />
        </div>
        <div className={plugin.Results}
        >
        {data.listPlugins.edges.map(({ node }, i) => (
          <AniLink 
          className={plugin.resultCard}
          activeClassName={plugin.active}
          to={'plugins' + node.fields.slug}
          key={node.id}
          cover
          bg="#262626"
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
          </AniLink>
          ))}
        </div>
      </section>
      </>
    )}
  />
)

export default Sidebar
