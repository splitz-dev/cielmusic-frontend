import React from 'react'
import styled from '@emotion/styled'

const JumbStyle = styled.section`
  background: linear-gradient(10deg, var(--red) 0%, var(--yellow) 100%);
  padding: 20px 35px;
  width: 100%;
  border-radius: 22px;
  color: #fff;
`

const Jumbotron: React.FC = props => {
  return (
    <>
      <JumbStyle>{props.children}</JumbStyle>
    </>
  )
}

export default Jumbotron
