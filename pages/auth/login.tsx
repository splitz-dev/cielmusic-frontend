import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import MainLayout from '../../components/Layout/Main'
import Container from '../../components/Container'

const LoginForm = dynamic(() => import('../../components/PageComponent/LoginForm'))

const Login: React.FC = () => (
  <>
    <Head>
      <title>로그인 • Ciel Music</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <LoginForm />
    </Container>
  </>
)

export default Login
