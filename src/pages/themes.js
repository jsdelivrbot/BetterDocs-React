import React from 'react'
import Layout from '../components/layout'
import theme from '../styles/theme.module.scss'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";

const Themes = (props) => {
  const themeList = props.data.allMarkdownRemark;
  
  return (
  <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>BetterDocs | #1 Discord Themes</title>
    </Helmet>
    <div className={theme.pluginsContainer}
    >

    <section className={theme.contentWrapper}
    >

      <div className={theme.content}
        >
          <div className={theme.wrapper}
          >
          <p>
            Themes page WIP.
          </p>
        </div>
      </div>

    </section>


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
            89 results
          </div>
        </div>
        <div className={theme.Results}
        >
        {themeList.edges.map(({ node }, i) => (
          <Link 
          className={theme.resultCard}
          activeClassName={theme.active}
          to={'themes' + node.frontmatter.path}
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

    </div>
  </Layout>
)
}

export default Themes;

export const allThemesQuery = graphql`
  query allThemesQuery {
    allMarkdownRemark(filter: { collection: { eq: "themes" } }) {
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
`