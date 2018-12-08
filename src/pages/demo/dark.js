import React from 'react'
//import { Link } from 'gatsby'

import style from 'src/styles/index.module.scss'
import Layout from 'src/components/layout'
import Hero from 'src/components/hero'

const DemoPage = () => (
  <Layout>
    <Hero />
    <div className={style.contentWrapper}
    >
    <section className={style.sectionQuote}
    >
      <div className={style.quote}>
      A few reasons why almost 2 million people have chosen BetterDocs.
      </div>
    </section>
    </div>
  </Layout>
)

export default DemoPage
