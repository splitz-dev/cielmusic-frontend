import React from 'react'
import Head from 'next/head'

import MainLayout from '../components/Layout/Main'
import Container from '../components/Container'

const Home: React.FC = () => (
  <>
    <Head>
      <title>홈 • Ciel Music</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout>
      <Container>ㅁㄴㅇ</Container>
    </MainLayout>
  </>
)

export default Home
