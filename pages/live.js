// Packages
import Layout from '../components/layout'
import ReactPlayer from 'react-player'

const playbackId = 'gLdt7FXa43r1xPFkHS01KG00j400ok42WWS'
const url = 'https://stream.mux.com/' + playbackId + '.m3u8'

const Live = () => (
  <Layout title="Live :: Kodemia">
    <div className="player">
      <h2>Logica y pensamiento estructurado</h2>
      <ReactPlayer
        fileConfig={{
          forceHLS: true
        }}
        url={url}
        playing
        controls
      />
    </div>
  </Layout>
)

export default Live
