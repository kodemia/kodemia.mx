// Package
import React, { Component } from 'react'

// Plugins
import Regular from '../../../static/js/shido-regular'

// Ours
import Cursor from '../../cursor'
import CoursesList from '../../../config/courses'
import Course from '../../course'

const BlackCourses = CoursesList.black.filter(course => !course.pastEvent)
const WhiteCourses = CoursesList.white.filter(course => !course.pastEvent)

class Courses extends Component {
  componentDidMount() {
    const regular = new Regular()
    regular.make()
  }
  render() {
    return (
      <>
        <div className="scontainer">
          <div className="line">
            <div className="x:scol-12 x:mrg-bottom-20">
              <h2>
                Bootcamp<Cursor>s</Cursor>
              </h2>
            </div>
          </div>
        </div>
        {/*
        <section id="cursos">
          <div className="twins l:scol-12 scol--full x:top bg-white l:center">
            <div className="scontainer scontainer--half x:left x:pad-bt-20 s:pad-bt-40">
              <div className="line">
                <div className="x:scol-12 x:mrg-bottom-20">
                  <h3>
                    White Koder MER<Cursor>N</Cursor>
                  </h3>
                </div>
                {WhiteCourses.map((course, i) => (
                  <Course course={course} key={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
                */}
        <section id="">
          <div className="line" regular="twins:1024">
            <div className="twins l:scol-12 scol--full x:top bg-black l:center">
              <div className="scontainer scontainer--half x:left x:pad-bt-20 s:pad-bt-40">
                <div className="line">
                  <div className="x:scol-12 x:mrg-bottom-20">
                    <h3 className="c-white">
                      Javascrip<Cursor white>t</Cursor>
                    </h3>
                  </div>
                  {BlackCourses.map((course, i) => (
                    <Course course={course} key={i} color="black" />
                  ))}
                </div>
                <div className="line">
                  <div className="x:scol-12 x:mrg-bottom-20">
                    <h3 className="c-white">
                      Pytho<Cursor white>n</Cursor>
                    </h3>
                  </div>
                  {WhiteCourses.map((course, i) => (
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
