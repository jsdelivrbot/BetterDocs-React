import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"

const pluginsTagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={title} />
    <div>
      <h1>Softwares</h1>
      <ul>
        {group.map(software => (
          <li key={software.fieldValue}>
            <Link to={`/plugins/tags/${kebabCase(software.fieldValue)}/`}>
              {software.fieldValue} ({software.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

pluginsTagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default pluginsTagsPage

export const tagsPageQuery = graphql`
  query pluginTagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___software) {
        fieldValue
        totalCount
      }
    }
  }
`