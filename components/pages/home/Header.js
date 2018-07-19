// Package
import React, { Component } from 'react'
import Particles from 'react-particles-js'

// Ours
// ...

class HeaderHome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialized: false,
      height: 0
    }
  }

  viewport() {
    var e = window
    var a = 'inner'
    if (!('innerWidth' in window)) {
      a = 'client'
      e = document.documentElement || document.body
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] }
  }

  _setHeaderHeight() {
    const siteHeight = this.viewport().height

    if (this.state.height === siteHeight) {
      return
    }

    this.setState({ initialized: true, height: siteHeight })
  }

  componentDidMount() {
    const self = this
    let resizeTimer

    self._setHeaderHeight()

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        self._setHeaderHeight()
      }, 50)
    })
  }

  shouldComponentUpdate() {
    if (!this.state.initialized) {
      this._setHeaderHeight()
    }

    return true
  }

  render() {
    const { background = '#000' } = this.props

    return (
      <section id="header">
        <div
          className="header-home"
          style={{
            height: this.state.height,
            backgroundColor: background
          }}
        >
          <Particles style={{ position: 'absolute' }} />
          <div className="table">
            <div className="cell">
              <div className="scontainer">
                <div className="line">
                  <div className="x:scol-12 x:center">
                    <div className="content">
                      <h1 className="title x:fs-22 s:fs-30 l:fs-40 c-white">
                        La primer academia real para programadore<cursor className="white">
                          s
                        </cursor>
                      </h1>
                      <p className="desc x:fs-14 s:fs-18 l:fs-20 x:mrg-top-20 c-grey-400">
                        Academia de desarrollo de talento en programación web,
                        móvil y diseño UI/UX.
                        <br />
                        Cursos intensivos, experiencias personalizadas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HeaderHome
