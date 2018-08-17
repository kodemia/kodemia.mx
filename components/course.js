// Packages
import Link from 'next/link'

function isURL(str) {
  var pattern = new RegExp('^https?')

  return pattern.test(str)
}

const CourseLink = ({ course }) => (
  <p className="x:mrg-bt-5 x:fs-18 m:fs-20">
    {isURL(course.link) ? (
      <a href={course.link} target="_blank" className="txt-underline">
        {course.name}
      </a>
    ) : (
      <Link href={course.link}>
        <a className="txt-underline">{course.name}</a>
      </Link>
    )}
  </p>
)

const Course = ({ course, color }) => (
  <div className="x:scol-12 x:top">
    <div
      className={
        'course-card ' +
        (course.pastEvent ? 'inactive' : null) +
        (color ? ' card--black ' : ' card--white ')
      }
    >
      <div className="line">
        <div className="s:scol-3 x:top x:center">
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
        <div className="s:scol-9 x:top">
          <p className="x:pad-top-0">
            <i className="far fa-clock" /> {course.schedule.hour}h
          </p>
          {course.link === undefined ? (
            <p className="x:mrg-bt-5 x:fs-18 m:fs-20">{course.name}</p>
          ) : (
            <CourseLink course={course} />
          )}
          {course.comingSoon ? (
            <p className="x:mrg-top-10">
              <span className="x:fs-14 c-yellow-700 txt-uppercase">
                Próximamente
              </span>
            </p>
          ) : null}
          {course.desc !== undefined ? <p>{course.desc}</p> : null}
        </div>
      </div>
    </div>
  </div>
)

export default Course
