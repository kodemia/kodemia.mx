import React, { Component } from 'react'
import Router from 'next/router'

// Packages
import Layout from '../components/layout'
import ReactPlayer from 'react-player'

const playbackId = 'D4Sd017h8DWcy7QYtKt01N00VV4Hi01SESOV'
const url = 'https://stream.mux.com/' + playbackId + '.m3u8'

class Live extends Component {
  componentDidMount() {
    const token = sessionStorage.getItem('token')
    // TODO: validate if the token is valid
    if (!token) Router.replace('/login')
  }

  render() {
    return (
      <Layout title="Live :: Kodemia">
        <div className="player">
          <h2>Git y Github</h2>
          <ReactPlayer
            config={{
              file: {
                forceHLS: true
              }
            }}
            url={url}
            controls
          />
        </div>
      </Layout>
    )
  }
}

export default Live
