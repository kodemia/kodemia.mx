// Package
import asset from 'next/asset'

// Ours
import Cursor from '../../cursor'

const About = () => (
  <section
    id="que-es-kodemia"
    className="x:pad-bt-20 s:pad-bt-40 bg-cover bg-gradient-white-left"
  >
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            ¿Qué es Kodemia<Cursor>?</Cursor>
          </h2>
        </div>
      </div>
      <div className="m:scol-12 l:scol-12">
        <div className="line">
          <div className="x:scol-12">
            <p className="s:fs-18">
              Transformamos la vida de las personas con experiencias extremas en
              desarrollo web. Nos sumamos a tu objetivo y te acompañamos en el
              proceso para desarrollar tu talento en programación a través de
              nuestros programas intensivos.
            </p>
            <p className="s:fs-18">
              Desarrollamos tus habilidades personales y profesionales para
              emprender o alcanzar mejores empleos.
            </p>
          </div>
          <div className="x:scol-12">
            <div className="list-numeric s:fs-18">
              <ul>
                <li number="1.">Bootcamp desarrollo web con Javascript</li>
                <li number="2.">Bootcamp desarrollo web con Python</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="x:scol-12 m:hide">
        <div className="img-pined">
          <img
            className="img-liquid"
            src={asset('/img/default/clase.jpg')}
            alt="Clase"
          />
        </div>
      </div>
    </div>
  </section>
)

export default About
