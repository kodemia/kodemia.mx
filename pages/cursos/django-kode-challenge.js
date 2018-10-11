// Packages
import Layout from '../../components/layout'

// Ours
import Cursor from '../../components/cursor'

// Ours
import HeaderCourse from '../../components/pages/cursos/HeaderCourse'
import Vacancy from '../../components/pages/cursos/django-kode-challenge/Vacancy'
import Challenge from '../../components/pages/cursos/django-kode-challenge/Challenge'

const EconducePage = () => (
  <Layout title="#HackTheJob | Django Kode Challenge">
    <HeaderCourse
      title="#HackTheJob | Django Kode Challenge"
      desc="En el equipo de Desarrollo Móvil de Econduce buscamos a miembros que se sientan cómodos en un ambiente de retos diarios, que sean curiosos, apasionados por aprender y que consideren cada paso del ciclo de vida del desarrollo como una oportunidad para mejorar sus habilidades. Valoramos el código de calidad, pero sabemos cuándo aplicar cinta adhesiva al código y cuándo reconstruir."
    >
      <h1 className="c-white">
        #HackTheJob | Django Kode Challeng<Cursor white>e</Cursor>
      </h1>
    </HeaderCourse>
    <Vacancy />
    <Challenge />
  </Layout>
)

export default EconducePage
