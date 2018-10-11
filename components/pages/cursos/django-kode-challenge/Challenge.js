// Ours
import Cursor from '../../../cursor'

const Challenge = () => (
  <section id="challenge" className="x:pad-bt-20 s:pad-bt-40 bg-grey-50">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            El ret<Cursor>o</Cursor>
          </h2>
        </div>
        <div className="x:scol-12">
          <p>
            Queremos crear un servicio que le ayude a la gente a buscar e
            interactuar con lugares cerca de ellos. Este servicio backend va a
            servir a diferentes clientes como iOS, Android, y Web. Es importante
            tener en mente que no solo estamos buscando algo que funcione,
            estamos buscando algo que sea algo de calidad que se podría subir a
            producción.
          </p>
        </div>
        <div className="x:scol-12">
          <h3>
            Features MINIMOS para aplica<Cursor>r</Cursor>
          </h3>
        </div>
        <div className="x:scol-12">
          <ul>
            <li>Registrarse como usuario</li>
            <li>Hacer login</li>
            <li>
              Explorar lugares o puntos de interés dado un texto de búsqueda y
              una ubicación
              <ul>
                <li>
                  Si no hay texto, se regresan N número de lugares cercanos
                </li>
                <li>Si no hay ubicación el endpoint regresa un error</li>
                <li>
                  Los lugares deben ser reales, se puede utilizar APIs como las
                  de Google o Foursquare
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="x:scol-12">
          <h3>
            Features DESEABLES para aplica<Cursor>r</Cursor>
          </h3>
        </div>
        <div className="x:scol-12">
          <ul>
            <li>
              Cada resultado debe incluir la distancia al usuario así como la
              información del lugar
            </li>
            <li>
              Habilidad para ordenar por distancia o popularidad (desde el query
              del API)
            </li>
            <li>Soporte de paginación</li>
            <li>
              Implementar algún sistema de cache en la base de datos para no
              tener que llamar a servicios externos siempre
            </li>
            <li>
              Favoritos
              <ul>
                <li>
                  El usuario puede agregar/remover un lugar como su favorito
                </li>
                <li>
                  El usuario podrá subir una foto del lugar solo si está en sus
                  favoritos
                </li>
                <li>
                  Ver lista de otros usuarios que han marcado a un lugar como
                  favorito, con paginación
                </li>
              </ul>
            </li>
            <li>
              Favoritos de lista
              <ul>
                <li>
                  El usuario puede ver su lista de favoritos y ordenarla por
                  distancia, popularidad, o fecha en que se añadío
                </li>
                <li>Soporte de paginación</li>
              </ul>
            </li>
            <li>
              Suscripciones
              <ul>
                <li>
                  El usuario podrá pagar para suscribirse y recibir
                  notificaciones sobre lugares
                </li>
                <li>
                  El usuario recibirá un correo cuando un lugar que tenga como
                  favorito tenga un nuevo suscriptor. Solo si pago por el
                  servicio
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="x:scol-12">
          <hr />
        </div>
        <div className="x:scol-12">
          <p>Requerimientos</p>
          <ul>
            <li>
              Implementación con:
              <ul>
                <li>Django rest framework</li>
                <li>Python3</li>
                <li>Docker</li>
                <li>Optimización y uso de queries geo espaciales</li>
                <li>Integración de un procesador de pagos en México</li>
                <li>
                  Seguridad para los endpoints que lo requieran (todos excepto
                  registro y login)
                </li>
                <li>Ubicación del usuario para todos los endpoints</li>
                <li>
                  Documentación:
                  <ul>
                    <li>Como correr el servicio usando Docker</li>
                    <li>
                      Ejemplo de uso de servicios web (usando Postman o similar)
                    </li>
                    <li>Estrategia planeada para un deploy a producción</li>
                    <li>Cualquier información extra que crean relevante</li>
                  </ul>
                </li>
                <li>Unit/Integration tests para el servicio</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="x:scol-12">
          <p>Notas</p>
          <ul>
            <li>
              Si hay algo que no esté claro, decidan algo y documenten sus
              decisiones.
            </li>
            <li>
              No importa si no terminas, queremos ver tus métodos y la forma de
              resolver el ejercicio.
            </li>
            <li>
              Realiza tu ejercicio y envía un mail adjuntando tu CV y un link a
              tu repositorio con el ejercicio a Carolina Gayosso (<a
                className="txt-underline"
                href="mailto:carolina@kodemia.mx"
              >
                carolina@kodemia.mx
              </a>). Recibirás un mail confirmando tu participación en el evento
              y los siguientes pasos.
            </li>
          </ul>
          <br />
          <p className="x:fs-24 c-teal-400 x:center">¡Suerte Koder!</p>
        </div>
      </div>
    </div>
  </section>
)

export default Challenge
