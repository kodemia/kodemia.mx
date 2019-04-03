/* global sessionStorage */
import React, { Component } from 'react'
import Router from 'next/router'

import Layout from '../components/layout'
import VideoPlayer from '../components/video-player'

class Clase extends Component {
  static getInitialProps(props) {
    const { query } = props
    const { id: playbackId, title } = query
    return { playbackId, title }
  }

  componentDidMount() {
    const token = sessionStorage.getItem('token')
    // TODO: validate if the token is valid
    if (!token) {
      sessionStorage.setItem('from', 'clases')
      Router.replace('/login')
    }
  }

  render() {
    const { playbackId, title } = this.props

    return (
      <Layout title={title}>
        <div className="class-bg">
          <div className="class">
            <h1>{title}</h1>
            <div className="video-player">
              <VideoPlayer playbackId={playbackId} />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Clase
