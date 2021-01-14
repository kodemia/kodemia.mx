// Package
import React, { Component } from 'react'

// Plugins
import Regular from '../../../static/js/shido-regular'

// Ours
import Cursor from '../../cursor'
import CoursesList from '../../../config/courses'
import Course from '../../course'

const JavascriptCourses = CoursesList.javascript.filter(
  course => !course.pastEvent
)
const PythonCourses = CoursesList.python.filter(course => !course.pastEvent)

class Courses extends Component {
  componentDidMount() {
    const regular = new Regular()
    regular.make()
  }

  render() {
    return (
      <>
        <section id="bootcamps">
          <div className="line" regular="twins:1024">
            <div className="twins l:scol-12 scol--full x:top bg-black l:center">
              <div className="scontainer scontainer--half x:left x:pad-bt-20 s:pad-bt-40">
                <div className="line">
                  <div className="x:scol-12 x:mrg-bottom-20 m:mrg-bottom-50">
                    <h2 className="c-white">
                      Bootcamp<Cursor white>s</Cursor>
                    </h2>
                  </div>
                </div>
                <div className="line">
                  <div className="x:scol-12 x:mrg-bottom-20 x:mrg-top-10 x:mrg-left-20 m:mrg-bottom-40 m:mrg-top-30">
                    <h3 className="c-white">
                      Javascrip<Cursor white>t</Cursor>
                    </h3>
                  </div>
                  {JavascriptCourses.map((course, i) => (
                    <Course course={course} key={i} color="white" />
                  ))}
                </div>
                <div className="line">
                  <div className="x:scol-12 x:mrg-bottom-20 x:mrg-top-20 x:mrg-left-20 m:mrg-bottom-40 m:mrg-top-40">
                    <h3 className="c-white">
                      Javascript + Pytho<Cursor white>n</Cursor>
                    </h3>
                  </div>
                  {PythonCourses.map((course, i) => (
                    <Course course={course} key={i} color="white" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr />
        </section>
      </>
    )
  }
}

export default Courses
