import React from 'react'
import Layout from '../components/layout'
import hero from '../styles/hero.module.scss'
import plugin from '../styles/plugin.module.scss'
import { Link } from 'gatsby'
import { graphql } from "gatsby"

const Themes = (props) => {
  const themeList = props.data.listThemes;
  const themeCurrent = props.data.currentThemes;
  
  return (
  <Layout>
    <div className={plugin.pluginsContainer}
    >
      <section className={plugin.openContentWrapper}
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
        <div className={plugin.content}
          >
            <div className={plugin.wrapper}
            >
            
            <div
            className={plugin.md}
            key={themeCurrent.key}>
              {themeCurrent.html}
            </div>
            
          </div>
        </div>
      </section>
      <section className={plugin.sidebarSearch}
      >
        <div className={plugin.searchContainer}
        >
          <input 
          className={plugin.input}
          placeholder='Search themes library'
          >
          </input>
          <div className={plugin.searchOutput}>
            89 results
          </div>
        </div>
        <div className={plugin.Results}
        >
        {themeList.edges.map(({ node }, i) => (
          <Link 
          className={plugin.resultCard}
          activeClassName={plugin.active}
          to={'themes' + node.frontmatter.path}
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

    </div>
  </Layout>
)
}

export default Themes;

export const themesQuery = graphql`
  query themesQuery {
    listThemes:allMarkdownRemark(filter: { collection: { eq: "themes" } }) {
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
                ghcommentid
                date
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
        }
    }
}
`