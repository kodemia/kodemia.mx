import React, { Component } from 'react'

// Components
import Layout from '../components/layout'
//import Card from '../components/skillup/card'
class SkillupDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courseData: {
        courseSchedules: []
      },
      mentorData: [],
      syllabus: []
    }
    this.handleDetailClick = this.handleDetailClick.bind(this)
    this.handleSyllabusCollapse = this.handleSyllabusCollapse.bind(this)
  }

  componentDidMount() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const courseKey = urlParams.get('courseKey')
    fetch(
      `https://skillupdashboard.firebaseio.com/courses/${courseKey}/.json`
    ).then(course => {
      course.json().then(json => {
        let syllabus = json.syllabus.syllabusObject.reduce((accum, item) => {
          if (item.moduleKey.indexOf('.') === -1) {
            accum[item.moduleKey] = { ...item }
            accum[item.moduleKey].submodules = []
          } else {
            let moduleKey = item.moduleKey.substring(
              0,
              item.moduleKey.indexOf('.')
            )
            accum[moduleKey].submodules.push(item)
          }
          return accum
        }, [])
        this.setState({ syllabus })
        this.setState({ courseData: json })
        this.getMentorData(json.mentorKey)
      })
    })
  }

  getMentorData(mentorKey) {
    fetch(
      `https://skillupdashboard.firebaseio.com/mentors/${mentorKey}/.json`
    ).then(response => {
      response.json().then(json => {
        this.setState({ mentorData: json })
      })
    })
  }

  handleDetailClick(event) {
    let isActive = event.target.classList.contains('active')
    isActive
      ? event.target.classList.remove('active')
      : event.target.classList.add('active')
  }

  handleSyllabusCollapse(event) {
    if (event.target.classList.contains('has-content')) {
      let isOpen = event.target.classList.contains('open')
      isOpen
        ? event.target.classList.remove('open')
        : event.target.classList.add('open')
    } else {
      return false
    }
  }

  render() {
    const mentorData = this.state.mentorData
    const courseData = this.state.courseData
    const syllabus = this.state.syllabus
    return (
      <Layout title="Kodemia :: SkillUp">
        <div className="bg-black-3">
          <div className="line">
            <div className="scontainer container position-relative bg-black-3">
              <div className="x:scol-12 d-flex align-items-stretch">
                <div className="skillup-card w-100 detail">
                  <div className="mentor-wrapper">
                    <div className="mentor-grade backlight  backlight-black-2">
                      {mentorData.mentorExpertise}
                    </div>
                    <div
                      className="mentor-video"
                      style={{
                        backgroundImage: `url(${mentorData.mentorPicUrl})`
                      }}
                    />
                    <div />
                    <p className="mentor-name">{mentorData.mentorName}</p>
                    <p className="mentor-charge">{mentorData.mentorGrade}</p>
                    <div className="social-wrapper d-flex">
                      <div className="social-link li" />
                      <div className="social-link gh" />
                      <div className="social-link tt" />
                      <div className="social-link www" />
                    </div>
                    <p className="mentor-bio">{mentorData.mentorBio}</p>
                  </div>
                  <div className="skillup-wrapper d-flex flex-direction-column justify-content-between">
                    <div
                      className={`skillup-category backlight text-center text-black-2 ${
                        courseData.courseCategoryClass
                      }`}
                    >
                      {courseData.courseCategory}
                    </div>
                    <h4 className="skillup-name">{courseData.courseName}</h4>
                    <div className="skillup-description">
                      {courseData.courseDescription}
                    </div>
                    <h5 className="text-white x:fs-20">Objetivo</h5>
                    <div className="skillup-target">
                      {courseData.courseGoal}
                    </div>
                  </div>
                  <div className="schedule-wrapper bg-black-back-4">
                    <div className="skillup-schedule-wrapper">
                      <p className="x:fs-20 x:mrg-bottom-15">
                        Fechas y Horario
                      </p>
                      <div className="d-flex justify-content-between x:mrg-bottom-15 w-100">
                        {courseData.courseSchedules.map(schedule => {
                          return (
                            <>
                              <div className="backlight backlight-gray-1">
                                {schedule.courseDays}
                              </div>
                              <div className="backlight backlight-gray-1">
                                {schedule.courseSchedule}
                              </div>
                            </>
                          )
                        })}
                      </div>
                      <div className="d-flex justify-content-between x:mrg-bottom-50">
                        <div>
                          <p className="x:fs-20">Duración</p>
                          <div className="skillup-length x:fs-14">
                            {courseData.courseDuration} hrs
                          </div>
                        </div>
                        <div>
                          <p className="x:fs-20">Costo</p>
                          <div className="x:fs-14">
                            $ {courseData.coursePrice} MXN
                          </div>
                        </div>
                      </div>
                      <div className="btn-wrapper d-flex flex-direction-column">
                        <div className="btn skillup-btn x:mrg-bottom-20">
                          Registrarse
                        </div>
                        <div className="btn skillup-btn btn-outline-gray">
                          Aparta tu lugar
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="x:scol-12 m:scol-8">
                <h2 className="no-decal text-white x:fs-34 x:mrg-bottom-40 x:mrg-top-30">
                  Acerca del curso
                </h2>
                <div className="about-wrapper">
                  <div className="about-item" onClick={this.handleDetailClick}>
                    ¿Quién puede tomarlo?
                    <p className="about-content">{courseData.courseTarget}</p>
                  </div>
                  <div className="about-item" onClick={this.handleDetailClick}>
                    ¿Qué conocimientos necesito?
                    <p className="about-content">
                      {courseData.courseBaseSkills}
                    </p>
                  </div>
                  <div className="about-item" onClick={this.handleDetailClick}>
                    Desafío
                    <p className="about-content">
                      {courseData.courseChallenge}
                    </p>
                  </div>
                  <div className="about-item" onClick={this.handleDetailClick}>
                    Herramientas necesarias
                    <p className="about-content">{courseData.courseTools}</p>
                  </div>
                </div>
                <h2 className="no-decal text-white x:mrg-bottom-40 x:mrg-top-30 x:fs-34 ">
                  Temario
                </h2>
                <div className="syllabus-wrapper">
                  {syllabus.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`syllabus-heading ${
                          item.submodules.length != 0 ? 'has-content' : ''
                        }`}
                        onClick={this.handleSyllabusCollapse}
                      >
                        <div className="track">{item.moduleKey}</div>
                        <p>{item.moduleName}</p>
                        {item.submodules.length != 0 ? (
                          <ul>
                            {item.submodules.map(submodule => {
                              return (
                                <li key={submodule.moduleKey}>
                                  {submodule.moduleKey} {submodule.moduleName}
                                </li>
                              )
                            })}
                          </ul>
                        ) : null}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="x:scol-12 m:scol-4 x:top">
                <div className="aside-card x:mrg-top-30 x:mrg-bottom-30">
                  <h3 className="no-decal text-white check-icon x:mrg-top-15 x:mrg-bottom-15">
                    ✅ Proceso
                  </h3>
                  <ol>
                    <li>Aparta tu lugar</li>
                    <li>
                      Nos pondremos en contacto contigo para enviarte la liga
                      del pago
                    </li>
                    <li>
                      Una vez confirmado tu pago te mandaremos los accesos para
                      que puedas conecarte a la clase
                    </li>
                  </ol>
                </div>
                <div className="aside-card">
                  <h3 className="no-decal text-white warning-icon x:mrg-top-15 x:mrg-bottom-15">
                    ⚠ Información extra
                  </h3>
                  <p>
                    Una vez confirmado tu pago te mandaremos los accesos para
                    que puedas conectarte a la clase.
                  </p>
                </div>
                <div className="btn-wrapper x:mrg-top-50 d-flex flex-direction-column">
                  <div className="btn skillup-btn w-50 x:mrg-bottom-30 text-white">
                    Regístrate
                  </div>
                  <div className="btn skillup-btn btn-outline-cyan w-50 x:mrg-bottom-30 text-white">
                    Aparta tu lugar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default SkillupDetail
