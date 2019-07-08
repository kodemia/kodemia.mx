/* global sessionStorage */

import React, { Component } from 'react'
import Router from 'next/router'

// Packages
import Layout from '../components/layout'
import VideoPlayer from '../components/video-player'

const playbackId = 'vU9N5JH02bwnQ02o9wtI2kM702aBqwgJUW3'

class Live extends Component {
  componentDidMount() {
    const token = sessionStorage.getItem('token')
    // TODO: validate if the token is valid
    if (!token) {
      sessionStorage.setItem('from', 'live')
      Router.replace('/login')
    }
  }

  render() {
    return (
      <Layout title="Live :: Kodemia">
        <div className="live-bg">
          <div className="live-stream">
            <h1>White koder 2019</h1>
            <div className="video-player">
              <VideoPlayer playbackId={playbackId} />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Live
