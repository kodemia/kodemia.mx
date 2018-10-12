// Ours
import Cursor from '../../../cursor'
import Code from '../../../code'

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
          <h3>
            Features MÍNIMOS para aplica<Cursor>r</Cursor>
          </h3>
        </div>
        <div className="x:scol-12">
          <p>Primer pantalla</p>
          <ul>
            <li>
              Obtener dispositivos con bluetooth (Nombre e intensidad) y
              mostrarlos en una lista.
            </li>
            <li>
              Cada elemento en la lista tiene su botón para poder guardarlo en
              un Web Service.
            </li>
            <li>Botón a nivel pantalla para refrescar los dispositivos.</li>
            <li>
              Botón a nivel pantalla para ver la lista de datos que se han
              guardado (Segunda Pantalla).
            </li>
          </ul>
        </div>
        <div className="x:scol-12">
          <h3>
            Features DESEABLES para aplica<Cursor>r</Cursor>
          </h3>
        </div>
        <div className="x:scol-12">
          <p>Segunda Pantalla</p>
          <ul>
            <li>
              Lista con los dispositivos obtenidos de un WS (nombre, intensidad,
              fecha de creación).
            </li>
            <li>
              Se pueden ordenar los dispositivos desde la app (por fecha de
              creación).
            </li>
          </ul>
        </div>
        <div className="x:scol-12">
          <hr />
        </div>
        <div className="x:scol-12">
          <p>Puntos adicionales</p>
          <ul>
            <li>Los servicios web son de prueba, siempre regresan lo mismo.</li>
            <li>
              Desarrollar una arquitectura para soportar más pantallas, puede
              ser clean code o MVC.
            </li>
            <li>Legibilidad del código.</li>
            <li>Envio en repositorio de GitHub o Bitbucket.</li>
            <li>
              Doc adicional sobre las tareas que tuviste que hacer y el orden en
              el que las hiciste.
            </li>
          </ul>
        </div>
        <div className="x:scol-12">
          <p>Web Service</p>
          <ul>
            <li>
              <p>Lista de todos los devices</p>
              <a
                href="http://mock.westcentralus.cloudapp.azure.com/grin_test/bluetooth/all?order=1"
                target="_blank"
              >
                <p className="txt-underline">
                  [GET]
                  http://mock.westcentralus.cloudapp.azure.com/grin_test/bluetooth/all?order=1
                </p>
              </a>
            </li>
            <li>
              <p>Crear un Device</p>
              <p>
                [POST]
                http://mock.westcentralus.cloudapp.azure.com/grin_test/bluetooth/create
              </p>
              <Code>{`body: {
  "name": "{name}",
  "strength": "{-23db}"
}`}</Code>
            </li>
          </ul>
        </div>
        <div className="x:scol-12">
          <p>Notas</p>
          <ul>
            <li>
              Si hay algo que no esté claro, toma una decisión y documenta por
              qué lo resolviste de esa manera.
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
