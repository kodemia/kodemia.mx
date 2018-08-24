// Packages
import Layout from '../components/layout'

// Ours
import Cursor from '../components/cursor'
import Header from '../components/header'
import Gallery from '../components/pages/gallery/gallery'

const IndexPage = () => (
  <Layout title="Galería :: Kodemia">
    <Header background="#000">
      Galerí<Cursor white>a</Cursor>
    </Header>
    <Gallery />
  </Layout>
)

export default IndexPage
