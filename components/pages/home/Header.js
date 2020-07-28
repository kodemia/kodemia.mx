// Package
import React, { Component } from 'react'
import Link from 'next/link'

// Ours
import Cursor from '../../cursor'
import Button from '../../button'

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

  onResize = () => {
    clearTimeout(this.resizeTimer)

    this.resizeTimer = setTimeout(this._setSiteHeight, 50)
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    clearTimeout(this.resizeTimer)
    window.removeEventListener('resize', this.onResize)
  }

  shouldComponentUpdate() {
    if (!this.state.initialized) {
      this._setHeaderHeight()
    }

    return true
  }

  render() {
    return (
      <section id="header">
        <div
          className="header-home"
          style={{
            height: this.state.height,
            backgroundImage:
              'url(../../../static/img/backgrounds/portadakodemia.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '75%',
            backgroundSize: 'cover'
          }}
        >
          <div className="table">
            <div className="cell">
              <div className="scontainer">
                <div className="line">
                  <div className="x:scol-12 x:center">
                    <div className="content">
                      <h1 className="title x:fs-22 s:fs-30 l:fs-40 c-white x:scol-12 m:scol-9">
                        Transforma tu vida programand
                        <Cursor white>o</Cursor>
                      </h1>
                      <p className="desc s:fs-18 l:fs-20 x:mrg-top-30 c-white">
                        Aprende a programar desde cero hasta Fullstack
                      </p>
                      <div className="x:mrg-top-30">
                        <Link href="#cursos">
                          <Button>Conoce los Programas</Button>
                        </Link>
                      </div>
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
