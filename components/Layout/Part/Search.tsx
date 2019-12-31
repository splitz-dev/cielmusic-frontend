import React from 'react'
import styled from '@emotion/styled'

const SearchFormStyle = styled.form`
  input {
    border: 0;
    background: transparent;
  }
`

const SearchForm: React.FC = () => {
  return (
    <SearchFormStyle>
      <input placeholder="Search..." />
    </SearchFormStyle>
  )
}

export default SearchForm
