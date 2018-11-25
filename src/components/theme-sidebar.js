import React from 'react'
import theme from '../styles/theme.module.scss'
import { StaticQuery, graphql } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Sidebar = () => (
  <StaticQuery
    query={ graphql`
    query themeSidebarQuery {
      listThemes:allMarkdownRemark(filter: { collection: { eq: "themes" } }) {
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
        <section className={theme.sidebarSearch}
      >
        <div className={theme.searchContainer}
        >
          <input 
          className={theme.input}
          placeholder='Search Themes library'
          >
          </input>
          <div className={theme.searchOutput}>
            {data.listThemes.totalCount + ' Themes'}
          </div>
        </div>
        <div className={theme.Results}
        >
        {data.listThemes.edges.map(({ node }, i) => (
          <AniLink 
          className={theme.resultCard}
          activeClassName={theme.active}
          to={'themes' + node.fields.slug}
          key={node.id}
          cover
          bg="#262626"
          >
            <div className={theme.header}
            >
              <span className={theme.title}
              >
              {node.frontmatter.title}
              </span>
              <span className={theme.author}
              >
              {node.frontmatter.author}
              </span>
            </div>
            <div className={theme.description}
            >
              <p className={theme.p}
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
