// Packages
import React, { Component } from 'react'
import Link from 'next/link'
import asset from 'next/asset'

// Ours
import BtnToTop from '../button-top'

class Footer extends Component {
  constructor(props) {
    super(props)

    this.$footer = React.createRef()
  }

  componentDidMount() {
    this.props.getHeight(this.$footer.current.offsetHeight)
  }

  render() {
    const { mode = 'black' } = this.props
    const { link = true } = this.props
    let logo

    if (link) {
      logo = (
        <Link href="/">
          <a>
            <img
              src={asset(`/img/logos/logo-h-for-${mode}.png`)}
              alt="Kodemia"
            />
          </a>
        </Link>
      )
    }
    if (!link) {
      logo = (
        <img src={asset(`/img/logos/logo-h-for-${mode}.png`)} alt="Kodemia" />
      )
    }

    return (
      <footer className={mode} ref={this.$footer}>
        <BtnToTop />
        <div className="scontainer x:pad-top-20 s:pad-top-10">
          <div className="line">
            <div className="s:scol-6 x:center s:left">
              <div className="logo">{logo}</div>
            </div>
            <div className="s:scol-6 x:center s:right">
              <div className="social-items">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/kodemiamx"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/kodemiamx"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/kodemiamx"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/kodemiamx" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="scontainer">
            <div className="line">
              <div className="x:scol-12 m:scol-6 x:pad-bt-0 x:center s:left">
                <p className="x:fs-6">
                  Kodemia® {new Date().getFullYear()}. Todos los derechos
                  reservados
                </p>
              </div>
              <div className="x:scol-12 m:scol-6 x:pad-bt-0 x:center s:right">
                <a
                  href="https://cdn.kodemia.mx/docs/legal/politica-de-privacidad-kodemia.pdf"
                  target="__blank"
                >
                  Pólitica de privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
