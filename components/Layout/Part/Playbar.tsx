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
  padding: 0 30px;
  background: var(--gray-700);
  box-shadow: 0px 0px 6px 1px rgba(54, 54, 54, 0.15);
  z-index: 500;
  svg {
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
  }
  .playControl {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    svg {
      margin: 0 5px;
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
          <svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0 0 24 24">
            <path d="M7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1zm3.66 6.82l5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 24 24">
            <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0 0 24 24">
            <path d="M7.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82zM16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z" />
          </svg>
        </div>
        <div className="rightSide">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24">
            <path d="M21 13h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm0-6h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm-6 10h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1zm-3-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-2.1 5.2l-1.26-1.68c-.2-.26-.59-.27-.8-.01L6.5 14.26l-.85-1.03c-.2-.25-.58-.24-.78.01l-.74.95c-.26.33-.02.81.39.81H9.5c.41 0 .65-.47.4-.8z" />
          </svg>
        </div>
      </StyledPlaybar>
    </>
  )
}

export default Playbar
