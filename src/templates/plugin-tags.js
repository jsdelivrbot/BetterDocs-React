import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout'
import Info from '../components/plugin-info'
import plugin from '../styles/plugin.module.scss'
import hero from '../styles/hero.module.scss'
import Tags from '../components/pluginTags'
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Components
import { Link, graphql } from "gatsby"

const Software = ({ pageContext, data }) => {
  const { softwares } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} plugin${
    totalCount === 1 ? "" : "s"
  } compatible with "${softwares}"`

  return (
    <Layout>
    <div className={plugin.pluginsContainer}
    >

    <section className={plugin.contentWrapper}
    >

      <div className={hero.heroPlugins}
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

      <div className={plugin.content}
        >
        <div className={plugin.wrapper}
        >
        <Info />
        </div>
      </div>

    </section>

      <section className={plugin.sidebarSearch}>
        <div className={plugin.searchContainer}>
          <input 
          className={plugin.input}
          placeholder='Search Plugins library'
          >
          </input>
          <div className={plugin.searchOutput}>
            {tagHeader}
          </div>
          <Tags />
        </div>

            <div className={plugin.Results}>
            {edges.map(({ node }) => {
          return (
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
              )
            })}
            </div>

      </section>

    </div>
    </Layout>
  )
}

Software.propTypes = {
    pageContext: PropTypes.shape({
    softwares: PropTypes.string.isRequired,
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

export default Software

export const pageQuery = graphql`
  query($softwares: String) {
    allMarkdownRemark( filter: { frontmatter: { software: { in: [$softwares] } } collection: { eq: "plugins" } } ) {
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