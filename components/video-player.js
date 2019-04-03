import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ playbackId }) => (
  <ReactPlayer
    config={{ file: { forceHLS: true } }}
    url={`https://stream.mux.com/${playbackId}.m3u8`}
    controls
    width={'100%'}
    height={'100%'}
  />
)

export default VideoPlayer
