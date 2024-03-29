import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import Container from '../../components/Container'

const RegisterForm = dynamic(() => import('../../components/PageComponent/RegisterForm'))

const Login: React.FC = () => (
  <>
    <Head>
      <title>로그인 • Ciel Music</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <RegisterForm />
    </Container>
  </>
)

export default Login
