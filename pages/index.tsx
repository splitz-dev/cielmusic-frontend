import React from 'react'
import Head from 'next/head'

import styled from '@emotion/styled'
import MainLayout from '../components/Layout/Main'

const Home: React.FC = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainLayout>
      <p>섹스</p>
    </MainLayout>
  </>
)

export default Home
