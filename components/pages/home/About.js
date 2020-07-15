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
      <div className="m:scol-7 l:scol-6">
        <div className="line">
          <div className="x:scol-12">
            <p className="s:fs-18">
              Transformamos la vida de las personas con experiencias extremas en
              desarrollo web. Nos sumamos a tu objetivo y te acompañamos en el
              proceso para desarrollar tu talento en programación a través de
              nuestros programas intensivos. Desarrollamos tus habilidades
              personales y profesionales para emprender o alcanzar mejores
              empleos.
            </p>
          </div>
          <div className="x:scol-12">
            {/*<p className="s:fs-18">Academia de desarrollo de talento.</p>*/}
            <div className="list-numeric s:fs-18">
              <ul>
                <li number="1.">Bootcamp desarrollo web con Javascript</li>
                <li number="2.">Bootcamp desarrollo web con Python</li>
              </ul>
            </div>
            {/*<p className="s:fs-18">
              Formamos desarrolladores mediante programas intensivos y
              experiencias completamente personalizadas.
</p>*/}
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

    <style jsx>{`
      #que-es-kodemia {
        background-image: url(/static/img/backgrounds/about.jpg);
      }
    `}</style>
  </section>
)

export default About
