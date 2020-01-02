import React from 'react'
import styled from '@emotion/styled'

import Jumbotron from '../Jumbotron'

const RankingStyle = styled.div`
  line-height: 1.5;
`

const MainRanking = () => {
  return (
    <>
      <Jumbotron type="main">
        <RankingStyle>
          <h1>
            시엘 뮤직
            <br />
            인기 차트
          </h1>
        </RankingStyle>
      </Jumbotron>
    </>
  )
}

export default MainRanking
