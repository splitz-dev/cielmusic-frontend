import React from 'react'
import styled from '@emotion/styled'

const SearchFormStyle = styled.form`
  border-radius: 100px;
  max-width: 50%;
  height: 100%;
  background: var(--gray-700);
  display: flex;
  align-items: center;
  padding: 0 5px;
  input {
    height: 100%;
    font-size: 14px;
    border: 0;
    background: transparent;
    outline: none;
  }
  button {
    background: transparent;
    border: 0;
    width: 45px;
    height: 100%;
    padding: 0;
    img {
      width: 18px;
    }
  }
`

const SearchForm: React.FC = () => {
  return (
    <SearchFormStyle>
      <button>
        <img src="/assets/search.svg" alt="Ciel Music 검색하기" />
      </button>
      <input placeholder="검색하십시오" />
    </SearchFormStyle>
  )
}

export default SearchForm
