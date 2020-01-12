import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

// 레이아웃 구성
const Sidebar = dynamic(() => import('./Part/Sidebar'))
const Header = dynamic(() => import('./Part/Header'))

// 재생 관련
const Playbar = dynamic(() => import('./Part/Playbar'))
const PlayInfo = dynamic(() => import('./Part/PlayInfo'))

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
      </MainController>
      <Playbar />
      <PlayInfo />
    </>
  )
}

export default MainLayout
