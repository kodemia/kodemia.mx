// Package
import React, { Component } from 'react'
import Particles from 'react-particles-js'
import asset from 'next/asset'

// Ours
import Cursor from '../../cursor'

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
          <Particles
            params={{
              particles: {
                number: {
                  value: 400,
                  density: {
                    enable: true,
                    value_area: 750
                  }
                },
                color: {
                  value: '#fff'
                },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 0,
                    color: '#000000'
                  },
                  polygon: {
                    nb_sides: 5
                  }
                },
                opacity: {
                  value: 0.5,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 100,
                  color: '#ff9800',
                  opacity: 0.5,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: 'none',
                  random: true,
                  straight: false,
                  out_mode: 'out',
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: false,
                    mode: 'bubble'
                  },
                  onclick: {
                    enable: false,
                    mode: 'push'
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: false
            }}
            style={{ position: 'absolute' }}
          />
          <div className="table">
            <div className="cell">
              <div className="scontainer">
                <div className="line">
                  <div className="x:scol-12 x:center">
                    <img
                      src={asset(`/img/logos/logo-h-for-black.png`)}
                      alt="Kodemia"
                      style={{
                        maxWidth: 200 + 'px',
                        position: 'relative',
                        width: 100 + '%',
                        zIndex: 999
                      }}
                    />
                  </div>
                  <div className="x:scol-12 x:center">
                    <div className="content">
                      <h1 className="title x:fs-22 s:fs-30 l:fs-32 c-white">
                        Todo gran programador empieza en algún lad<Cursor white>
                          o
                        </Cursor>
                      </h1>
                      <p className="desc s:fs-18 l:fs-20 x:mrg-top-20 c-grey-200">
                        Aquí empiezas tú. <b>Kodemia</b>, la primera academia
                        real para programadores.
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
