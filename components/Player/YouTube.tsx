import React from 'react'
import YouTube from 'react-youtube'

const youtubePlayer = () => {
  const onReady = () => {
    console.log('👍')
  }
  return (
    <>
      <YouTube
        opts={{
          width: '640',
          playerVars: {
            autoplay: 1,
          },
        }}
        onReady={onReady}
      />
    </>
  )
}

export default youtubePlayer
