import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Vimeo from '@u-wave/react-vimeo'

class VideoPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLive: false
    }
  }
  async componentDidMount() {
    const { id } = this.props
    const response = await fetch(`https://stream.mux.com/${id}.m3u8`)
    if (!response.ok && response.status === 412) {
      this.setState({ isLive: false })
    } else {
      this.setState({ isLive: true })
    }
  }

  render() {
    const { id, isVimeo = false } = this.props
    const { isLive } = this.state
    return (
      <>
        {!isLive && !isVimeo && <h2> El streaming aun no empieza </h2>}
        {!isVimeo && (
          <ReactPlayer
            config={{ file: { forceHLS: true } }}
            url={`https://stream.mux.com/${id}.m3u8`}
            controls
            width={'100%'}
            height={'100%'}
          />
        )}
        {isVimeo && <Vimeo video={id} />}
      </>
    )
  }
}

export default VideoPlayer
