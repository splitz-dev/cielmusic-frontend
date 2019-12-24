import React from 'react'
import Head from 'next/head'

import styled from '@emotion/styled'

const Container = styled.div`
  font-size: 14px;
`

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <p>테스트</p>
    </Container>
  </>
)

export default Home