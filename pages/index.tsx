import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const MainLayout = dynamic(() => import('../components/Layout/Main'))
const Container = dynamic(() => import('../components/Container'))
const RankingJumbotron = dynamic(() => import('../components/PageComponent/RankingJumbotron'))

const Home: React.FC = () => (
  <>
    <Head>
      <title>홈 • Ciel Music</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout>
      <Container>
        <RankingJumbotron />
      </Container>
    </MainLayout>
  </>
)

export default Home
