// Packages
import Layout from '../components/layout'

// Ours
import HeaderHome from '../components/pages/home/Header'
import Courses from '../components/pages/home/Courses'

const IndexPage = () => (
  <Layout title="Kodemia :: La primera academia real para programadores">
    <HeaderHome background="header.jpg" />
    <Courses />
  </Layout>
)

export default IndexPage
