import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

const SearchForm = dynamic(() => import('./Search'))

const HeaderElement = styled.header`
  height: 55px;
  padding: 8px 30px;
  display: flex;
  justify-content: space-between;
`

const SearchFormAtHeader = styled(SearchForm)`
  display: flex;
  align-items: center;
`

const Header: React.FC = () => {
  return (
    <HeaderElement>
      <SearchFormAtHeader />
      <div></div>
    </HeaderElement>
  )
}

export default Header
