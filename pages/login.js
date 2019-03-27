// Packages
import Layout from '../components/layout'
//import Logo from '../static/img/logos/logo-h-for-white.png'
//import ReactPlayer from 'react-player'

//const playbackId = 'gLdt7FXa43r1xPFkHS01KG00j400ok42WWS'
// const url = 'https://stream.mux.com/' + playbackId + '.m3u8'

const Live = () => (
  <Layout title="Live :: Kodemia">
    <div className="login-container">
      <div className="login-card">
        <header className="login-header">
          {/*<div className="logo">
            <img src={Logo} alt="" />
            </div>*/}
          <h1 className="login-title">Bienvenid@</h1>
        </header>
        <div className="login-body">
          <input className="login-input" placeholder="Email" type="email" />
          <input
            className="login-input"
            placeholder="Password"
            type="password"
          />
        </div>
        <footer>
          <button className="login-button">Login</button>
        </footer>
      </div>
    </div>
  </Layout>
)

export default Live
