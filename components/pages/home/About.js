// Package
import asset from 'next/asset'

// Ours
// ...

const About = () => (
  <section id="que-es-kodemia" className="x:pad-bt-20 s:pad-bt-40">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            ¿Qué es Kodemia<cursor>?</cursor>
          </h2>
        </div>
      </div>
      <div className="l:scol-7 x:top">
        <p>
          Somos una academia de desarrollo de talento en programación web y
          móvil, además de formación en diseño UI/UX, formamos a los mejores
          desarrolladores mexicanos mediante cursos intensivos (Bootcamps), una
          gran experiencia completamente personalizada que garantiza el logro de
          los objetivos de cada uno de nuestros estudiantes.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          nemo dolor neque magnam delectus accusantium beatae voluptas
          aspernatur pariatur rerum soluta sit eligendi veniam laudantium ad,
          consectetur quasi. Fugit, consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          nemo dolor neque magnam delectus.
        </p>
      </div>
      <div className="m:scol-8 m:offset-2 l:offset-0 l:scol-5 x:top">
        <div className="img-pined">
          <img
            className="img-liquid"
            src={asset('/img/default/kodemia-clase.jpg')}
            alt="Clase"
          />
        </div>
      </div>
    </div>
  </section>
)

export default About
