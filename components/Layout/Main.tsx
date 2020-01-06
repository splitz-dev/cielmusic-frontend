import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('./Part/Sidebar'))
const Header = dynamic(() => import('./Part/Header'))

const Playbar = dynamic(() => import('./Part/Playbar'))

const MainController = styled.main`
  min-width: 770px;
  margin-left: 210px;
  margin-bottom: 65px;
`

const MainLayout: React.FC = props => {
  return (
    <>
      <Sidebar />
      <MainController>
        <Header />
        {props.children}
        <Playbar />
      </MainController>
    </>
  )
}

export default MainLayout
