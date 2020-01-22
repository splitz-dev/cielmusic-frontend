import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { RowData } from '../../components/Table/index'

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
  const { keyword } = router.query

  const TableData: Array<RowData> = [
    {
      id: '123',
      title: '빌었어',
      artist: {
        id: 12315,
        name: '창모 (CHANGMO)',
      },
      thumb:
        'https://cdn.music-flo.com/image/album/026/281/04/04/404281026_5de0be5f.jpg?1575009888883/dims/resize/140x140/quality/90',
    },
    {
      id: '123',
      title: 'METEOR',
      artist: {
        id: 12315,
        name: '창모 (CHANGMO)',
      },
      thumb:
        'https://cdn.music-flo.com/image/album/026/281/04/04/404281026_5de0be5f.jpg?1575009888883/dims/resize/140x140/quality/90',
    },
  ]

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
            <Table data={TableData} />
          </div>
        </StyledSection>
      </Container>
    </>
  )
}

export default SearchResults
