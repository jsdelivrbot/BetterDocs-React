import React from 'react'
import theme from '../styles/theme.module.scss'
import { StaticQuery, graphql, Link } from 'gatsby'

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
          placeholder='Search themes library'
          >
          </input>
          <div className={theme.searchOutput}>
            {data.listThemes.totalCount + ' Themes'}
          </div>
        </div>
        <div className={theme.Results}
        >
        {data.listThemes.edges.map(({ node }, i) => (
          <Link 
          className={theme.resultCard}
          activeClassName={theme.active}
          to={'themes' + node.fields.slug}
          key={node.id}
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
          </Link>
          ))}
        </div>
      </section>
      </>
    )}
  />
)

export default Sidebar
