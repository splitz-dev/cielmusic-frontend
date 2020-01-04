import React from 'react'
import styled from '@emotion/styled'

import Jumbotron from '../Jumbotron'

const RankingStyle = styled.div`
  line-height: 1.4;
  h1 {
    color: #fff;
  }
`

const MainRanking: React.FC = () => {
  return (
    <>
      <Jumbotron type="main">
        <RankingStyle>
          <h1>
            현재
            <br />
            인기 있는 곡
          </h1>
        </RankingStyle>
      </Jumbotron>
    </>
  )
}

export default MainRanking
