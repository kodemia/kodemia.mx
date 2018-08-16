// Ours
import Cursor from '../../cursor'
import CoursesList from '../../../config/courses'
import Course from '../../course'

const nextEvents = CoursesList.filter(event => !event.pastEvent)
const pastEvents = CoursesList.filter(event => event.pastEvent).reverse()

const Courses = () => (
  <section id="cursos" className="x:pad-bt-20 s:pad-bt-40 bg-grey-50">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            Curso<Cursor>s</Cursor>
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
                Eventos Anteriore<Cursor>s</Cursor>
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
