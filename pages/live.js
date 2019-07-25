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
      playbackId: ''
    }
  }

  async componentDidMount() {
    const token = sessionStorage.getItem('token')

    if (!token) {
      sessionStorage.setItem('from', 'live')
      Router.replace('/login')
      return
    }

    getStreaming(token).then(playbackId => {
      this.setState({ playbackId })
    })
  }

  render() {
    const { playbackId } = this.state

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
