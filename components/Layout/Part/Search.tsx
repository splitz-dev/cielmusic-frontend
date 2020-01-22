import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Router, { useRouter } from 'next/router'

const SearchFormStyle = styled.form`
  border-radius: 100px;
  width: 400px;
  height: 100%;
  background: var(--gray-700);
  display: flex;
  align-items: center;
  padding: 0 5px;
  input {
    width: 100%;
    height: 100%;
    font-size: 14px;
    border: 0;
    background: transparent;
    outline: none;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    width: 50px;
    height: 100%;
    padding: 0;
    outline: none;
    cursor: pointer;
    img {
      width: 18px;
    }
  }
`

const SearchForm: React.FC = () => {
  const router = useRouter()
  const { keyword } = router.query

  const [input, setInput] = useState('')

  useEffect(() => {
    if (keyword && keyword !== '') {
      setInput(String(keyword))
    }
  }, [keyword])

  const atSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    Router.push('/search/빌었어')
    e.preventDefault()
  }

  const atChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <SearchFormStyle onSubmit={atSubmit}>
      <button>
        <img src="/assets/search.svg" alt="Ciel Music 검색하기" />
      </button>
      <input
        placeholder="제목, 아티스트, 앨범 등을 검색해보세요!"
        value={input}
        onChange={atChange}
      />
    </SearchFormStyle>
  )
}

export default SearchForm
