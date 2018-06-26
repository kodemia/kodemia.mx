// Packages
import Layout from '../components/layout'

// Ours
import HeaderHome from '../components/pages/home/Header'
import About from '../components/pages/home/About'
import Courses from '../components/pages/home/Courses'
import Contact from '../components/pages/home/Contact'

const IndexPage = () => (
  <Layout title="Kodemia :: La primera academia real para programadores">
    <HeaderHome background="header.jpg" />
    <About />
    <Courses />
    <Contact />
  </Layout>
)

export default IndexPage
