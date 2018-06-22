// Package
import Head from 'next/head'
import React, { Component } from 'react'

// Less
import '../../static/less/app.less'

// Ours
import MainMenu from './src/MainMenu'
import Footer from './src/Footer'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.$footer = React.createRef()

    this.state = {
      initialized: false,
      mainHeight: 0,
      footerHeight: 0
    }

    this.setFooterHeight = this.setFooterHeight.bind(this)
  }

  setFooterHeight(height) {
    this.setState({ footerHeight: height })
  }

  _setSiteHeight() {
    const siteHeight = window.visualViewport.height
    const mainContainerHeight = siteHeight - this.state.footerHeight

    if (this.state.mainHeight === mainContainerHeight) {
      return
    }

    this.setState({ initialized: true, mainHeight: mainContainerHeight })
  }

  componentDidMount() {
    const self = this
    let resizeTimer

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        self._setSiteHeight()
      }, 50)
    })
  }

  shouldComponentUpdate() {
    if (!this.state.initialized) {
      this._setSiteHeight()
    }

    return true
  }

  render() {
    const { children, title, mode } = this.props

    return (
      <div>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1,user-scalable=no"
          />
          <title>{title}</title>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
            integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <div>
          <div
            className="main-container"
            style={{ minHeight: this.state.mainHeight }}
          >
            <MainMenu />
            {children}
          </div>
          <Footer mode={mode} getHeight={this.setFooterHeight} />
        </div>
      </div>
    )
  }
}

export default Layout
