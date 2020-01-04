import React from 'react'
import styled from '@emotion/styled'
import LoginForm from '../LoginForm'

const MainController = styled.main`
  background-image: linear-gradient(#f95d68, #fa964d), linear-gradient(101deg, #f95d68, #fa964d);
  padding: 100px 80px 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  text-align: center;
  min-width: 300px;
  @media (max-width: 600px) {
    padding: 100px 30px 40px;
  }

  @media (max-width: 426px) {
    padding: 100px 20px 40px;
  }
`

const LoginLayout: React.FC = props => {
  return (
    <MainController>
      <LoginForm />
    </MainController>
  )
}

export default LoginLayout
