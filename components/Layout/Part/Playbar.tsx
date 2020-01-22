import React from 'react'
import styled from '@emotion/styled'
import YoutubePlayer from '../../Player/YouTube'
import { LayoutChange } from '../../../modules/layout'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../modules'

const StyledPlaybar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: calc(100%);
  height: 77px;
  padding: 0 25px;
  background: var(--gray-700);
  box-shadow: 0px 0px 6px 1px rgba(54, 54, 54, 0.15);
  z-index: 1500;
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
      line-height: 1.4;
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

const Playbar: React.FC = () => {
  const dispatch = useDispatch()
  const data = useSelector((state: RootState) => state.layout)

  const fullPlaybar = () => {
    dispatch(LayoutChange())
  }

  const fullPlaybarBtn = () => {
    if (data.option === true) {
      return (
        <a href="#" onClick={fullPlaybar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" viewBox="0 0 24 24">
            <path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z" />
          </svg>
        </a>
      )
    } else {
      return (
        <a href="#" onClick={fullPlaybar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" viewBox="0 0 24 24">
            <path d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z" />
          </svg>
        </a>
      )
    }
  }

  return (
    <>
      <StyledPlaybar>
        <div className="leftSide">
          <div>
            <YoutubePlayer />
          </div>
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
        <div className="rightSide">{fullPlaybarBtn()}</div>
      </StyledPlaybar>
    </>
  )
}

export default Playbar
