// Packages
import Layout from '../components/layout'

// Ours
import Cursor from '../components/cursor'
import Header from '../components/header'
import Mentors from '../components/pages/mentors/mentors'

const IndexPage = () => (
  <Layout title="Mentores :: Kodemia">
    <Header background="#000">
      Nuestros Mentore<Cursor white>s</Cursor>
    </Header>
    <Mentors />
  </Layout>
)

export default IndexPage
