import React from 'react'
import { Link } from 'gatsby'

import style from '../styles/index.module.scss'
import Layout from '../components/layout'

const DownloadPage = () => (
  <Layout>
    <div className={style.contentWrapper}
    >
    <section className={style.sectionQuote} alt="BandagedBD"
    >
    <Link className={style.quote} to="https://github.com/rauenzi/BetterDiscordApp/releases"
    >
    BandagedBD
    </Link>
    </section>
    <section className={style.sectionQuote} alt="EnhancedDiscord"
    >
    <Link className={style.quote} to="https://enhanceddiscord.com/"
    >
    EnhancedDiscord
    </Link>
    </section>
    <section className={style.sectionQuote} alt="DiscordInjections"
    >
    <Link className={style.quote} to="https://github.com/DiscordInjections/DiscordInjections"
    >
    DiscordInjections
    </Link>
    </section>
    <section className={style.sectionQuote} alt="BeautifulDiscord"
    >
    <Link className={style.quote} to="https://github.com/leovoel/BeautifulDiscord"
    >
    BeautifulDiscord
    </Link>
    </section>
    <section className={style.sectionQuote} alt="BetterDiscord"
    >
    <Link className={style.quote} to="https://github.com/Jiiks/BetterDiscordApp/releases"
    >
    BetterDiscord
    </Link>
    </section>
    </div>
  </Layout>
)

export default DownloadPage
