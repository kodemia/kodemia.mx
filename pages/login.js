// Packages
import Layout from '../components/layout'
//import ReactPlayer from 'react-player'

//const playbackId = 'gLdt7FXa43r1xPFkHS01KG00j400ok42WWS'
// const url = 'https://stream.mux.com/' + playbackId + '.m3u8'

const Live = () => (
  <Layout title="Live :: Kodemia">
    <div className="container">
      <div className="login-card">
        <header>
          <div className="title">Kodemia Title</div>
          <div className="logo">
            <img src="" alt="" />
          </div>
        </header>
        <div className="card-body">
          <input type="email" />
          <input type="password" />
        </div>
        <footer>
          <button>Login</button>
        </footer>
      </div>
    </div>
  </Layout>
)

export default Live
