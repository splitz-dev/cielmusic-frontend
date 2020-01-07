import React from 'react'
import styled from '@emotion/styled'

const StyledPlaybar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: calc(100% - 210px);
  height: 77px;
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
  .leftSide {
    height: 100%;
    padding: 10px;
    /* Thumbnail */
    img {
      height: 100%;
      border-radius: 12px;
    }
    .playInfo {
      display: block;
      margin-left: 15px;
      padding-bottom: 3px;
      p {
        cursor: pointer;
      }
      .title {
        font-size: 1.1rem;
        font-weight: 700;
      }
      .artist {
        font-size: 0.8rem;
      }
    }
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
        <div className="leftSide">
          <img
            src="https://i.ytimg.com/vi/jTJUF5rOXBc/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3n8Lb6zG3Oy9WqAHVZcLisK9TL45g"
            alt="METEOR - 창모"
          />
          <div className="playInfo">
            <p className="title">Kegarenouta</p>
            <p className="artist">Maigo Hanyu (하뉴 마이고)</p>
          </div>
        </div>
        <div className="playControl">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24">
            <path d="M7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1zm3.66 6.82l5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 24 24">
            <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24">
            <path d="M7.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82zM16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z" />
          </svg>
        </div>
        <div className="rightSide">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24">
            <path d="M14 6H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zM4 16h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM19 6c-1.1 0-2 .9-2 2v6.18c-.31-.11-.65-.18-1-.18-1.84 0-3.28 1.64-2.95 3.54.21 1.21 1.2 2.2 2.41 2.41 1.9.33 3.54-1.11 3.54-2.95V8h2c.55 0 1-.45 1-1s-.45-1-1-1h-2z" />
          </svg>
        </div>
      </StyledPlaybar>
    </>
  )
}

export default Playbar
