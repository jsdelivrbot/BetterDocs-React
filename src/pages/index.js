import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';
//import { Link } from 'gatsby'

import style from '../styles/index.module.scss'
import Layout from '../components/layout'
import Hero from '../components/hero'

const IndexPage = () => (
  <PageTransition>
  <Layout>
    <Hero />
    <div className={style.contentWrapper}
    >
    <section className={style.sectionQuote}
    >
    <div className={style.quote}
    >
    A few reasons why almost 2 million people have chosen BetterDocs.
    </div>
    </section>
    </div>
  </Layout>
  </PageTransition>
)

export default IndexPage
