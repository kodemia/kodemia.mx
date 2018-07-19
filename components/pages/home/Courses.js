// Packages
//..

// Ours
import CoursesList from '../../../config/Courses'
import Course from './Course'

const nextEvents = CoursesList.filter(event => !event.pastEvent)
const pastEvents = CoursesList.filter(event => event.pastEvent)

const Courses = () => (
  <section id="cursos" className="x:pad-bt-20 s:pad-bt-40 bg-grey-50">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            Cursos, Workshops y Evento<cursor>s</cursor>
          </h2>
        </div>
        <div className="x:scol-12">
          <div className="line">
            {nextEvents.map((course, i) => <Course course={course} key={i} />)}
          </div>
        </div>
        {pastEvents.length > 0 && (
          <div>
            <div className="x:scol-12 x:mrg-bottom-20 x:mrg-top-20">
              <h2>
                Eventos Anteriore<cursor>s</cursor>
              </h2>
            </div>
            <div className="x:scol-12">
              <div className="line">
                {pastEvents.map((course, i) => (
                  <Course course={course} key={i} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
)

export default Courses
