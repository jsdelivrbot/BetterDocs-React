import React from 'react'
import Layout from '../components/layout-mobile-footer'
import hero from '../styles/altHero.module.scss'
import style from '../styles/plugin.module.scss'
import { graphql, Link } from 'gatsby'
import Sidebar from '../components/plugin-sidebar'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import kebabCase from "lodash/kebabCase"
import Helmet from 'react-helmet'

const Plugins = (props) => {
  const pluginList = props.data.listPlugins;
  return (
  <Layout>
    {pluginList.edges.map(({ node }, i) => ( 
    <Helmet
      key={node.id}
      title={ node.frontmatter.title + ' by ' + node.frontmatter.author + ' | BetterDocs' }
      meta={[
        { name: 'description', content: node.frontmatter.description },
        { name: 'keywords', content: 'Discord, BetterDiscord, EnhancedDiscord, TwitchCord, Discord Hacks, Hacks, Mods, Discord Themes, Themes, Discord Plugins, Plugins, Discord Bots, Bots, Discord Servers, Discord Style, Styles' },
      ]}>
      <meta property="og:site_name" content="BetterDocs"/>
      <meta property="og:title" content={node.frontmatter.title + ' by ' + node.frontmatter.author}/>
      <meta property="og:description" content={node.frontmatter.description}/>
      <meta property="og:image" content={node.frontmatter.thumbnail}/>
      <html lang="en" />
    </Helmet>
    ))}
    <div className={style.pluginsContainer}
    >
      <section className={style.openContentWrapper}
      >
      {pluginList.edges.map(({ node }, i) => (
        <div className={hero.heroPlugins}
        key={node.id}
        alt={node.frontmatter.title}
        >
        {pluginList.edges.map(({ node }, i) => (
          <div className={hero.container}
          key={node.id}
          >
            {node.frontmatter.title && <h2 className={hero.h2}>{node.frontmatter.title}</h2>}
            {node.frontmatter.author &&
              <div className={hero.paragraph}
              >
                {node.frontmatter.github ? 
                <p className={hero.p}>
                made by <a href={node.frontmatter.github} target="blank">
                {node.frontmatter.author}</a>
                </p> :
                <p className={hero.p}>
                made by <b>{node.frontmatter.author}</b>
                </p>}
              </div>
            }
            <div className={hero.detailsContainer}>
            {node.frontmatter.github &&
              <a className={hero.linkContainer} href={node.frontmatter.github} target="blank">
                <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='438.549' height='438.549' viewBox='0 0 438.549 438.549'>
                  <path d='M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z'/>
                </svg>
              </a>
              }
              {node.frontmatter.tags &&
              <div className={hero.tagContainer}>
              {pluginList.group.map(tag => (
              <Link to={`/plugins/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue} className={hero.tag}>
                {tag.fieldValue} <span>{tag.totalCount}</span>
              </Link>
              ))}
              </div>
              }
            </div>
            {node.frontmatter.author &&
            <div className={hero.statusContainer}>
              {node.frontmatter.status ?
                  <div className={hero.status}>
                    <span>Status:</span> <div className={node.frontmatter.status}>{node.frontmatter.status}</div>
                  </div>
                :
                  <div className={hero.status}>
                    <span>Status:</span> <div className={hero.unknown}>Unknown</div>
                  </div>
              }
              </div>
            }
          </div>
        ))}
        {node.frontmatter.download &&
          <div className={hero.options} key={node.id}>
            {node.frontmatter.auto ?
              <a href={'https://minhaskamal.github.io/DownGit/#/home?url=' + node.frontmatter.download} className={hero.downloadBtn} target="blank">
                {node.frontmatter.download && 
                  <span>Download</span>
                }
              </a>
              :
              <a href={node.frontmatter.download} className={hero.downloadBtn} target="blank">
                {node.frontmatter.download && 
                  <span>Download</span>
                }
              </a>
            }
            {node.frontmatter.support && <a href={node.frontmatter.support} className={hero.supportBtn} target="blank">Support</a>}
          </div>
        }
        </div>
        ))}
        <div className={style.content}
          >
          {pluginList.edges.map(({ node }, i) => (
            <div className={style.wrapper}
            key={node.id}
            >
            {node.frontmatter.thumbnail &&
            <a href={node.frontmatter.thumbnail} target="blank" className={style.imgContainer}>
              <img className={style.img} src={node.frontmatter.thumbnail} alt={node.frontmatter.title} />
            </a>
            }
              <div
              className={style.childWrapper}
              dangerouslySetInnerHTML={{ __html: node.html }}>
              </div>
              <div
              className={style.footer}
              >
                {node.frontmatter.date && 
                <div
                className={style.date}
                >
                Last edit: {node.frontmatter.date}
                </div>
                }
                <a
                className={style.edit}
                href={ 'https://github.com/MrRobotjs/BetterDocs-React/edit/master/src/plugins' + node.fields.slug + '.md'}
                >
                <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='459' height='459' viewBox='0 0 459 459'>
                    <path d='M0,362.1V459h96.9l280.5-283.05l-96.9-96.9L0,362.1z M451.35,102c10.2-10.2,10.2-25.5,0-35.7L392.7,7.649 c-10.2-10.2-25.5-10.2-35.7,0l-45.9,45.9l96.9,96.9L451.35,102z' id='create' />
                </svg> Edit this page
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Sidebar />

    </div>
    <AniLink 
    className={style.backButton}
    to="/plugins/"
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
      group(field: frontmatter___tags) {
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
                description
                sub
                author
                github
                download
                thumbnail
                support
                status
                auto
                ghcommentid
                date(formatString: "DD/MM/YYYY")
                }
            fields {
                slug
              }
            }
        }
    }
  }
`