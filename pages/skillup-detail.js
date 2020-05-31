import React, { Component } from 'react'

// Components
import Layout from '../components/layout'
//import Card from '../components/skillup/card'

class SkillupDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mentors: [],
      courses: []
    }
    this.handleDetailClick = this.handleDetailClick.bind(this)
  }

  handleDetailClick(event) {
    let isActive = event.target.classList.contains('active')
    isActive
      ? event.target.classList.remove('active')
      : event.target.classList.add('active')
  }

  render() {
    return (
      <Layout title="Kodemia :: SkillUp">
        <div className="bg-black-3">
          <div className="line">
            <div className="scontainer container position-relative bg-black-3">
              <div className="x:scol-12 d-flex align-items-stretch">
                <div className="skillup-card w-100 detail">
                  <div className="mentor-wrapper">
                    <div className="mentor-grade backlight  backlight-black-2">
                      Developer
                    </div>
                    <div className="mentor-video" />
                    <div />
                    <p className="mentor-name">Israel Salinas Martínez</p>
                    <p className="mentor-charge">Technical Lead</p>
                    <div className="social-wrapper d-flex">
                      <div className="social-link li" />
                      <div className="social-link gh" />
                      <div className="social-link tt" />
                      <div className="social-link www" />
                    </div>
                    <p className="mentor-bio">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Inventore dolorum dolorem sequi voluptate ad eius!
                    </p>
                  </div>
                  <div className="skillup-wrapper d-flex flex-direction-column justify-content-between">
                    <div className="skillup-category backlight text-center text-black-2 backlight-yellow">
                      Development
                    </div>
                    <h4 className="skillup-name">Desarrollo front</h4>
                    <div className="skillup-description">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatum culpa quibusdam architecto adipisci magni
                      eveniet exercitationem nesciunt ipsum veniam quae.
                    </div>
                    <h5 className="text-white x:fs-20">Objetivo</h5>
                    <div className="skillup-target">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam rerum harum ea officia alias in, cum eveniet
                      voluptatem quod eum odio quaerat, sit facere similique.
                    </div>
                  </div>
                  <div className="schedule-wrapper bg-black-back-4">
                    <div className="skillup-schedule-wrapper">
                      <p className="x:fs-20 x:mrg-bottom-15">
                        Fechas y Horario
                      </p>
                      <div className="d-flex justify-content-between x:mrg-bottom-15 w-100">
                        <div className="skillup-days backlight backlight-gray-1">
                          LUN - MIE
                        </div>
                        <div className="skillup-schedule backlight backlight-gray-1">
                          10:00 - 12:00
                        </div>
                      </div>
                      <div className="d-flex justify-content-between x:mrg-bottom-50">
                        <div>
                          <p className="x:fs-20">Duración</p>
                          <div className="skillup-length x:fs-14">40 hrs</div>
                        </div>
                        <div>
                          <p className="x:fs-20">Costo</p>
                          <div className="x:fs-14">$ 3,000 mxn</div>
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
                  <div
                    className="about-item active"
                    onClick={this.handleDetailClick}
                  >
                    ¿Quién puede tomarlo?
                    <p className="about-content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Exercitationem enim sit dolor commodi ab nesciunt!
                    </p>
                  </div>
                  <div className="about-item">
                    ¿Qué conocimientos necesito?
                    <p className="about-content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Exercitationem enim sit dolor commodi ab nesciunt!
                    </p>
                  </div>
                  <div className="about-item">
                    Desafío
                    <p className="about-content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Exercitationem enim sit dolor commodi ab nesciunt!
                    </p>
                  </div>
                  <div className="about-item">
                    Herramientas necesarias
                    <p className="about-content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Exercitationem enim sit dolor commodi ab nesciunt!
                    </p>
                  </div>
                </div>
                <h2 className="no-decal text-white x:mrg-bottom-40 x:mrg-top-30 x:fs-34 ">
                  Temario
                </h2>
                <div className="syllabus-wrapper">
                  <div className="syllabus-heading active">
                    <div className="track">1</div> Tema 1 - Lo primero es lo
                    primero
                  </div>
                  <div className="syllabus-heading">
                    <div className="track">2</div>Tema 2 - Lo segundo es lo
                    segundo
                  </div>
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
