import React from 'react'
//import { Link } from 'gatsby'

import style from '../styles/index.module.scss'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Features from '../components/features'
import Reasons from '../components/reasons'

const IndexPage = () => (
  <Layout>
    <Hero />
    <div className={style.contentWrapper}
    >
    <Features />
    <section className={style.sectionQuote}
    >
      <div className={style.quote}>
      A few reasons why almost 2 million people have chosen BetterDocs.
      </div>
    </section>
    <Reasons />
    </div>
  </Layout>
)

export default IndexPage
