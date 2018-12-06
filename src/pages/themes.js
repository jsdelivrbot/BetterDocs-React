import React from 'react'
import Layout from '../components/layout-mobile-footer'
import theme from '../styles/theme.module.scss'
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Themes = (props) => {
  const themeList = props.data.allMarkdownRemark;
  const { totalCount } = props.data.allMarkdownRemark;
  const listCount = `${totalCount}`
  
  return (
  <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>BetterDocs | #1 Discord Themes</title>
    </Helmet>
    <div className={theme.themesContainer}
    >

    <section className={theme.contentSection}
    >

    <div className={theme.titleBar}>
      <div className={theme.count}>Themes <span>({listCount})</span></div>
      <input className={theme.input} placeholder="Search Themes library"></input>
    </div>

      <div className={theme.mainContent}
        >
          <div className={theme.wrapper}
          >
          {themeList.edges.map(({ node }, i) => (
            <div 
            className={theme.cardWrapper}
            key={node.id}
            >
              <div className={theme.imgContainer}
              >
                <img className={theme.img} alt={node.frontmatter.title} src={node.frontmatter.thumbnail} style={{backgroundImage :  `url(${node.frontmatter.thumbnail})` }}/>
              </div>
                <div>
                  <a 
                  className={theme.author}
                  href={node.frontmatter.github}
                  target="blank"
                  >{node.frontmatter.author} /</a>
                </div>
                <div className={theme.title}
                >
                <AniLink 
                to={"themes" + node.fields.slug}
                className={theme.titleLink}
                cover
                bg="#262626"
                duration={0.65}>
                {node.frontmatter.title}
                </AniLink>
                </div>
              <div className={theme.description}
              >
                <p className={theme.p}
                >{node.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
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
            title
            sub
            author
            thumbnail
            github
            download
            support
            layout
            description
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`