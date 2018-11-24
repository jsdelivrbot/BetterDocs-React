import React from 'react'
import Layout from '../components/layout'
import hero from '../styles/hero.module.scss'
import plugin from '../styles/plugin.module.scss'
import { graphql } from 'gatsby'
import Sidebar from '../components/plugin-sidebar'

const Plugins = (props) => {
  const pluginList = props.data.listPlugins;
  
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
          {pluginList.edges.map(({ node }, i) => (
            <div
            className={plugin.md}
            key={node.id}
            dangerouslySetInnerHTML={{ __html: node.html }}>
              
            </div>
          ))}
          </div>
        </div>
      </section>
      <Sidebar />

    </div>
  </Layout>
)
}

export default Plugins;

export const pluginsQuery = graphql`
  query pluginsQuery($slug: String!) {
    listPlugins:allMarkdownRemark(
      filter: {
        collection: { 
          eq: "plugins" 
        }
        fields: {
          slug: {
            eq: $slug
          }
        }
      }) {
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
            fields {
                slug
              }
            }
        }
    }
  }
`