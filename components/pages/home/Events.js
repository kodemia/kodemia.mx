// Ours
import Cursor from '../../cursor'
import EventsList from '../../../config/events'
import Event from '../../event'

const nextEvents = EventsList.filter(event => !event.pastEvent)
const pastEvents = EventsList.filter(event => event.pastEvent).reverse()

const Events = () => (
  <section
    id="cursos"
    className="x:pad-bt-20 s:pad-bt-40 bg-white bg-pattern-bottom-left"
  >
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            Próximos Evento<Cursor>s</Cursor>
          </h2>
        </div>
        <div className="x:scol-12">
          <div className="line">
            {nextEvents.map((course, i) => <Event course={course} key={i} />)}
          </div>
        </div>
        {pastEvents.length > 0 && (
          <div>
            <div className="x:scol-12 x:mrg-bottom-20 x:mrg-top-20">
              <h2>
                Eventos Anteriore<Cursor>s</Cursor>
              </h2>
            </div>
            <div className="x:scol-12">
              <div className="line">
                {pastEvents.map((course, i) => (
                  <Event course={course} key={i} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
)

export default Events
