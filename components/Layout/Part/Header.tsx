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
  padding: 0.5rem 3rem;
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 2px transparent;
  background-image: linear-gradient(#f95d68, #fa964d), linear-gradient(101deg, #f95d68, #fa964d);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
  &:hover {
    box-shadow: none;
    color: white;
  }
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
