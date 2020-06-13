import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

import { submitSkillUpForm } from '../lib/api'
import Logo from '../static/img/skillup/kodemia-logo.png'
import skillupLogo from '../static/img/skillup/skillup-logo.png'

const gtmHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P4DXDWZ');`

// Components
import Layout from '../components/layout'
//import Card from '../components/skillup/card'
class SkillupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLegalChecked: false,
      data: {
        name: '',
        mail: '',
        phone: '',
        courseName: ''
      },
      errors: {
        name: null,
        mail: null,
        phone: null,
        courseName: null
      },
      campaign: '',
      discount: ''
    }
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.handleSubmitClick = this.handleSubmitClick.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleCheckChange(event) {
    let propertyValue = event.target.checked
    this.setState({ isLegalChecked: propertyValue })
  }

  handleFormChange(event) {
    // event.target.parentNode.classList.remove('has-error')
    let data = this.state.data
    let errors = this.state.errors
    errors[event.target.name] = null
    data[event.target.name] = event.target.value
    this.setState({ data, errors })
  }

  submitForm() {
    //to do: handle form submit
    //let {name,mail,phone} = this.state.data;
    //console.log(`name: ${name}, mail: ${mail}, phone: ${phone}`)

    const { name, mail, phone, courseName } = this.state.data

    const data = {
      email: mail,
      firstName: name,
      phone,
      curso: courseName
    }

    submitSkillUpForm(data).then(() => {
      Router.push('/skillup-thankyou')
    })
  }

  handleSubmitClick() {
    let data = this.state.data
    const errors = {}
    Object.entries(data).forEach(([key, value]) => {
      // const isValidEmail = !/.*@.*\..*/.test(value)
      const isValidEmail = value.match(/.*@.*\..*/)
      if (key === 'mail' && !isValidEmail) {
        errors[key] = 'error'
      } else if (key === 'mail' && isValidEmail) {
        errors[key] = null
      } else if (key === 'phone' && value.length < 10) {
        errors[key] = 'error'
      } else if (key === 'phone' && value.length === 10) {
        errors[key] = null
      } else if (value) {
        errors[key] = null
      } else {
        errors[key] = 'error'
      }
    })
    this.setState({ errors })
    const hasErrors = !!Object.entries(errors).find(([, value]) => !!value)
    if (this.state.isLegalChecked && !hasErrors) {
      this.submitForm()
    } else if (!this.state.isLegalChecked) {
      alert('Debes aceptar los términos y condiciones para poder continuar')
    }
  }

  componentDidMount() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const courseName = urlParams.get('courseName')
    const courseKey = urlParams.get('courseKey')
    const campaign = urlParams.get('campaign')
    const discount = urlParams.get('discount')
    let data = this.state.data
    data = { ...data, courseName, courseKey }
    this.setState({ data, campaign, discount })
  }

  render() {
    const { courseKey } = this.state.data
    const { discount } = this.state
    return (
      <Layout title="Kodemia :: SkillUp">
        <Head>
          <meta property="og:title" content="skillup" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Mejora tus habilidades compartiendo experiencias con mentores 100% en vivo"
          />
          <meta property="og:site_name" content="Skillup" />
          <meta property="og:image" content={skillupLogo} />

          {/* <!-- Google Tag Manager --> */}
          <script dangerouslySetInnerHTML={{ __html: gtmHTML }} />
          {/* <!-- End Google Tag Manager --> */}
        </Head>
        <div className="bg-black-3 skillup-page">
          <div className="line">
            <div className="scontainer container position-relative bg-black-3 skillup-form x:pad-all-0">
              <div className="line d-flex flex-wrap">
                <div className="x:scol-12 m:scol-6 d-flex align-items-center banner-bg flex-direction-column">
                  <img src={Logo} alt="" className="x:mrg-bottom-30" />
                  <div className="content-wrapper text-white">
                    <h1 className="text-white x:mrg-bottom-20">
                      Estas a un paso
                    </h1>
                    <p>
                      {discount
                        ? `Registrate para recibir ${discount}% de descuento en tu curso.`
                        : `Déjanos tus datos y te ayudaremos a resolver todas las dudas que tengas`}
                    </p>
                  </div>
                </div>
                <div className="x:scol-12 m:scol-6 d-flex flex-direction-column justify-content-center">
                  <form
                    action=""
                    className="w-75 mx-auto x:pad-all-15 d-flex flex-direction-column"
                  >
                    <div
                      className={`form-group required ${this.state.errors
                        .name && 'has-error'}`}
                    >
                      <label htmlFor="">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Nombre"
                        value={this.state.data.name}
                        onChange={this.handleFormChange}
                      />
                    </div>
                    <div
                      className={`form-group required ${this.state.errors
                        .mail && 'has-error'}`}
                    >
                      <label htmlFor="">Correo</label>
                      <input
                        type="email"
                        className="form-control"
                        name="mail"
                        placeholder="Correo"
                        value={this.state.data.mail}
                        onChange={this.handleFormChange}
                      />
                    </div>
                    <div
                      className={`form-group required ${this.state.errors
                        .phone && 'has-error'}`}
                    >
                      <label htmlFor="">Teléfono</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Teléfono"
                        maxLength="10"
                        value={this.state.data.phone}
                        onChange={this.handleFormChange}
                      />
                    </div>
                    <div className="form-grup x:mrg-top-20 custom-checkbox">
                      <input
                        id="isLegalsChecked"
                        name="isLegalsChecked"
                        type="checkbox"
                        onChange={this.handleCheckChange}
                      />
                      <label
                        htmlFor="isLegalsChecked"
                        className="text-gray"
                        name="isLegalsChecked"
                      >
                        Acepto los
                        <a
                          href="https://cdn.kodemia.mx/docs/legal/politica-de-privacidad-kodemia.pdf"
                          target="_blank"
                          className="text-cyan"
                        >
                          {' '}
                          términos y condiciones
                        </a>
                      </label>
                    </div>
                    <div className="d-flex x:mrg-top-40 button-wrapper">
                      {courseKey ? (
                        <Link
                          key={this.props.courseKey}
                          href={{
                            pathname: '/skillup-detail',
                            query: { courseKey }
                          }}
                        >
                          <a>
                            <div className="btn skillup-btn text-white">
                              Volver al curso
                            </div>
                          </a>
                        </Link>
                      ) : null}
                      <div
                        className={`btn skillup-btn text-white  ml-auto ${
                          !this.state.isLegalChecked ? 'btn-disabled' : ''
                        }`}
                        onClick={this.handleSubmitClick}
                      >
                        Enviar
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default SkillupForm
