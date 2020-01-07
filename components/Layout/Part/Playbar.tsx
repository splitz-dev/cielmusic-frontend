import React from 'react'
import styled from '@emotion/styled'

const StyledPlaybar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: calc(100% - 210px);
  height: 65px;
  padding: 0 20px;
  background: var(--gray-700);
  box-shadow: 0px 0px 6px 1px rgba(54, 54, 54, 0.15);
  z-index: 500;
  .playControl {
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    svg {
      margin: 0 8px;
      cursor: pointer;
    }
    .playBtn {
      margin-left: 12px;
    }
  }
`

const Playbar = () => {
  return (
    <>
      <StyledPlaybar>
        <div className="leftSide">a</div>
        <div className="playControl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="19 20 9 12 19 4 19 20"></polygon>
            <line x1="5" y1="19" x2="5" y2="5"></line>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="playBtn"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 4 15 12 5 20 5 4" />
            <line x1="19" y1="5" x2="19" y2="19" />
          </svg>
        </div>
        <div className="rightSide">a</div>
      </StyledPlaybar>
    </>
  )
}

export default Playbar
