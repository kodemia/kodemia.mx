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
const KidsCourses = CoursesList.kids.filter(course => !course.pastEvent)

class Courses extends Component {
  componentDidMount() {
    const regular = new Regular()
    regular.make()
  }
  render() {
    return (
      <section id="cursos">
        <hr />
        <div className="line" regular="twins:1024">
          <div className="twins l:scol-4 scol--full x:top bg-white l:right">
            <div className="scontainer scontainer--half x:left x:pad-bt-20 s:pad-bt-40">
              <div className="line">
                <div className="x:scol-12 x:mrg-bottom-20">
                  <h2>
                    White Kode<Cursor>r</Cursor>
                  </h2>
                </div>
                {WhiteCourses.map((course, i) => (
                  <Course course={course} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="twins l:scol-4 scol--full x:top bg-black">
            <div className="scontainer scontainer--half x:left x:pad-bt-20 s:pad-bt-40">
              <div className="line">
                <div className="x:scol-12 x:mrg-bottom-20">
                  <h2 className="c-white">
                    Black Kode<Cursor white>r</Cursor>
                  </h2>
                </div>
                {BlackCourses.map((course, i) => (
                  <Course course={course} key={i} color="black" />
                ))}
              </div>
            </div>
          </div>
          <div className="twins l:scol-4 scol--full x:top bg-white l:right">
            <div className="scontainer scontainer--half x:left x:pad-bt-20 s:pad-bt-40">
              <div className="line">
                <div className="x:scol-12 x:mrg-bottom-20">
                  <h2>
                    Kodemia kid<Cursor>s</Cursor>
                  </h2>
                </div>
                {KidsCourses.map((course, i) => (
                  <Course course={course} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>
    )
  }
}

export default Courses
