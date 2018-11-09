import React from 'react'
import Layout from '../components/layout'
import hero from '../styles/hero.module.scss'
import plugin from '../styles/plugin.module.scss'

const Plugins = () => (
  <Layout>
    <section 
    className={hero.heroO}
    >
      <div 
      className={hero.container}
      >
        <h2 className={hero.h2}
        >
        Getting Started
        </h2> 
        <p className={hero.p}
        >
        Get started on customizing your Discord for your own good!
        </p> 
        <input 
        className={hero.input} 
        type="search" 
        id="search-input" 
        placeholder="Search..."
        >
        </input>
      </div>
    </section>
    <section className={plugin.section}
    >
    </section>
  </Layout>
)

export default Plugins
