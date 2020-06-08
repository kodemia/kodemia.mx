import React, { Component } from 'react'

import Logo from '../static/img/skillup/kodemia-logo.png'

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
        phone: ''
      }
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
    event.target.parentNode.classList.remove('has-error')
    let data = this.state.data
    data[event.target.name] = event.target.value
    this.setState({ data })
  }

  submitForm() {
    //to do: handle form submit
    //let {name,mail,phone} = this.state.data;
    //console.log(`name: ${name}, mail: ${mail}, phone: ${phone}`)
  }

  handleSubmitClick() {
    let data = this.state.data
    for (let property in data) {
      let element = document.querySelector(`[name=${property}]`).parentNode
      data[property] === '' ? element.classList.add('has-error') : null
    }
    let errors = document.querySelectorAll('has-error').length
    if (this.state.isLegalChecked && errors == 0) {
      this.submitForm()
    } else if (!this.state.isLegalChecked) {
      alert('Debes aceptar los términos y condiciones para poder continuar')
    }
  }

  render() {
    return (
      <Layout title="Kodemia :: SkillUp">
        <div className="bg-black-3">
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
                      Déjanos tus datos y te ayudaremos a resolver todas las
                      dudas que tengas
                    </p>
                  </div>
                </div>
                <div className="x:scol-12 m:scol-6 d-flex flex-direction-column justify-content-center">
                  <form
                    action=""
                    className="w-75 mx-auto x:pad-all-15 d-flex flex-direction-column"
                  >
                    <div className="form-group required">
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
                    <div className="form-group required">
                      <label htmlFor="">Correo</label>
                      <input
                        type="text"
                        className="form-control"
                        name="mail"
                        placeholder="Correo"
                        value={this.state.data.mail}
                        onChange={this.handleFormChange}
                      />
                    </div>
                    <div className="form-group required">
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
                    <div
                      className={`btn skillup-btn text-white x:mrg-top-40 ml-auto ${
                        !this.state.isLegalChecked ? 'btn-disabled' : ''
                      }`}
                      onClick={this.handleSubmitClick}
                    >
                      Enviar
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
