import React from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import Container from '../../Container/index'

const YoutubePlayer = dynamic(() => import('../../Player/YouTube'))

const StyledPlayInfo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 77px; /* playbar height */
  background: #f3f3f3;
  z-index: 1100;

  display: flex;
  flex: 1 1 auto;

  section {
    width: 50%;
    float: left;
  }

  .player {
    display: flex;
    height: 100%;
    border-right: 1px solid #f7f7f7;
    .albumArt {
      width: 410px;
      height: 410px;
    }
  }
`

/**
 * PlayerTypes:
 * 0: YouTube, 1: Local
 */

const PlayInfo: React.FC<PlayInfoI> = props => {
  return (
    <>
      <StyledPlayInfo>
        <Container>
          <section className="player">
            <div className="albumArt"></div>
            <div className="songInfo"></div>
          </section>
          <section className="playlist"></section>
        </Container>
      </StyledPlayInfo>
    </>
  )
}

interface PlayInfoI {
  type?: number
}

PlayInfo.defaultProps = {
  type: 0,
}

export default PlayInfo
