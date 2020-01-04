import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const MainLayout = dynamic(() => import('../components/Layout/Main'))
const Container = dynamic(() => import('../components/Container'))

const Home: React.FC = () => (
  <>
    <Head>
      <title>실시간 차트 • Ciel Music</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout>
      <Container></Container>
    </MainLayout>
  </>
)

export default Home
