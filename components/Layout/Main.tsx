import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { LayoutChange } from '../../modules/layout'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../modules'
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
  const data = useSelector((state: RootState) => state.layout)

  const playInfo = () => {
    if (data.option === true) {
      console.log(data.option)
      return <PlayInfo />
    }
  }
  return (
    <>
      <Sidebar />
      <MainController>
        <Header />
        {props.children}
      </MainController>
      <Playbar />
      {playInfo()}
    </>
  )
}

export default MainLayout
