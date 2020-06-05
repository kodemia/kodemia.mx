import React, { Component } from 'react'

//Assets
import kodersFrame from '../static/img/skillup/koders-frame.png'

// Components
import Layout from '../components/layout'
import Card from '../components/skillup/card'

class SkillUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mentors: [],
      courses: [],
      videoUrl:
        'https://player.vimeo.com/video/423271756?color=ffffff&title=0&byline=0&portrait=0'
    }
    this.handleVideoClick = this.handleVideoClick.bind(this)
  }

  handleVideoClick(event) {
    event.stopPropagation()
    let modal = document.querySelector('.modal-video')
    let video = document.querySelector('#mentor-video')
    if (modal.classList.contains('shown')) {
      modal.classList.remove('shown')
      video.setAttribute('src', this.state.videoUrl)
    } else {
      modal.classList.add('shown')
      video.setAttribute('src', this.state.videoUrl + '&autoplay=1')
    }
  }

  componentDidMount() {
    let coursesArray = []
    fetch('https://skillupdashboard.firebaseio.com/courses/.json').then(
      courses => {
        courses.json().then(json => {
          for (const key in json) {
            fetch(
              `https://skillupdashboard.firebaseio.com/mentors/${
                json[key].mentorKey
              }.json`
            ).then(mentors => {
              mentors.json().then(mentorData => {
                coursesArray.push({ ...json[key], key, mentorData })
                this.setState({ courses: coursesArray })
              })
            })
          }
        })
      }
    )
  }

  render() {
    return (
      <>
        <div className="modal-video flex-direction-column align-items-center justify-content-center">
          <div className="w-75 d-flex flex-direction-column">
            <div
              className="btn skillup-btn btn-outline-cyan text-white x:fs-14 close-modal"
              onClick={this.handleVideoClick}
            >
              Salir
            </div>
            <div
              style={{
                padding: '40% 0 15% 0',
                position: 'relative',
                zIndex: 1,
                width: '100%'
              }}
            >
              <iframe
                id="mentor-video"
                src="https://player.vimeo.com/video/423271756?color=ffffff&title=0&byline=0&portrait=0"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
            <script src="https://player.vimeo.com/api/player.js" />
          </div>
        </div>
        <Layout title="Kodemia :: SkillUp">
          <div className="bg-black-3">
            <div className="line">
              <div className="banner-wrapper">
                <div className="banner-content">
                  <div className="banner-title">
                    Mejora tus <br />
                    habilidades en <br />
                    <span className="dynamic-text" />
                  </div>
                  <p className="banner-text">
                    Comparte experiencias con mentores 100% <br />
                    en{' '}
                    <span className="backlight backlight-cyan stretch">
                      VIVO
                    </span>{' '}
                    y llega al siguiente nivel{' '}
                    <i className="emoji-rocket">🚀</i>
                  </p>
                  <div className="skillup-btn btn-outline-white">
                    Conocer los #Skills
                  </div>
                </div>
              </div>
              <div className="scontainer container position-relative bg-black-3 ">
                <div className="floating-wrapper">
                  <div className="line">
                    <div className="x:scol-12">
                      <h3 className="text-white no-decal">
                        ¿Cómo funciona #SkillUp?
                      </h3>
                    </div>
                    <div className="line d-md-flex">
                      <div className="x:scol-12 m:scol-4">
                        <div className="backlight backlight-cyan text-black step-heading">
                          1
                        </div>
                        <p className="text-white">
                          Para iniciar, explora entre los diferentes #SkillUps y
                          elige el que te ayude a complementar tu perfil.
                        </p>
                      </div>
                      <div className="x:scol-12 m:scol-4">
                        <div className="backlight backlight-cyan text-black step-heading">
                          2
                        </div>
                        <p className="text-white">
                          Ponte en contacto con nosotros y aparta tu lugar ya
                          que son limitados.
                        </p>
                      </div>
                      <div className="x:scol-12 m:scol-4">
                        <div className="backlight backlight-cyan text-black step-heading">
                          3
                        </div>
                        <p className="text-white">
                          Ingresa a la sala e interactúa, comparte conocimiento
                          y experiencias con los mentores y compañeros
                          totalmente EN VIVO.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line">
                  <div className="x:scol-12">
                    <h2 className="text-white font-bold d-flex justify-content-between align-items-center x:fs-34 no-decal">
                      <span>
                        Encuentra tu siguiente <br />
                        #SkillUp <i className="emoji-rocks">🤘</i>
                      </span>
                      <div className="control-wrapper">
                        <div className="btn-control active" />
                        <div className="btn-control" />
                        <div className="btn-control" />
                      </div>
                    </h2>
                  </div>
                  <div className="scontainer container">
                    <div className="line d-flex flex-wrap">
                      {this.state.courses.map(course => {
                        return (
                          <Card
                            key={course.key}
                            courseKey={course.key}
                            name={course.courseName}
                            level={course.courseLevel}
                            goal={course.courseGoal}
                            category={course.courseCategory}
                            mentorName={course.mentorData.mentorName}
                            mentorExpertise={course.mentorData.mentorExpertise}
                            mentorPic={course.mentorData.mentorPicUrl}
                            duration={course.courseDuration}
                            backlightClass={course.courseCategoryClass}
                            schedules={course.courseSchedules}
                            onClick={this.handleVideoClick}
                          />
                        )
                      })}
                    </div>
                  </div>
                  <div className="spacer-xl" />
                  <div className="x:scol-12">
                    <h2 className="text-white x:fs-34 no-decal">
                      Ventajas de un curso <br /> live{' '}
                      <i className="emoji-point-right">👉</i>
                    </h2>
                  </div>
                  <div className="spacer-md" />
                  <div className="line d-md-flex">
                    <div className="x:scol-12 m:scol-7">
                      <img className="w-75" src={kodersFrame} alt="" />
                    </div>
                    <div className="x:scol-12 m:scol-5">
                      <ul className="skillup-list text-white">
                        <li className="skillup-item icon-user-plus">
                          Fórmate con los mejores
                        </li>
                        <li className="skillup-item icon-video">
                          Mejora tus habilidades
                        </li>
                        <li className="skillup-item icon-check-circle">
                          Resuelve tus dudas en tiempo real
                        </li>
                        <li className="skillup-item icon-message-circle">
                          Aprende de forma interactiva
                        </li>
                        <li className="skillup-item icon-users">
                          Interactua con tus compañeros y haz comunidad
                        </li>
                        <li className="skillup-item icon-share">
                          Comparte conocimiento y experiencia
                        </li>
                        <li className="skillup-item icon-plus-circle">
                          Todo 100% EN VIVO
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="spacer-lg" />
              </div>
            </div>
          </div>
          <div className="s-container bg-black-back-2">
            <div className="scontainer container">
              <div className="spacer-xl" />
              <div className="line d-flex align-items-center">
                <div className="x:scol-12 m:scol-6">
                  <h2 className="text-white x:fs-34 no-decal">
                    Conoce más de <br /> Live learning{' '}
                    <i className="emoji-fire">🔥</i>
                  </h2>
                  <p className="x:fs-24 text-white">
                    <span className="text-gray">Una</span> experiencia{' '}
                    <span className="text-gray">
                      novedosa de <br /> gran valor y
                    </span>{' '}
                    aprendizaje <br /> online <i className="emoji-laptop">💻</i>
                  </p>
                </div>
                <div className="x:scol-12 m:scol-6">
                  <div className="demo-video w-100">
                    <div
                      style={{
                        padding: '56.25% 0 0 0',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/423271756?color=ffffff&title=0&byline=0&portrait=0"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%'
                        }}
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      />
                    </div>
                    <script src="https://player.vimeo.com/api/player.js" />
                  </div>
                </div>
              </div>
              <div className="spacer-xl" />
            </div>
          </div>
        </Layout>
      </>
    )
  }
}

export default SkillUp
