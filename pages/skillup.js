import React, { Component } from 'react'

// Components
import Layout from '../components/layout'
import HeaderCourse from '../components/pages/cursos/HeaderCourse'

class SkillUp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout title="Kodemia :: SkillUp">
        <HeaderCourse>
          <h1 className="title x:fs-22 s:fs-30 l:fs-40 c-black">
            Bootcamp White Koder
          </h1>
          <p className="desc x:fs-14 s:fs-18 l:fs-20 x:mrg-top-20 c-pink">
            Iniciate en el mundo de la programación como Full Stack Jr.
          </p>
        </HeaderCourse>
      </Layout>
    )
  }
}

export default SkillUp
