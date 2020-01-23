import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import styled from '@emotion/styled'
import { ChangeLoadState, ChangeState } from '../../modules/player'
import { useDispatch, useSelector } from 'react-redux'

const StyledYoutubePlayer = styled.div`
  width: 100%;
`

const youtubePlayer: React.FC = React.memo(props => {
  const dispatch = useDispatch()

  const onReady = () => {
    console.log('👍 YouTube Player ready')
    dispatch(ChangeLoadState(true))
  }

  const onStateChange = (event: any) => {
    dispatch(ChangeState(event.target.getPlayerState()))
  }

  return (
    <StyledYoutubePlayer>
      <YouTube
        opts={{
          width: '100px',
          height: '60px',
          playerVars: {},
        }}
        videoId="DcKa0n2LCLk"
        className="youtubePlayer"
        onReady={onReady}
        onStateChange={onStateChange}
      />
    </StyledYoutubePlayer>
  )
})

export default youtubePlayer
