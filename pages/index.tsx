import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Container = dynamic(() => import('../components/Container'))
const RankingJumbotron = dynamic(() => import('../components/PageComponent/Index/RankingJumbotron'))

const Home: React.FC = () => (
  <>
    <Head>
      <title>홈 • Ciel Music</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <RankingJumbotron />
    </Container>
  </>
)

export default Home
