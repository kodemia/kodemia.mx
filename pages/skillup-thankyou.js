import React, { Component } from 'react'
import Link from 'next/link'

// Components
import Layout from '../components/layout'
//import Card from '../components/skillup/card'
class skillupThankyou extends Component {
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
      campaign: '',
      discount: ''
    }
  }

  componentDidMount() {}

  render() {
    return (
      <Layout title="Kodemia :: SkillUp">
        <div className="bg-black-3 skillup-page">
          <div className="line">
            <div className="scontainer position-relative bg-black-3 skillup-form x:pad-all-0">
              <div className="line d-flex flex-wrap">
                <div className="x:scol-12 d-flex align-items-center flex-direction-column justify-content-center full-height">
                  <div className="content-wrapper d-flex flex-direction-column">
                    <h1 className="text-white x:center">¡Muchas gracias!</h1>
                    <p className="text-white x:center">
                      Registramos tus datos, te contactaremos lo antes posible.
                    </p>
                    <div className="d-flex x:mrg-top-40 button-wrapper">
                      <Link
                        key={this.props.courseKey}
                        href={{
                          pathname: '/skillup'
                        }}
                      >
                        <a className="mx-auto">
                          <div className="btn skillup-btn btn-outline-cyan text-white">
                            Seguir explorando Skills
                          </div>
                        </a>
                      </Link>
                    </div>
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

export default skillupThankyou
