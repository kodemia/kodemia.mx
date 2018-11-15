// Package
import Head from 'next/head'
import React, { Component } from 'react'
import asset from 'next/asset'

// Less
import '../../static/less/app.less'

// Ours
import Footer from './footer'

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

  viewport() {
    var e = window
    var a = 'inner'
    if (!('innerWidth' in window)) {
      a = 'client'
      e = document.documentElement || document.body
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] }
  }

  setFooterHeight(height) {
    this.setState({ footerHeight: height })
  }

  _setSiteHeight = () => {
    const siteHeight = this.viewport().height
    const mainContainerHeight = siteHeight - this.state.footerHeight

    if (this.state.mainHeight === mainContainerHeight) {
      return
    }

    this.setState({ initialized: true, mainHeight: mainContainerHeight })
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

          <link
            rel="shortcut icon"
            href={asset('/img/ico/favicon.ico')}
            type="image/x-icon"
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={asset('/img/ico/apple-icon-57x57.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={asset('/img/ico/apple-icon-60x60.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={asset('/img/ico/apple-icon-72x72.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={asset('/img/ico/apple-icon-76x76.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={asset('/img/ico/apple-icon-114x114.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={asset('/img/ico/apple-icon-120x120.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={asset('/img/ico/apple-icon-144x144.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={asset('/img/ico/apple-icon-152x152.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={asset('/img/ico/apple-icon-180x180.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={asset('/img/ico/favicon-16x16.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={asset('/img/ico/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={asset('/img/ico/favicon-96x96.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={asset('/img/ico/android-icon-192x192.png')}
          />
          <link rel="manifest" href={asset('/img/ico/manifest.json')} />

          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content={asset('/img/ico/ms-icon-144x144.png')}
          />
          <meta name="theme-color" content="#ffffff" />

          <title>{title}</title>

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
            integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@kodemiamx" />
          <meta name="twitter:title" content="Kodemia" />
          <meta
            name="twitter:description"
            content="La primera academia real para programadores"
          />
          <meta
            name="twitter:image:src"
            content={asset('img/logos/kodemia-og-img.jpg')}
          />

          <meta property="og:title" content="Kodemia" />
          <meta
            property="og:description"
            content="La primera academia real para programadores"
          />
          <meta property="og:url" content="https://kodemia.mx" />
          <meta
            property="og:image"
            content={asset('img/logos/kodemia-og-img.jpg')}
          />
          <meta property="og:site_name" content="Kodemia" />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-781067354"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-781067354');};`
            }}
          />
        </Head>
        <div>
          <div
            className="main-container"
            style={{ minHeight: this.state.mainHeight }}
          >
            {children}
          </div>
          <Footer mode={mode} getHeight={this.setFooterHeight} link={false} />
        </div>
      </div>
    )
  }
}

export default Layout
