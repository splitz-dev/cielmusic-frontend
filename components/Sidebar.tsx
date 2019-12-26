import React from 'react'
import styled from '@emotion/styled'

interface Props {}

const SidebarElement = styled.aside`
  background: var(--gray-700);
`

const Sidebar: React.SFC<Props> = () => {
  return (
    <>
      <SidebarElement></SidebarElement>
    </>
  )
}

export default Sidebar
