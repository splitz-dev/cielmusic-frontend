import React from 'react'
import Head from 'next/head'

import styled from '@emotion/styled'
import MainLayout from '../components/Layout/Main'
import Container from '../components/Container'

const Home: React.FC = () => (
  <>
    <Head>
      <title>홈 - 시엘 뮤직</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout>
      <p>
        <Container></Container>
      </p>
    </MainLayout>
  </>
)

export default Home
