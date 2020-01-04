import styled from '@emotion/styled'

const Container = styled.div`
  padding: 25px 30px;
  width: 1170px;
  margin: 0 auto;

  @media (min-width: 1441px) {
    width: 1170px;
  }

  @media (max-width: 1441px) {
    width: 1025px;
  }

  @media (max-width: 1025px) {
    width: 769px;
  }

  @media (max-width: 769px) {
    width: 90%;
  }

  @media (max-width: 426px) {
    width: 95%;
  }
`

export default Container
