import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class VideoPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLive: false
    }
  }
  async componentDidMount() {
    const { playbackId } = this.props
    const response = await fetch(`https://stream.mux.com/${playbackId}.m3u8`)
    if (!response.ok && response.status === 412) {
      this.setState({ isLive: false })
    } else {
      this.setState({ isLive: true })
    }
  }
  render() {
    const { playbackId } = this.props
    const { isLive } = this.state
    return (
      <>
        {!isLive && <h2>El streaming aun no empieza</h2>}
        {isLive && (
          <ReactPlayer
            config={{ file: { forceHLS: true } }}
            url={`https://stream.mux.com/${playbackId}.m3u8`}
            controls
            width={'100%'}
            height={'100%'}
          />
        )}
      </>
    )
  }
}

export default VideoPlayer
