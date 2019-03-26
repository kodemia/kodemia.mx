// Packages
import Layout from '../components/layout'
import Logo from '../static/img/logos/logo-h-for-white.png'
//import ReactPlayer from 'react-player'

//const playbackId = 'gLdt7FXa43r1xPFkHS01KG00j400ok42WWS'
// const url = 'https://stream.mux.com/' + playbackId + '.m3u8'

const Live = () => (
  <Layout title="Live :: Kodemia">
    <div className="container">
      <div className="login-card">
        <header>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </header>
        <div className="card-body">
          <input placeholder="Email" type="email" />
          <input type="password" placeholder="Password" />
        </div>
        <footer>
          <button>Login</button>
        </footer>
      </div>
    </div>
  </Layout>
)

export default Live
