import React from 'react'
import Layout from '../components/layout'
import hero from '../styles/hero.module.scss'
import plugin from '../styles/plugin.module.scss'
import { Helmet } from "react-helmet";
import Sidebar from '../components/plugin-sidebar'
import Info from '../components/plugin-info'

const Plugins = (props) => {
  
  return (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>BetterDocs | #1 Discord Plugins</title>
    </Helmet>
    <div className={plugin.pluginsContainer}
    >

    <section className={plugin.contentWrapper}
    >

      <div className={hero.heroPlugins}
      >
        <div className={hero.container}
        >
          <h2 className={hero.h2}
          >
          #1 Source for Discord Plugins!
          </h2> 
          <p className={hero.p}
          >
          Custom JS plugins made by our commuity!
          </p> 
        </div>
      </div>

      <div className={plugin.content}
        >
        <div className={plugin.wrapper}
        >
        <Info />
        </div>
      </div>

    </section>


      <Sidebar />

    </div>
  </Layout>
)
}

export default Plugins;