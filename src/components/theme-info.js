import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const themePageInfo = () => (
  <StaticQuery
    query={ graphql`
    query themePageInfo {
        markdownRemark(frontmatter: { title: { eq: "Upload a Theme"}}) {
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
              }
            }
          }
  `}
    render={data => (
      <>
        <div
            key={ data.markdownRemark.id }
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}
        />        
      </>
    )}
  />
)

export default themePageInfo
