import React from 'react'
import Layout from '../components/layout'
import hero from '../styles/hero.module.scss'
import style from '../styles/theme.module.scss'
import { graphql } from "gatsby"
import Sidebar from '../components/theme-sidebar'

const Themes = (props) => {
  const themeList = props.data.listThemes;
  
  return (
  <Layout>
    <div className={style.themesContainer}
    >
      <section className={style.openContentWrapper}
      >
        <div className={hero.heroPlugins}
        >
          <div className={hero.container}
          >
            <h2 className={hero.h2}
            >
            #1 Source for Discord Themes!
            </h2> 
            <p className={hero.p}
            >
            Custom CSS themes made by our commuity!
            </p> 
          </div>
        </div>
        <div className={style.content}
          >
            <div className={style.mdWrapper}
            >
            {themeList.edges.map(({ node }, i) => (
            <div
            className={style.md}
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

export default Themes;

export const themesQuery = graphql`
  query themesQuery($slug: String!) {
    listThemes:allMarkdownRemark(
      filter: { 
        collection: { 
          eq: "themes" 
        } 
        fields: {
          slug: {
            eq: $slug
          }
        }
      }
      ) {
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
                images {
                  image
                  name
                  }
                }
            fields {
                slug
              }
            }
        }
    },
    currentThemes:markdownRemark(collection: { eq: "themes" }) {
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
        images {
          image
          name
        }
      }
      fields {
        slug
      }
    }
}
`