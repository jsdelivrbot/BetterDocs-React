import React from 'react'
import style from '../styles/tags.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const pluginTags = ({ siteTitle }) => (
    <div className={style.tagsContainer}
    >
        <AniLink 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/"
        cover
        bg="#262626"
        >All</AniLink>
        <AniLink 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/softwares/bandaged-bd/"
        cover
        bg="#262626"
        duration={0.65}
        >BandagedBD</AniLink>
        <AniLink 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/softwares/enhanced-discord/"
        cover
        bg="#262626"
        duration={0.65}
        >EnhancedDiscord</AniLink>
        <AniLink 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/#1"
        cover
        bg="#262626"
        duration={0.65}
        >BeautifulDiscord</AniLink>
        <AniLink 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/#1"
        cover
        bg="#262626"
        duration={0.65}
        >DiscordInjections</AniLink>
    </div>
)

export default pluginTags