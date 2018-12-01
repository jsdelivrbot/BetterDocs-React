import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import style from '../styles/reasons.module.scss'
import discord from '../images/discordcog.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
            <div className={style.firstWrapper}>
                <div className={style.firstContainer} >
                    <div className={style.header}>BENEFITS</div>
                    <div className={style.title}>Ever wanted to see Discord's secret settings?</div>
                    <div className={style.description}>With the help of our talented developers from our <a href="https://discord.gg/D4cAkXX">community</a> you can install plugins to modify Discord to your knees. Look at hidden channels, hidden voice channels, server roles and more. Today is the day you can make your Discord on steroids!</div>
                    <AniLink className={style.unimportantBtn}
                    cover
                    bg="#262626"
                    duration={0.65}
                    >SEE ALL PLUGINS</AniLink>
                </div>
                <div className={style.secondContainer}>
                    <img src={discord} alt="Discord logo with Cogs inside"
                ></img>
                </div>
            </div>
            <div className={style.secondWrapper}>
                <div className={style.header}>RECENTLY ADDED</div>
                <div className={style.cardContainer}>
                    {data.allMarkdownRemark.edges.map(({ node }, i) => (
                        <AniLink 
                        className={style.card} 
                        to={'/plugins' + node.fields.slug} 
                        key={node.id}
                        cover
                        bg="#262626"
                        duration={0.65}>
                            <div className={style.title}>{node.frontmatter.title}</div>
                            <div className={style.excerpt}>{node.excerpt}</div>
                        </AniLink>
                    ))}
                </div>
            </div>
        </section>      
    )}
  />
)

export default Reasons