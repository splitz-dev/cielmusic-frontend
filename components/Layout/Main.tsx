import React from 'react'
import styled from '@emotion/styled'

import Sidebar from './Part/Sidebar'
import Header from './Part/Header'

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
