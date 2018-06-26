// Packages
import asset from 'next/asset'

// Ours
// ...

const Vacancy = () => (
  <section id="vacancy" className="x:pad-bt-20 s:pad-bt-40">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            Vacante de desarollador móvi<cursor>l</cursor>
          </h2>
        </div>
        <div className="x:scol-12">
          <div className="line">
            <div className="x:scol-6 x:top">
              <p>
                Como miembro de nuestro staff tendrás la responsabilidad de
                crear una mejor experiencia de usuario en cada liberación de
                nuestra aplicación móvil, ayudando a que nuestros usuarios
                tengan la mejor experiencia de movilidad urbana.
              </p>
              <br />
              <p>
                <a
                  className="btn btn--black"
                  href={asset(
                    '/docs/courses/econduce/vacante-desarrollador-mobile.pdf'
                  )}
                  target="_blank"
                >
                  Descargar vacante
                </a>
              </p>
            </div>
            <div className="x:scol-6 x:top">
              <div className="img-pined">
                <img
                  className="img-liquid"
                  src={asset('/img/courses/econduce/flyer-econduce.png')}
                  alt="Vacante"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Vacancy
