import React from 'react'

import style from '../styles/index.module.scss'
import Layout from '../components/layout'

const DownloadPage = () => (
  <Layout>
    <div className={style.downloadWrapper}
    >
    <a className={style.sectionQuote} target="blank" alt="BandagedBD" href="https://github.com/rauenzi/BetterDiscordApp/releases"
    >
    <div className={style.quote}
    >
    BandagedBD (recommended, page is a wip)
    </div>
    </a>
    <a className={style.sectionQuote} target="blank" alt="EnhancedDiscord" href="https://enhanceddiscord.com/"
    >
    <div className={style.quote}
    >
    EnhancedDiscord
    </div>
    </a>
    <a className={style.sectionQuote} target="blank" alt="DiscordInjections" href="https://github.com/DiscordInjections/DiscordInjections"
    >
    <div className={style.quote}
    >
    DiscordInjections
    </div>
    </a>
    <a className={style.sectionQuote} target="blank" alt="BeautifulDiscord" href="https://github.com/leovoel/BeautifulDiscord"
    >
    <div className={style.quote}
    >
    BeautifulDiscord
    </div>
    </a>
    <a className={style.sectionQuote} target="blank" alt="BetterDiscord" href="https://github.com/Jiiks/BetterDiscordApp/releases"
    >
    <div className={style.quote}
    >
    BetterDiscord
    </div>
    </a>
    </div>
  </Layout>
)

export default DownloadPage
