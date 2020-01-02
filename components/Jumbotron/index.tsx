import React from 'react'
import styled from '@emotion/styled'

const JumbStyle = styled.section`
  padding: 20px 35px;
  width: 100%;
  border-radius: 22px;
  &.color-main {
    background: linear-gradient(10deg, var(--red) 0%, var(--yellow) 100%);
    color: #fff;
  }
  &.color-gray {
    background: var(--gray-500);
    color: #4c4c4c;
  }
`

const Jumbotron: React.FC = props => {
  return (
    <>
      <JumbStyle className="color-gray">{props.children}</JumbStyle>
    </>
  )
}

export default Jumbotron
