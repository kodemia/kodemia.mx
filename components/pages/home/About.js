// Package
import asset from 'next/asset'

// Ours
import Cursor from '../../cursor'

const About = () => (
  <section id="que-es-kodemia" className="x:pad-bt-20 s:pad-bt-40">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            ¿Qué es Kodemia<Cursor>?</Cursor>
          </h2>
        </div>
      </div>
      <div className="l:scol-6 x:top l:pad-right-50">
        <div className="line">
          <div className="x:scol-12">
            <p className="x:fs-18">
              Transformamos la vida de cualquier persona con experiencias
              extremas en tecnologías de desarrollo web y móvil, activando
              nuevas capacidades para aventurar su talento en nuevos o mejores
              empleos y emprendimiento de innovación.
            </p>
          </div>
          <div className="x:scol-12">
            <p className="x:fs-18">Academia de desarrollo de talento.</p>
            <div className="list-numeric x:fs-18">
              <ul>
                <li number="1.">Programación web y móvil.</li>
                <li number="2.">Formación en diseño UI/UX.</li>
              </ul>
            </div>
            <p className="x:fs-18">
              Formamos desarrolladores mexicanos mediante cursos intensivos y
              experiencias completamente personalizadas.
            </p>
          </div>
        </div>
      </div>
      <div className="l:scol-6 x:top">
        <img
          className="img-liquid img-rounded"
          src={asset('/img/default/bootcamp.jpg')}
          alt="Clase"
        />
      </div>
    </div>
  </section>
)

export default About
