import React from 'react'
import { Link } from 'gatsby'

import style from '../styles/index.module.scss'
import Layout from '../components/layout'
import Hero from '../components/hero'

const IndexPage = () => (
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
)

export default IndexPage
