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
      <div className="l:scol-6 x:top l:pad-right-50">
        <p>
          Transformamos la vida de cualquier persona con experiencias extremas
          en tecnologías de desarrollo web y móvil, activando nuevas capacidades
          para aventurar su talento en nuevos o mejores empleos y emprendimiento
          de innovación.
        </p>
        <p className="x:mrg-top-10 x:mrg-bottom-10">
          Academia de desarrollo de talento.
          <br />
          - Programación web y móvil.
          <br />
          - Formación en diseño UI/UX.
        </p>
        <p>
          Formamos desarrolladores mexicanos mediante cursos intensivos y
          experiencias completamente personalizadas.
        </p>
      </div>
      <div className="l:offset-0 l:scol-5 x:top">
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
