import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import Button from '../../Button'

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

const ButtonAtHeader = styled(Button)`
  height: 100%;
`

const Header: React.FC = () => {
  return (
    <HeaderElement>
      <SearchFormAtHeader />
      <div>
        <ButtonAtHeader>로그인</ButtonAtHeader>
      </div>
    </HeaderElement>
  )
}

export default Header
