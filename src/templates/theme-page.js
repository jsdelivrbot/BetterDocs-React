import React from 'react'
import Layout from '../components/layout'
import hero from '../styles/hero.module.scss'
import style from '../styles/theme.module.scss'
import { graphql } from "gatsby"
import Sidebar from '../components/theme-sidebar'
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
            {themeList.edges.map(({ node }, i) => (
            <div
            className={style.mdWrapper}
            key={node.id}
            dangerouslySetInnerHTML={{ __html: node.html }}>
            
            </div>
            ))}
        </div>
      </section>
      <Sidebar />

    </div>
    <AniLink 
    className={style.backButton}
    to="/themes/"
    cover
    bg="#262626"
    >
      <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' viewBox='0 0 240.823 240.823' width='512' height='512'>
        <path id='Chevron_Right' d='M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179 l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z' fill='#FFF' />
      </svg>
    </AniLink>
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