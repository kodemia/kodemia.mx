/* global sessionStorage */

import React, { Component } from 'react'
import Router from 'next/router'

// Packages
import Layout from '../components/layout'
import VideoPlayer from '../components/video-player'

import { getStreaming } from '../lib/api'

class Live extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playbackId: '',
      streamName: 'Kodemia live',
      isFetched: false
    }
  }

  async componentDidMount() {
    const token = sessionStorage.getItem('token')

    if (!token) {
      sessionStorage.setItem('from', 'live')
      Router.replace('/login')
      return
    }

    getStreaming(token).then(streamData => {
      this.setState({
        playbackId: streamData.playbackId,
        streamName: streamData.name,
        isFetched: true
      })
    })
  }

  render() {
    const { playbackId, isFetched, streamName } = this.state

    return (
      <Layout title="Live :: Kodemia">
        <div className="live-bg">
          <div className="live-stream">
            <h1>{streamName}</h1>
            {!playbackId && isFetched && <h3>NO Streaming </h3>}
            {playbackId && isFetched && (
              <div className="video-player">
                <VideoPlayer playbackId={playbackId} />
              </div>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Live
