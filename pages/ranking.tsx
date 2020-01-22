import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Container = dynamic(() => import('../components/Container'))
const RankingTable = dynamic(() => import('../components/PageComponent/Ranking/RankingTable'))

const Home: React.FC = () => (
  <>
    <Head>
      <title>실시간 차트 • Ciel Music</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <RankingTable />
    </Container>
  </>
)

export default Home
