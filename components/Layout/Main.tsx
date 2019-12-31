import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('./Part/Sidebar'))
const Header = dynamic(() => import('./Part/Header'))

const MainController = styled.main`
  margin-left: 210px;
`

const MainLayout: React.FC = props => {
  return (
    <>
      <Sidebar />
      <MainController>
        <Header />
        {props.children}
      </MainController>
    </>
  )
}

export default MainLayout
