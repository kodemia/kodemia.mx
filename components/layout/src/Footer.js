// Packages
import React, { Component } from 'react'
import Link from 'next/link'
import asset from 'next/asset'

// Ours
// ...

class Footer extends Component {
  constructor(props) {
    super(props)

    this.$footer = React.createRef()
  }

  componentDidMount() {
    this.props.getHeight(this.$footer.current.offsetHeight)
  }

  render() {
    const { mode = 'white' } = this.props

    return (
      <footer className={mode} ref={this.$footer}>
        <div className="scontainer">
          <div className="line">
            <div className="s:scol-6 x:center s:left">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src={asset(`/img/logos/logo-h-for-${mode}.png`)}
                      alt="Kodemia"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="s:scol-6 x:center s:right">
              <div className="social-items">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/Kodemia-637875623216179/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
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
      </footer>
    )
  }
}

export default Footer
