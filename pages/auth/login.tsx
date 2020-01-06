import React from 'react'
import Head from 'next/head'

import LoginLayout from '../../components/PageComponent/Login'
import Container from '../../components/Container'

const Login: React.FC = () => (
  <>
    <Head>
      <title>로그인 • Ciel Music</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <LoginLayout>
      <Container>
        <Login />
      </Container>
    </LoginLayout>
  </>
)

export default Login
