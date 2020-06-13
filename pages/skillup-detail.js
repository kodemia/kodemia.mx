import React, { Component } from 'react'
import Link from 'next/link'
import moment from 'moment'
moment.locale('es')

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
      courseKey: '',
      mentorData: [],
      syllabus: [],
      videoUrl:
        'https://player.vimeo.com/video/427180425?color=ffffff&title=0&byline=0&portrait=0'
    }
    this.handleDetailClick = this.handleDetailClick.bind(this)
    this.handleSyllabusCollapse = this.handleSyllabusCollapse.bind(this)
    this.handleVideoClick = this.handleVideoClick.bind(this)
  }

  componentDidMount() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const courseKey = urlParams.get('courseKey')
    this.setState({ courseKey })
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
    const courseKey = this.state.courseKey
    const { courseName } = courseData
    const syllabus = this.state.syllabus
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
                padding: '25% 0 15% 0',
                position: 'relative',
                zIndex: 1,
                width: '100%'
              }}
            >
              <iframe
                id="mentor-video"
                src="https://player.vimeo.com/video/427180425?color=ffffff&title=0&byline=0&portrait=0"
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
          <div className="bg-black-3 skillup-page">
            <div className="line">
              <div className="scontainer container position-relative bg-black-3">
                <div className="x:scol-12 d-flex align-items-stretch">
                  <div className="skillup-card w-100 detail">
                    <div className="mentor-wrapper">
                      <div className="w-md-15vw">
                        <div className="mentor-grade backlight  backlight-black-2">
                          {mentorData.mentorExpertise}
                        </div>
                        <div
                          className="mentor-video"
                          style={{
                            backgroundImage: `url(${mentorData.mentorPicUrl})`
                          }}
                          onClick={this.handleVideoClick}
                        />
                        <div />
                        <p className="mentor-name">{mentorData.mentorName}</p>
                        <p className="mentor-charge">
                          {mentorData.mentorGrade}
                        </p>
                        <div className="social-wrapper d-flex">
                          {mentorData.mentorLinkedin ? (
                            <a
                              className="social-link li"
                              href={mentorData.mentorLinkedin}
                              target="_blank"
                            />
                          ) : null}
                          {mentorData.mentorGithub ? (
                            <a
                              className="social-link gh"
                              href={mentorData.mentorGithub}
                              target="_blank"
                            />
                          ) : null}
                          {mentorData.mentorTwitter ? (
                            <a
                              className="social-link tt"
                              href={`https://twitter.com/${mentorData.mentorTwitter.replace(
                                '@',
                                ''
                              )}`}
                              target="_blank"
                            />
                          ) : null}
                          {mentorData.mentorWeb &&
                          mentorData.mentorWeb != 'N/A' ? (
                            <a
                              className="social-link web"
                              href={mentorData.mentorWeb}
                              target="_blank"
                            />
                          ) : null}
                        </div>
                      </div>
                      <p className="mentor-bio">
                        <span className="short-bio">
                          {!mentorData.mentorBio
                            ? null
                            : mentorData.mentorBio.replace(
                                /(\r\n|\n|\r)/gm,
                                ' '
                              ).length <= 151
                            ? mentorData.mentorBio
                            : mentorData.mentorBio.substr(
                                0,
                                mentorData.mentorBio.lastIndexOf(' ', 250)
                              ) + '...'}
                        </span>
                      </p>
                    </div>
                    <div className="skillup-wrapper d-flex flex-direction-column justify-content-between">
                      <div
                        className={`skillup-category backlight text-center text-black-2 
                  ${
                    courseData.courseLevel === 'Básico'
                      ? 'backlight-essential'
                      : ''
                  } 
                  ${
                    courseData.courseLevel === 'Intermedio'
                      ? 'backlight-advanced'
                      : ''
                  } 
                  ${
                    courseData.courseLevel === 'Avanzado'
                      ? 'backlight-master'
                      : ''
                  }`}
                      >
                        {`${
                          courseData.courseLevel === 'Básico' ? 'Essential' : ''
                        } ${
                          courseData.courseLevel === 'Intermedio'
                            ? 'Advanced'
                            : ''
                        } ${
                          courseData.courseLevel === 'Avanzado' ? 'Master' : ''
                        }`}
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
                        <p className="x:fs-16 x:mrg-bottom-15 backlight backlight-cyan x:center">
                          Inicio:{' '}
                          <span>{`
                          ${moment(courseData.courseStartDate).format(
                            'DD'
                          )} de ${moment(courseData.courseStartDate).format(
                            'MMMM'
                          )} de ${moment(courseData.courseStartDate).format(
                            'YYYY'
                          )} 
                        `}</span>
                        </p>
                        <div className="d-flex justify-content-between x:mrg-bottom-15 w-100">
                          {courseData.courseSchedules.map(schedule => {
                            return (
                              <>
                                <div className="backlight backlight-gray-1 d-flex align-items-center">
                                  {schedule.courseDays}
                                </div>
                                <div className="backlight backlight-gray-1 d-flex align-items-center x:mrg-left-10">
                                  {schedule.courseSchedule.replace(/ hrs/g, '')}{' '}
                                  hrs
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
                          <Link
                            href={{
                              key: { courseName },
                              pathname: '/skillup-form',
                              query: { courseName, courseKey }
                            }}
                          >
                            <div className="btn skillup-btn x:mrg-bottom-20 text-white">
                              <a className="text-white">Regístrate</a>
                            </div>
                          </Link>
                          <div className="btn skillup-btn btn-outline-cyan">
                            <a
                              href={`https://api.whatsapp.com/send?phone=525621298680&text=Hola%2C%20quiero%20apartar%20mi%20lugar%20en%20el%20Skillup%20%27${courseName}%27`}
                              target="_blank"
                              className="text-white"
                            >
                              Aparta tu lugar
                            </a>
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
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      ¿Quién puede tomarlo?
                      <p className="about-content">{courseData.courseTarget}</p>
                    </div>
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      ¿Qué conocimientos necesito?
                      <p className="about-content">
                        {courseData.courseBaseSkills}
                      </p>
                    </div>
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      Desafío
                      <p className="about-content">
                        {courseData.courseChallenge}
                      </p>
                    </div>
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
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
                                    {submodule.moduleName}
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
                        Una vez confirmado tu pago te mandaremos los accesos
                        para que puedas conecarte a la clase
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
                    <Link
                      href={{
                        key: { courseName },
                        pathname: '/skillup-form',
                        query: { courseName, courseKey }
                      }}
                    >
                      <div className="btn skillup-btn x:mrg-bottom-20 text-white">
                        <a className="text-white">Regístrate</a>
                      </div>
                    </Link>
                    <div className="btn skillup-btn btn-outline-cyan">
                      <a
                        href={`https://api.whatsapp.com/send?phone=525621298680&text=Hola%2C%20quiero%20apartar%20mi%20lugar%20en%20el%20Skillup%20%27${courseName}%27`}
                        target="_blank"
                        className="text-white"
                      >
                        Aparta tu lugar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="x:scol-12 m:scol-8">
                  <h2 className="no-decal text-white x:fs-34 x:mrg-bottom-40 x:mrg-top-30">
                    Preguntas frecuentes
                  </h2>
                  <div className="about-wrapper">
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      ¿Cuál es la diferencia de un curso Live de SkillUp con un
                      curso online?
                      <p className="about-content">
                        El curso Live tiene la ventaja de contar con un mentor
                        guía durante la duración de tu curso, además de las
                        clases remotas en vivo para resolver dudas en tiempo
                        real
                        <ul>
                          <li>
                            Al resolver dudas en tiempo real con el mentor
                            aceleras el tiempo e incrementas el valor de tu
                            aprendizaje
                          </li>
                          <li>
                            Los mentores no solo comparten conocimiento,
                            comparten su experiencia y visión que te ahorrará
                            mucho más tiempo que aprenderlo por tu cuenta
                          </li>
                          <li>
                            Puedes resolver dudas puntuales sobre proyectos
                            personales o profesionales ajenos al curso. Si no lo
                            sabemos, lo investigaremos juntos
                          </li>
                          <li>
                            Olvídate de buscar entre cursos obsoletos grabados
                            en internet. Al estar en vivo, los cursos cuentan
                            con el contenido actualizado, en tendencia y al día
                            en que tomas el curso
                          </li>
                          <li>
                            Todos los mentores son profesionales y líderes en
                            empresas de tecnología, pon atención ya que
                            encontrarás muchos líderes de equipos, directores de
                            desarrollo y de empresas exitosas
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      ¿Cómo se imparten las clases?
                      <p className="about-content">
                        Las imparte un mentor en vivo de manera remota a través
                        de una videollamada, para que puedas interactuar con él
                        en tiempo real y aprender de su experiencia.
                      </p>
                    </div>
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      ¿Qué necesito para mi curso Live de Skillup?
                      <p className="about-content">
                        Necesitarás:
                        <ul>
                          <li>
                            Computadora de escritorio o laptop. Te recomendamos
                            un equipo con las siguientes características:
                            <ul>
                              <li>Memoria ram mínima de 8gb</li>
                              <li>Procesador i3, i5, i7 o equivalente</li>
                              <li>
                                Conexión a internet de banda ancha, ideal mínimo
                                de 10 Mbps
                              </li>
                            </ul>
                          </li>
                          <li>
                            Te recomendamos dedicar un espacio físico y el
                            tiempo a las clases para que centres toda la
                            atención
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      ¿Cuál es el máximo de personas por grupo?
                      <p className="about-content">
                        Varía un poco dependiendo el curso, sin embargo en la
                        mayoría de los casos es limitado a 15, 18 o 20 personas
                        con excepciones muy puntuales de 25 personas para
                        mantener la calidad y atención de cada 'koder'. Consulta
                        este dato en el detalle de cada curso y apresura tu
                        apartado, los lugares son pocos y se llenan muy rápido
                      </p>
                    </div>
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      ¿Cómo me comunicaré con los mentores?
                      <p className="about-content">
                        Contarás con un canal en Telegram para la comunicación
                        de tu grupo con el mentor y acceso al canal de Slack de
                        la comunidad de Kodemia donde podrás compartir con todos
                        los mentores, alumnos y egresados para resolver
                        cualquier duda en tiempo real.
                      </p>
                    </div>
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      ¿Cuánto tiempo dedican los mentores a mi aprendizaje?
                      <p className="about-content">
                        Durante la duración del curso el mentor te dará el
                        soporte en tiempo real durante y extra clase para
                        aplicar también los conocimientos en tus proyectos
                        personales o profesionales. Sólo toma en cuenta que los
                        mentores también comen y duermen.
                      </p>
                    </div>
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      ¿Dan algún reconocimiento?
                      <p className="about-content">
                        Si, al final del curso te daremos un certificado de
                        SkillUp con el reconocimiento del mentor sobre la
                        aplicación de tus conocimientos durante el curso a un
                        proyecto.
                      </p>
                    </div>
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      ¿Qué formas de pago existen?
                      <p className="about-content">
                        Puedes hacer tu pago con SPEI, tarjeta de debito,
                        crédito, Paypal y diferir tu pago hasta 12 meses sin
                        intereses con las opciones participantes
                      </p>
                    </div>
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      ¿Hay descuentos?
                      <p className="about-content">
                        Por supuesto, pero son de manera ocasional y debes estar
                        atento al momento cuando lancemos promoción para que
                        aproveches y apartes tu lugar antes e terminen.
                        <br />A partir de 2 personas o si tienes interés en más
                        de un curso{' '}
                        <a
                          className="text-cyan"
                          href={`https://api.whatsapp.com/send?phone=525621298680&text=Hola%2C%20quiero%20apartar%20mi%20lugar%20en%20el%20Skillup%20%27${courseName}%27`}
                        >
                          escríbenos por whatsapp
                        </a>{' '}
                        para buscar el mayor descuento
                      </p>
                    </div>
                    <div
                      className="about-item"
                      onClick={this.handleDetailClick}
                    >
                      ¿Porque cuestan lo mismo todos los cursos?
                      <p className="about-content">
                        El valor del curso esta basado en el tiempo del mentor y
                        no en el conocimiento, removemos esa barrera para que tú
                        puedas elegir el curso que mejor se acomode a tus
                        necesidades.
                      </p>
                    </div>
                  </div>
                  <div className="spacer-lg">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    )
  }
}

export default SkillupDetail
