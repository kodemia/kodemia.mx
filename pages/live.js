// Packages
import Layout from '../components/layout'
import ReactPlayer from 'react-player'

const playbackId = 'D4Sd017h8DWcy7QYtKt01N00VV4Hi01SESOV'
const url = 'https://stream.mux.com/' + playbackId + '.m3u8'

const Live = () => (
  <Layout title="Live :: Kodemia">
    <div className="player">
      <h2>HTML y CSS</h2>
      <ReactPlayer
        config={{
          file: {
            forceHLS: true
          }
        }}
        url={url}
        playing
        controls
      />
    </div>
  </Layout>
)

export default Live
