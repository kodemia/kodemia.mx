// Packages
import asset from 'next/asset'

// Ours
import Cursor from '../../../cursor'
import Grin from '../../../../components/pages/cursos/shared/grin.md'

const Vacancy = () => (
  <section id="vacancy" className="x:pad-bt-20 s:pad-bt-40">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            Vacante Django/Phyton developer -Gri<Cursor>n</Cursor>
          </h2>
        </div>
        <div className="x:scol-12">
          <div className="line">
            <div className="x:scol-12 x:top">
              <div className="img-pined">
                <img
                  className="img-liquid"
                  src={asset(
                    '/img/courses/django-kode-challenge/grin-vacancy.jpg'
                  )}
                  alt="Vacante"
                />
              </div>
              <br />
              <br />
              <p>
                El equipo Grin sigue creciendo y abren convocatoria junto con
                Kodemia para arrancar Hack the Job Django Developer.
              </p>
            </div>
            <div className="x:scol-12">
              <div className="card">
                <Grin />
              </div>
            </div>
            <div className="x:scol-12 x:top">
              <p>
                Lo que necesitas para formar parte del equipo de desarrollo Grin
                en cuanto a conocimiento y experiencia es:
              </p>
              <br />
              <p>Conocimiento avanzado de Django (2.x) y Python (3.x)</p>
              <ul>
                <li>
                  Set de librerías de soporte para poder manejar los mecanismos
                  ya usados en Django.
                </li>
                <li>PyCharm para debugging y deployment local.</li>
                <li>Docker .</li>
                <li>HTML usando los componentes de Django.</li>
                <li>Servicios REST.</li>
                <li>Celery.</li>
                <li>Control de versiones (Git).</li>
              </ul>
              <br />
              <p>Tus habilidades soft y técnicas:</p>
              <ul>
                <li>Lógica de programación.</li>
                <li>
                  Capacidad para trabajar en un equipo multidisciplinario.
                </li>
                <li>Debes ser autodidacta.</li>
                <li>
                  Tener Ownership, que es el sentido de pertenencia hacia un
                  proyecto.
                </li>
                <li>Adaptabilidad.</li>
                <li>Compromiso .</li>
                <li>Análisis de problemas.</li>
                <li>
                  Experiencia en mantener y desarrollar sistemas en tiempo real
                  con alta disponibilidad de datos.
                </li>
                <li>
                  Planeación de manejo de grandes cantidades de información.
                </li>
                <li>Implementación de pruebas de integración y unitarias.</li>
                <li>Optimización de consultas a DB usando ORMs.</li>
                <li>
                  Configuración de herramientas para CI y automatic Deployments.
                </li>
                <li>
                  Creación de herramientas básicas para la administración de
                  datos.
                </li>
                <li>Desarrollo de casos de pruebas para testing.</li>
                <li>Conexión con servicios externos usando APIs y webhooks.</li>
              </ul>
              <br />
              <p>
                Grin es un lugar donde surgen ideas y se colabora con equipos
                multidisciplinarios en todo momento. Con oficinas en la Colonia
                Condesa, tu horario será de 9:00 am a 6:00 pm, pero contarás con
                la flexibilidad necesaria ya que lo importante es que cumplas
                con los objetivos.
              </p>
              <p>
                El ambiente es lo mejor, hay desayuno todos los días como jugo,
                fruta y cereal y Grin te invita la comida 3 veces por semana.
              </p>
              <p>
                La oferta económica va de los 2000 USD a los 2500 USD y cuenta
                con prestaciones de ley. Se te hará una oferta final acorde a
                tus conocimientos y experiencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Vacancy
