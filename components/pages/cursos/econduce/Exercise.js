// Packages
// ...

// Ours
// ...

const Exercise = () => (
  <section id="exercise" className="x:pad-bt-20 s:pad-bt-40 bg-cyan-400">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            Ejercici<cursor>o</cursor>
          </h2>
        </div>
        <div className="x:scol-12">
          <p>
            Construye un programa que reciba un par de coordenadas, consuma los
            scooters más cercanos de nuestra API y los imprima en una lista con
            la información relevante, para que el usuario pueda decidir cuál le
            conviene más para viajar.
          </p>
          <p>
            Nosotros usamos C# para construir la aplicación móvil, pero tú
            puedes elegir el lenguaje en el que te sientas más cómodo para
            construir este ejercicio. Proponemos que tu código sea un programa
            de consola que pueda ejecutarse llamando al Main(). Las coordenadas
            de la ubicación del usuario se pueden asignar desde la consola o
            actualizando los valores en la función que inicia todo el proceso.
          </p>
          <p>
            Consideraremos el ejercicio como completado si tu código cumple con
            todos los requerimientos. Sin embargo, todos los proyectos serán
            tomados en cuenta, porque nos interesa más el proceso que el
            producto final.
          </p>
          <p>
            Si realizas el ejercicio antes del evento, compártenos tu
            repositorio, en caso contrario asiste al evento y realizalo con
            nosotros. Participarás en un Workshop de Xamarin GRATUITO impartido
            por Econduce el 30 de Junio de 9:00 a 17:00 hrs. en COW Revolución,
            Av. Revolución 356, San Pedro de los Pinos, CDMX.
          </p>
          <p>Confírmanos tu asistencia en el siguiente link:</p>
        </div>
        <div className="x:scol-12">
          <a
            className="btn btn--black"
            href="https://www.eventbrite.com/e/hack-the-job-econduce-by-kodemia-tickets-46962311538"
            target="_blank"
          >
            Eventbrite
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Exercise
