import React from 'react'
import style from '../styles/plugin.module.scss'
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
        <section className={style.sidebarSearch}
      >
        <div className={style.searchContainer}
        >
          <input 
          className={style.input}
          placeholder='Search Plugins library'
          >
          </input>
          <div className={style.searchOutput}>
            {data.listPlugins.totalCount + ' Plugins'}
          </div>
          <Tags />
        </div>
        <div className={style.Results}
        >
        {data.listPlugins.edges.map(({ node }, i) => (
          <AniLink 
          className={style.resultCard}
          activeClassName={style.active}
          to={'plugins' + node.fields.slug}
          key={node.id}
          cover
          bg="#262626"
          duration={0.65}
          >
            <div className={style.header}
            >
              <span className={style.title}
              >
              {node.frontmatter.title}
              </span>
              <span className={style.author}
              >
              {node.frontmatter.author}
              </span>
            </div>
            <div className={style.description}
            >
              <p className={style.p}
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
