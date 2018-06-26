// Packages
import Link from 'next/link'

// Ours
import CoursesList from '../../../config/Courses'

const Courses = () => (
  <section id="cursos" className="x:pad-bt-20 s:pad-bt-40 bg-grey-50">
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
              <div className="m:scol-6 l:scol-4 x:top" key={i}>
                <div
                  className={`course-card ${
                    course.comingSoon ? 'inactive' : null
                  }`}
                >
                  <div className="line">
                    <div className="s:scol-4 x:top x:center">
                      <p className="br-right">
                        <span
                          className={`x:fs-20 s:fs-40 ${
                            !course.comingSoon ? 'c-cyan-500' : null
                          }`}
                        >
                          {course.schedule.day}
                        </span>
                        <br className="x:hide s:show" />
                        <span className="x:fs-20 s:fs-28">
                          <span className="s:hide">/</span>
                          {course.schedule.month}
                        </span>
                        <br className="x:hide s:show" />
                        <span className="x:fs-20 s:fs-18">
                          <span className="s:hide">/</span>
                          {course.schedule.year}
                        </span>
                      </p>
                    </div>
                    <div className="s:scol-8 x:top x:center s:left">
                      <p>
                        <span>
                          <i className="far fa-clock" /> {course.schedule.hour}h
                        </span>
                        <br />
                        {course.comingSoon ? (
                          <span className="x:fs-20">{course.name}</span>
                        ) : (
                          <Link href={`/cursos/${course.slug}`}>
                            <a className="txt-underline x:fs-20">
                              {course.name}
                            </a>
                          </Link>
                        )}
                      </p>
                      {course.comingSoon ? (
                        <p>
                          <span className="x:fs-14 c-yellow-900">
                            Proximamente
                          </span>
                        </p>
                      ) : null}
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
