// Packages
import Link from 'next/link'

// Ours
import CoursesList from '../../../config/Courses'

const Courses = () => (
  <section id="cursos" className="x:pad-bt-40">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            Curso<cursor>s</cursor>
          </h2>
        </div>
        <div className="x:scol-12">
          <div className="line">
            {CoursesList.map((course, i) => (
              <div className="x:scol-4" key={i}>
                <div className="course-card">
                  <div className="line">
                    <div className="x:scol-4 x:top x:center">
                      <p className="br-right">
                        <span className="x:fs-40">{course.schedule.day}</span>
                        <br />
                        <span className="x:fs-28">{course.schedule.month}</span>
                        <br />
                        <span className="x:fs-18">{course.schedule.year}</span>
                      </p>
                    </div>
                    <div className="x:scol-8 x:top">
                      <p>
                        <span>{course.schedule.hour}h</span>
                        <br />
                        <Link href={`/cursos/${course.name}`}>
                          <a className="txt-underline x:fs-20">{course.name}</a>
                        </Link>
                        <br />
                        <br />
                        <span className="x:fs-18 c-yellow-800">
                          Proximamente
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Courses
