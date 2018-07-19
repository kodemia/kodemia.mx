// Packages
import Layout from '../../components/layout'
import asset from 'next/asset'

// Ours
import HeaderCourse from '../../components/pages/cursos/HeaderCourse'
import Vacancy from '../../components/pages/cursos/econduce/Vacancy'
import Dynamic from '../../components/pages/cursos/econduce/Dynamic'
import Challenge from '../../components/pages/cursos/econduce/Challenge'
import Exercise from '../../components/pages/cursos/econduce/Exercise'
import Api from '../../components/pages/cursos/econduce/Api'

const Econduce = () => (
  <Layout title="Econduce :: Kodemia">
    <HeaderCourse
      title="#HackTheJob by Econduce"
      desc="En el equipo de Desarrollo Móvil de Econduce buscamos a miembros que se sientan cómodos en un ambiente de retos diarios, que sean curiosos, apasionados por aprender y que consideren cada paso del ciclo de vida del desarrollo como una oportunidad para mejorar sus habilidades. Valoramos el código de calidad, pero sabemos cuándo aplicar cinta adhesiva al código y cuándo reconstruir."
    >
      <img
        src={asset('/img/courses/econduce/join.png')}
        alt="Kodemia + Econduce"
        className="img-liquid"
      />
    </HeaderCourse>
    <Vacancy />
    <Dynamic />
    <Challenge />
    <Api />
    <Exercise />
  </Layout>
)

export default Econduce
