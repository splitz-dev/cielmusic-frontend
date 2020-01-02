import React from 'react'
import styled from '@emotion/styled'

const JumbStyle = styled.section`
  padding: 20px 35px;
  width: 100%;
  border-radius: 22px;
  &.main {
    background: linear-gradient(10deg, var(--red) 0%, var(--yellow) 100%);
    color: #fff;
  }
  &.gray {
    background: var(--gray-500);
    color: #4c4c4c;
  }
`

interface JumbotronI {
  type: string
  children: React.ReactNode
}

const Jumbotron: React.FC<JumbotronI> = props => {
  return (
    <>
      <JumbStyle className={props.type}>{props.children}</JumbStyle>
    </>
  )
}

export default Jumbotron
