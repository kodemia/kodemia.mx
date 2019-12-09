import React, { Component } from 'react'
import queryString from 'query-string'

import VideoPlayer from '../components/video-player'

class Class extends Component {
  render() {
    let { id, title, isVimeo = false } =
      queryString.parse(window.location.search) || {}
    isVimeo = isVimeo === 'true' ? true : false

    return (
      <div className="class-bg">
        <div className="class">
          <h1>{title}</h1>
          <div className="video-player">
            <VideoPlayer id={id} isVimeo={isVimeo} />
          </div>
        </div>
      </div>
    )
  }
}

export default Class
