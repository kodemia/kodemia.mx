// Packages
import Layout from '../components/layout'

// Ours
import HeaderHome from '../components/pages/home/Header'
import About from '../components/pages/home/About'
import Courses from '../components/pages/home/Courses'
import Events from '../components/pages/home/Events'
import Contact from '../components/pages/home/Contact'
import Allies from '../components/pages/shared/allies'

const IndexPage = () => (
  <Layout title="Kodemia :: La primera academia real para programadores">
    <HeaderHome background="#000" />
    <About />
    <Courses />
    <Events />
    <Allies />
    <Contact />
  </Layout>
)

export default IndexPage
