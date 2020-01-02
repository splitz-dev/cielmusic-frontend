import React from 'react'
import styled from '@emotion/styled'

const JumbStyle = styled.section`
  background: linear-gradient(142deg, var(--blue-1) 0%, var(--blue-2) 100%);
  padding: 20px 30px;
  width: 100%;
  border-radius: 22px;
`

const Jumbotron: React.FC = props => {
  return (
    <>
      <JumbStyle>{props.children}</JumbStyle>
    </>
  )
}

export default Jumbotron
