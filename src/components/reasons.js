import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import style from '../styles/reasons.module.scss'
import discord from '../images/discordcog.svg'
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
            <div className={style.row}>
                <div className={style.firstContainer} >
                    <div className={style.header}>BENEFITS</div>
                    <div className={style.title}>Ever wanted to see Discord's secret settings?</div>
                    <div className={style.description}>With the help of our talented developers from our <a href="https://discord.gg/D4cAkXX">community</a> you can install plugins to modify Discord to your knees. Look at hidden channels, hidden voice channels, server roles and more. Today is the day you can make your Discord on steroids!</div>
                </div>
                <div className={style.secondContainer}>
                    <img src={discord} alt="Discord Themes Preview"
                ></img>
                </div>
            </div>
            <div className={style.cardContainer}>
                {data.allMarkdownRemark.edges.map(({ node }, i) => (
                    <Link 
                    className={style.card} 
                    to={'/plugins' + node.fields.slug} 
                    key={node.id}>
                        <div className={style.title}>{node.frontmatter.title}</div>
                        <div className={style.excerpt}>{node.excerpt}</div>
                    </Link>
                ))}
            </div>
        </section>      
    )}
  />
)

export default Reasons