import React from 'react'
import YouTube from 'react-youtube'
import styled from '@emotion/styled'

const StyledYoutubePlayer = styled.div`
  width: 100%;
`

const youtubePlayer = () => {
  const onReady = () => {
    console.log('👍')
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
}

export default youtubePlayer
