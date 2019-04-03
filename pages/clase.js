/* global sessionStorage */
import React, { Component } from 'react'
import Router from 'next/router'

import VideoPlayer from '../components/video-player'

class Clase extends Component {
  static getInitialProps(props) {
    const { query } = props
    const { id: playbackId } = query
    return { playbackId }
  }

  componentDidMount() {
    const token = sessionStorage.getItem('token')
    // TODO: validate if the token is valid
    if (!token) Router.replace('/login')
  }

  render() {
    const { playbackId } = this.props

    return (
      <div>
        <VideoPlayer playbackId={playbackId} />
      </div>
    )
  }
}

export default Clase
