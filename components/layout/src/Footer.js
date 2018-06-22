// Packages
import Link from 'next/link'
import React, { Component } from 'react'

// Ours
// ...

export default class extends Component {

  static getInitialProps({ type = 'white' }) {

    return {
      type
    }
  }

  _getLogo() {

    const pathLogos = '../../static/img/logos/'
    const logo = pathLogos + 'logo-h-for-' + this.props.type + '.png'

    return logo
  }

  render() {

    return (
      <footer className={ this.props.type }>
        <div className="scontainer">
          <div className="line">
            <div className="s:scol-6 x:center s:left">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src={ this._getLogo() } alt="Kodemia"/>
                  </a>
                </Link>
              </div>
            </div>
            <div className="s:scol-6 x:center s:right">
              <div className="social-items">
                <ul>
                  <li>
                    <Link href="https://www.facebook.com/Kodemia-637875623216179/">
                      <a target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/kodemiamx">
                      <a target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
