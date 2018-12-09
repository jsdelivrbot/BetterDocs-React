import React from 'react'
import style from '../styles/theme.module.scss'
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
                  title
                  author
                  github
                  download
                  support
                  layout
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
          placeholder={'Search ' + data.listThemes.totalCount + ' Themes'}
          >
          </input>
          <div className={style.submitDescription}>
            Want your theme featured?
          </div>
          <AniLink 
          to="/themes/upload_a_theme/"
          className={style.submitBtn}
          cover
          bg="#262626"
          duration={0.65}
          >
          Submit a Theme
          </AniLink>
        </div>
        <div className={style.Results}
        >
        {data.listThemes.edges.map(({ node }, i) => (
          <AniLink 
          className={style.resultCard}
          activeClassName={style.active}
          to={'themes' + node.fields.slug}
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
