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
        to="/plugins/tags/bandaged-bd/"
        cover
        bg="#262626"
        >BandagedBD</AniLink>
        <AniLink 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/tags/enhanced-discord/"
        cover
        bg="#262626"
        >EnhancedDiscord</AniLink>
        <AniLink 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/#1"
        cover
        bg="#262626"
        >BeautifulDiscord</AniLink>
        <AniLink 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/#1"
        cover
        bg="#262626"
        >DiscordInjections</AniLink>
        <AniLink 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/#1"
        cover
        bg="#262626"
        >DiscordInjections</AniLink>
        <AniLink 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/#1"
        cover
        bg="#262626"
        >DiscordInjections</AniLink>
    </div>
)

export default pluginTags