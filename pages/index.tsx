import React from 'react'
import Head from 'next/head'

import styled from '@emotion/styled'

import Sidebar from '../components/Sidebar'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <>
      <Sidebar />
      <main>
        <p>Content</p>
      </main>
    </>
  </>
)

export default Home
