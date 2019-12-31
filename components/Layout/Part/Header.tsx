import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

const SearchForm = dynamic(() => import('./Search'))

const HeaderElement = styled.header`
  height: 55px;
  padding: 8px 30px;
`

const SearchFormAtHeader = styled(SearchForm)`
  display: flex;
  align-items: center;
`

const Header: React.FC = () => {
  return (
    <HeaderElement>
      <SearchFormAtHeader />
    </HeaderElement>
  )
}

export default Header
