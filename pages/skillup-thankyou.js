import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import skillupLogo from '../static/img/skillup/skillup-logo.png'

const gtmHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P4DXDWZ');`

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
