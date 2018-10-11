// Packages
import asset from 'next/asset'

// Ours
import Cursor from '../../../cursor'

const Vacancy = () => (
  <section id="vacancy" className="x:pad-bt-20 s:pad-bt-40">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            Vacante Android Developer -Gri<Cursor>n</Cursor>
          </h2>
        </div>
        <div className="x:scol-12">
          <div className="line">
            <div className="x:scol-12 x:top">
              <div className="img-pined">
                <img
                  className="img-liquid"
                  src={asset(
                    '/img/courses/android-kode-challenge/grin-vacancy.jpg'
                  )}
                  alt="Vacante"
                />
              </div>
            </div>
            <div className="x:scol-12 x:top">
              <p>
                El equipo Grin sigue creciendo y abren convocatoria junto con
                con Kodemia para arrancar Hack The Job Android Developer.
              </p>
              <br />
              <p>
                Lo que necesitas para formar parte del equipo de desarrollo Grin
                en cuanto a conocimiento y experiencia es:
              </p>
              <ul>
                <li>
                  Conocimiento avanzado en lenguaje Java con el SDK de Android
                </li>
                <li>Conocimiento avanzado de Android Studio</li>
                <li>MVC aplicado a Android</li>
                <li>Java, XML</li>
                <li>Android SDK</li>
                <li>
                  Google APIs (Firebase, Google Maps, Google Sign In, Fused
                  Location)
                </li>
                <li>Android Tests con un sistema de integración continua</li>
                <li>
                  Nice to have Kotlin, Library Injection, Python / Django, SQL
                </li>
                <li>Programación con React.JS</li>
                <li>Uso de APIs REST co</li>
                <li>
                  Babel, Webpack, NPM, etc, para creación de sitios estáticos
                </li>
                <li>Git</li>
                <li>UX es deseable</li>
                <li>
                  Básico de herramientas de diseño como Sketch, Photoshop,
                  Illustrator, etc.
                </li>
              </ul>
              <br />
              <p>Tus habilidades soft y técnicas:</p>
              <ul>
                <li>Mantener y desarrollar aplicaciones para usuario final.</li>
                <li>
                  Implementación de pruebas de integración, unitarias y UI.
                </li>
                <li>
                  Maquetación y creación de aplicaciones para uso interno.
                </li>
                <li>
                  Creación de la estructura de servicios REST para consumo
                  dentro de las
                </li>
                <li>aplicaciones.</li>
                <li>Deploy y monitoreo de aplicaciones en producción.</li>
                <li>
                  Planeación de flujos de trabajo para la integración de futuras
                </li>
                <li>
                  Uso de librerías externas para el manejo de imágenes,
                  conexiones y APIs
                </li>
                <li>de Google.</li>
                <li>Lógica de programación</li>
                <li>
                  Capacidad para trabajar en un equipo multidisciplinario{' '}
                </li>
                <li>Debes ser autodidacta</li>
                <li>
                  Tener Ownership que es el sentido de pertenencia hacia un
                  proyecto
                </li>
                <li>Adaptabilidad</li>
                <li>Compromiso </li>
                <li>Análisi de problemas</li>
              </ul>
              <br />
              <p>
                Tu lugar de trabajo será un lugar en donde surgen las ideas y se
                colabora con equipos multidisciplinarios en todo momento. El
                lugar, es la Colonia Condesa. El horario es de 9:00 a 6:00pm
                pero flexibles ya que lo importante es cumplir con los
                objetivos.
              </p>
              <p>
                El ambiente es lo mejor, hay desayuno todos los días como jugo,
                fruta y cereal. La comida la pone Grin 3 veces por semana.
              </p>
              <p>
                La oferta económica va de los 2000 USD a los 2500 USD y se te
                hara una oferta final acorde a tus conocimientos y experiencia
                además de las pre staciones de ley.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Vacancy
