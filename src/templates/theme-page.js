import React from 'react'
import Layout from '../components/layout'
import hero from '../styles/hero.module.scss'
import style from '../styles/theme.module.scss'
import { Link } from 'gatsby'
import { graphql } from "gatsby"

const Themes = (props) => {
  const themeList = props.data.listThemes;
  const themeCurrent = props.data.currentThemes;
  const { totalCount } = themeList;
  const listCount = `${totalCount} Theme${
    totalCount === 1 ? "" : "s"
  }`
  
  return (
  <Layout>
    <div className={style.themesContainer}
    >
      <section className={style.openContentWrapper}
      >
        <div className={hero.heroPlugins}
        >
          <div className={hero.container}
          >
            <h2 className={hero.h2}
            >
            #1 Source for Discord Themes!
            </h2> 
            <p className={hero.p}
            >
            Custom CSS themes made by our commuity!
            </p> 
          </div>
        </div>
        <div className={style.content}
          >
            <div className={style.wrapper}
            >
            
            <div
            className={style.md}
            key={themeCurrent.key}>
              {themeCurrent.html}
            </div>
            
          </div>
        </div>
      </section>
      <section className={style.sidebarSearch}
      >
        <div className={style.searchContainer}
        >
          <input 
          className={style.input}
          placeholder='Search themes library'
          >
          </input>
          <div className={style.searchOutput}>
            {listCount}
          </div>
        </div>
        <div className={style.Results}
        >
        {themeList.edges.map(({ node }, i) => (
          <Link 
          className={style.resultCard}
          activeClassName={style.active}
          to={'themes' + node.frontmatter.path}
          key={node.id}
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
          </Link>
          ))}
        </div>
      </section>

    </div>
  </Layout>
)
}

export default Themes;

export const themesQuery = graphql`
  query themesQuery {
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
    },
    currentThemes:markdownRemark(collection: { eq: "themes" }) {
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
        ghcommentid
        date
        images {
          image
          name
        }
      }
    }
}
`