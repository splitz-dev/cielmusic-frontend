import React from 'react'
import styled from '@emotion/styled'

import Sidebar from '../Sidebar'

const MainController = styled.main`
  margin-left: 210px;
`

const MainLayout: React.FC = props => {
  return (
    <>
      <Sidebar />
      <MainController>{props.children}</MainController>
    </>
  )
}

export default MainLayout
