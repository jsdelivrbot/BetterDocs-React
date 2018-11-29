import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout'
import Info from '../components/theme-info'
import style from '../styles/theme.module.scss'
import hero from '../styles/hero.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

const Tagss = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} theme${
    totalCount === 1 ? "" : "s"
  } with the tag "${tag}"`

  return (
    <Layout>
    <div className={style.themesContainer}
    >

    <section className={style.openContentWrapper}
    >

      <div className={hero.heroThemes}
      >
        <div className={hero.container}
        >
          <h2 className={hero.h2}
          >
          #1 Source for Discord Plugins!
          </h2> 
          <p className={hero.p}
          >
          Custom JS plugins made by our commuity!
          </p> 
        </div>
      </div>

      <div className={style.content}
        >
        <div className={style.mdWrapper}
        >
        <Info />
        </div>
      </div>

    </section>

      <section className={style.sidebarSearch}>
        <div className={style.searchContainer}>
          <input 
          className={style.input}
          placeholder="Search Themes library"
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
          >
          Submit a Theme
          </AniLink>
          <div className={style.searchOutput}>
            {tagHeader}
          </div>
        </div>

            <div className={style.Results}>
            {edges.map(({ node }) => {
          return (
              <AniLink 
              className={style.resultCard}
              activeClassName={style.active}
              to={'themes' + node.fields.slug}
              key={node.id}
              cover
              bg="#262626"
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
              )
            })}
            </div>

      </section>

    </div>
    </Layout>
  )
}

Tagss.propTypes = {
    pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tagss

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark( filter: { frontmatter: { tags: { in: [$tag] } } collection: { eq: "themes" } } ) {
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
`