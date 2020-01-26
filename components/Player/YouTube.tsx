import React from 'react'
import YouTube from 'react-youtube'
import styled from '@emotion/styled'
import { ChangeLoadState, ChangeState, setYoutube } from '../../modules/player'
import { useDispatch } from 'react-redux'

const StyledYoutubePlayer = styled.div`
  width: 100%;
`

const youtubePlayer: React.FC = React.memo(props => {
  const dispatch = useDispatch()

  const onReady = (e: any) => {
    console.log('👍 YouTube Player ready')
    dispatch(setYoutube(e.target))
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
