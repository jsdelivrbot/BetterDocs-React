import React from 'react'
import mystyles from '../styles/hero.module.scss'
import preview from '../images/discord-comparison.png'

const Hero = ({ siteTitle }) => (
  <section
    className={mystyles.hero}
  >
    <div
      className={mystyles.textContainer}
    >
        <h2 
        className={mystyles.header2}
        >The Discord Enhancement Project.
        </h2>
        <div className={mystyles.paragraph}
        >
        <p className={mystyles.p}
        >
        Custom CSS themes + JS plugins, BTTV & FFZ twitch emotes and lots of extra tools.</p>
        </div>
        <div className={mystyles.button}
        > 
            <a className={mystyles.btn} href="https://github.com/rauenzi/BetterDiscordApp/releases" target="blank"
            >Download
            </a> 
        </div>
    </div>
    <div className={mystyles.heroImage}
    >
    <img className={mystyles.heroImg} src={preview} alt="Discord Themes Preview"
    ></img>
    </div>
  </section>
)

export default Hero