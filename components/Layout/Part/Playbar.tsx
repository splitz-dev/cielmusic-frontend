import React from 'react'
import styled from '@emotion/styled'

const StyledPlaybar = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 65px;
  background: var(--gray-700);
  box-shadow: 0px 0px 6px 1px rgba(54, 54, 54, 0.15);
  z-index: 500;
`

const Playbar = () => {
  return (
    <>
      <StyledPlaybar>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      </StyledPlaybar>
    </>
  )
}

export default Playbar
