import React from 'react'
import style from '../styles/tags.module.scss'
import { Link, StaticQuery, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"

const pluginTags = ({ siteTitle }) => (
    <StaticQuery
    query={ graphql`
    query pluginSoftwareInfo {
        allMarkdownRemark(filter: {collection: {eq: "plugins"}}) {
        group(field: frontmatter___software) {
            fieldValue
            totalCount
        }
          edges {
            node {
              frontmatter {
                title
                software
              }
            }
          }
        }
      }      
  `}
    render={data => (
        <div className={style.tagsContainer}>
            <Link 
            className={style.tag}
            activeClassName={style.active}
            to="/plugins/"
            >All</Link>
            {data.allMarkdownRemark.group.map(software => (
                <Link 
                className={style.tag}
                activeClassName={style.active}
                to={`/plugins/softwares/${kebabCase(software.fieldValue)}/`}
                key={software.fieldValue}
                >{software.fieldValue}</Link>
            ))}
        </div>
        )}
    />
)

export default pluginTags