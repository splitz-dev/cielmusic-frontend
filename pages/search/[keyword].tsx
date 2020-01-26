import React, { useEffect } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { searchAsync } from '../../modules/search'
import { RootState } from '../../modules'

const Table = dynamic(() => import('../../components/Table'))
const Container = dynamic(() => import('../../components/Container'))

const StyledSection = styled.div`
  .titleSection {
    h1 {
      font-weight: 400;
      font-size: 1.12rem;
    }
  }
`

const SearchResults: React.FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { keyword } = router.query
  useEffect(() => {
    dispatch(searchAsync.request({ query: keyword as string }))
  }, [keyword])
  const { data } = useSelector((state: RootState) => state.search.search)
  return (
    <>
      <Head>
        <title>실시간 차트 • Ciel Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <StyledSection>
          <div className="titleSection">
            <h1>'{keyword}'에 대한 검색 결과입니다.</h1>
          </div>
          <div className="searchResultSection">
            <Table data={data ? data.result.music[0] : null} />
          </div>
        </StyledSection>
      </Container>
    </>
  )
}

export default SearchResults
