import React from 'react'
import style from '../styles/tags.module.scss'
import { Link } from 'gatsby'

const pluginTags = ({ siteTitle }) => (
    <div className={style.tagsContainer}
    >
        <Link 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/"
        >All</Link>
        <Link 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/softwares/bandaged-bd/"
        >BandagedBD</Link>
        <Link 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/softwares/enhanced-discord/"
        >EnhancedDiscord</Link>
        <Link 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/softwares/beautiful-discord/"
        >BeautifulDiscord</Link>
        <Link 
        className={style.tag}
        activeClassName={style.active}
        to="/plugins/softwares/discord-injections/"
        >DiscordInjections</Link>
    </div>
)

export default pluginTags