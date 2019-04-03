import React, { Component } from 'react'
import queryString from 'query-string'

import VideoPlayer from '../components/video-player'

class Class extends Component {
  render() {
    const { playbackId, title } =
      queryString.parse(window.location.search) || {}
    return (
      <div className="class-bg">
        <div className="class">
          <h1>{title}</h1>
          <div className="video-player">
            <VideoPlayer playbackId={playbackId} />
          </div>
        </div>
      </div>
    )
  }
}

export default Class
