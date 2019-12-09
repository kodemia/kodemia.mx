/* global sessionStorage */

import React, { Component } from 'react'
import Router from 'next/router'
import _ from 'lodash'

// Packages
import Layout from '../components/layout'
import VideoPlayer from '../components/video-player'

import { getStreaming } from '../lib/api'

class Live extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetched: false,
      streamsList: [],
      stream: {}
    }
    this.changeGeneration = this.changeGeneration.bind(this)
  }

  async componentDidMount() {
    const token = sessionStorage.getItem('token')

    if (!token) {
      sessionStorage.setItem('from', 'live')
      Router.replace('/login')
      return
    }

    getStreaming(token).then(streamData => {
      const streamDataIsArray = Array.isArray(streamData)
      const stream = streamDataIsArray ? _.head(streamData) : streamData

      this.setState({
        isFetched: true,
        streamsList: streamDataIsArray ? streamData : [],
        stream
      })
    })
  }

  changeGeneration({ target }) {
    const { value: streamId } = target
    const { streamsList } = this.state
    const streamSelected = streamsList.find(stream => stream._id === streamId)
    this.setState({ stream: streamSelected })
  }

  render() {
    const { stream, streamsList, isFetched } = this.state

    const showGenerationSelect = !!_.head(streamsList)
    const isVimeo = !!stream.vimeoEventId

    return (
      <Layout title="Live :: Kodemia">
        <div>
          {showGenerationSelect && (
            <select
              onChange={event => this.changeGeneration(event)}
              value={stream._id}
            >
              {streamsList.map(oneStream => (
                <option value={oneStream._id} key={oneStream._id}>
                  Generación {oneStream.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="live-bg">
          <div className="live-stream">
            <h1>{stream.name}</h1>
            {!isFetched && <h3> NO Streaming </h3>}

            {isFetched && !isVimeo && (
              <div className="video-player">
                <VideoPlayer playbackId={stream.playbackId} />
              </div>
            )}

            {isFetched && isVimeo && (
              <div className="vimeo-stream-player">
                <iframe
                  src={`https://vimeo.com/event/${stream.vimeoEventId}/embed`}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  width="100%"
                  height="100%"
                />
              </div>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Live
