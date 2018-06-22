// Package
import Head from 'next/head'
import React, { Component } from 'react'

// Less
import "../../static/less/app.less"

// Ours
import MainMenu from './src/MainMenu'
import Footer from './src/Footer'

export default class extends Component {

  static getInitialProps({ children, title = 'Kodemia' }) {

    return {
      children,
      title
    }
  }

  _setSiteHeight() {

    const $mainContainer = document.getElementsByClassName('main-container')
    const $footer = document.getElementsByTagName('footer')
    const footerHeight = $footer[0].offsetHeight
    const siteHeight = window.visualViewport.height
    const mainContainerHeight = siteHeight - footerHeight

    $mainContainer[0].style.minHeight = mainContainerHeight + 'px'
  }

  componentDidMount() {

    const self = this;
    let resizeTimer;

    window
    .addEventListener("load", function(event) {
      self._setSiteHeight();
    })

    window
    .addEventListener("resize", function(event) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        self._setSiteHeight();
      }, 50);
    })
  }

  render() {

    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no" />
          <title>{ this.props.title }</title>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <div>
          <div className="main-container">
            <MainMenu />
            { this.props.children }
          </div>
          <Footer type='white' />
          <Footer type='black' />
        </div>
      </div>
    )
  }
}
