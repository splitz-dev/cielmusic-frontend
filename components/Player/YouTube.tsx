import React from 'react'
import YouTube from 'react-youtube'
import styled from '@emotion/styled'
import { ChangeLoadState } from '../../modules/player'
import { useDispatch, useSelector } from 'react-redux'

const StyledYoutubePlayer = styled.div`
  width: 100%;
`

const youtubePlayer: React.FC = React.memo(props => {
  const dispatch = useDispatch()

  const onReady = () => {
    console.log('👍 YouTube Player ready')
    dispatch(ChangeLoadState()(true))
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
      />
    </StyledYoutubePlayer>
  )
})

export default youtubePlayer
