import React from 'react'
import styled from '@emotion/styled'

const JumbStyle = styled.section`
  background: var(--blue);
  width: 100%;
`

const Jumbotron: React.FC = props => {
  return (
    <>
      <JumbStyle>{props.children}</JumbStyle>
    </>
  )
}

export default Jumbotron
