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
      streamId: '',
      streamName: 'Kodemia live',
      isFetched: false,
      isVimeo: false,
      streamsList: [],
      generationSelected: null
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

      const isVimeo = !!stream.vimeoEventId
      const streamId = stream.playbackId || stream.vimeoEventId

      this.setState({
        streamId,
        isVimeo,
        streamName: streamData.name,
        isFetched: true,
        streamsList: streamDataIsArray ? streamData : []
      })
    })
  }

  changeGeneration({ target }) {
    const { value: generationSelected } = target
    this.setState({ generationSelected })
  }

  render() {
    const {
      streamId,
      isFetched,
      streamName,
      isVimeo,
      streamsList,
      generationSelected
    } = this.state

    const showGenerationSelect = !!_.head(streamsList)

    return (
      <Layout title="Live :: Kodemia">
        <div>
          {showGenerationSelect && (
            <select
              onChange={event => this.changeGeneration(event)}
              value={generationSelected}
            >
              {streamsList.map(stream => (
                <option
                  value={stream.generation.number}
                  key={stream.generation._id}
                >
                  Generación {stream.generation.number}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="live-bg">
          <div className="live-stream">
            <h1>{streamName}</h1>
            {!streamId && isFetched && <h3> NO Streaming </h3>}
            {streamId && isFetched && !isVimeo && (
              <div className="video-player">
                <VideoPlayer playbackId={streamId} />
              </div>
            )}
            {streamId && isVimeo && <p> Vimeo streaming </p>}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Live
