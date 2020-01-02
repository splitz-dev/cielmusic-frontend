import React from 'react'
import Head from 'next/head'

import MainLayout from '../components/Layout/Main'
import Container from '../components/Container'
import Jumbotron from '../components/Jumbotron'

const Home: React.FC = () => (
  <>
    <Head>
      <title>홈 • Ciel Music</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout>
      <Container>
        <Jumbotron>
          <h1>환영합니다</h1>
        </Jumbotron>
      </Container>
    </MainLayout>
  </>
)

export default Home
