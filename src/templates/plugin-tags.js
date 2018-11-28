import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout'

// Components
import { Link, graphql } from "gatsby"

const Software = ({ pageContext, data }) => {
  const { softwares } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${softwares}"`

  return (
    <Layout>
      <div>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { title } = node.frontmatter
            const { slug } = node.fields
            return (
              <li key={slug}>
                <Link to={ '/plugins' + slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
        {/*
                This links to a page that does not yet exist.
                We'll come back to it!
              */}
        <Link to="/plugins/tags">All Softwares</Link>
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
    allMarkdownRemark(
      filter: { frontmatter: { software: { in: [$softwares] } } collection: { eq: "plugins" } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            software
          }
          fields {
            slug
          }
        }
      }
    }
  }
`