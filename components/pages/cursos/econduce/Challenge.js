// Packages
// ...

// Ours
// ...

const Challenge = () => (
  <section id="challenge" className="x:pad-bt-20 s:pad-bt-40">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            El ret<cursor>o</cursor>
          </h2>
        </div>
        <div className="x:scol-12">
          <h3>
            Scooter más cercan<cursor>o</cursor>
          </h3>
        </div>
        <div className="x:scol-12">
          <p>
            Ayudarás a nuestros usuarios a ahorrar tiempo construyendo un
            programa que encuentre los scooters disponibles más cercanos a su
            ubicación.
          </p>
          <br />
          <p>
            Nuestra flotilla se compone de scooters en free float (estacionados
            en la calle) y dentro de estaciones. Esta información es consumida a
            través de una API RESTful que usa JSON como formato de intercambio.
            Para lograr nuestro objetivo necesitaremos:
          </p>
          <ul>
            <li>Conocer la ubicación del usuario (latitud, longitud)</li>
            <li>
              Pedir a nuestra API la lista de scooters más cercanos al usuario
            </li>
            <li>Ordenar por relevancia:</li>
            <ul>
              <li>1. Scooter más cercano a más lejano [distance]</li>
              <li>
                2. Scooter con más kilómetros de rendimiento a menos [range]
              </li>
            </ul>
            <li>
              Diferenciar entre scooters en free float y scooters en estación
              [type]
            </li>
          </ul>
        </div>
        <div className="x:scol-12">
          <h3>
            Conocer ubicación de usuari<cursor>o</cursor>
          </h3>
        </div>
        <div className="x:scol-12">
          <p>
            En una aplicación real, las coordenadas de la ubicación del usuario
            las obtendríamos usando código específico por plataforma, Android y
            iOS. Para simular este proceso, tu programa será suficientemente
            flexible para ingresar cualquier par de coordenadas para enviarlos
            como parámetros a la API.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Challenge
