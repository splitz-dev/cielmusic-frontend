import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux'
import { RootState } from '../../modules/index'

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
  const data = useSelector((state: RootState) => state.layout.option)

  return (
    <>
      <Sidebar />
      <MainController>
        <Header />
        {props.children}
      </MainController>
      <Playbar />
      {() => {
        if (data === true) {
          return <PlayInfo />
        }
      }}
    </>
  )
}

export default MainLayout
