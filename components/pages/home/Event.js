// Packages
import Link from 'next/link'

function isURL(str) {
  var pattern = new RegExp('^https?')

  return pattern.test(str)
}

const CourseLink = ({ course }) => (
  <div>
    {isURL(course.link) ? (
      <a href={course.link} target="_blank" className="txt-underline x:fs-20">
        {course.name}
      </a>
    ) : (
      <Link href={course.link}>
        <a className="txt-underline x:fs-20">{course.name}</a>
      </Link>
    )}
  </div>
)

const Course = ({ course }) => (
  <div className="x:scol-12 x:top">
    <div className={`course-card ${course.pastEvent ? 'inactive' : null}`}>
      <div className="line">
        <div className="s:scol-2 x:top x:center">
          <p className="br-right">
            <span
              className={`x:fs-20 s:fs-40 ${
                course.pastEvent ? 'c-black-500' : null
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
        <div className="s:scol-10 x:top x:center s:left">
          <p className="x:pad-top-0">
            <i className="far fa-clock" /> {course.schedule.hour}h
          </p>
          {course.link === undefined ? (
            <span className="x:fs-20">{course.name}</span>
          ) : (
            <CourseLink course={course} />
          )}
          {course.desc !== undefined ? <p>{course.desc}</p> : null}
          {course.comingSoon ? (
            <p>
              <span className="x:fs-14 c-yellow-900">Próximamente</span>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  </div>
)

export default Course
