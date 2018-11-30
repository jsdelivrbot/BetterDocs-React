import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import style from '../styles/reasons.module.scss'

const Reasons = () => (
  <StaticQuery
    query={ graphql`
    query reasonsQuery {
        allMarkdownRemark(filter: { collection: { eq: "plugins" } } limit: 3) {
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
  `}
    render={data => (
        <section className={style.reasons}>
            <div className={style.header}>Recently Added</div>
            <div className={style.description}>Here are some of our most recent plugins from the talented and hard working developers in our community.</div>
            <div className={style.cardContainer}>
                {data.allMarkdownRemark.edges.map(({ node }, i) => (
                    <div className={style.card}>
                        <Link className={style.title} to={'/plugins' + node.fields.slug}>{node.frontmatter.title}</Link>
                        <div className={style.excerpt}>{node.excerpt}</div>
                    </div>
                ))}
            </div>
        </section>      
    )}
  />
)

export default Reasons