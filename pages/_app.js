// Packages
import App, { Container } from 'next/app'
import React from 'react'
import Router from 'next/router'
import withAnalytics from '../components/analytics'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default withAnalytics(Router, {
  ga: 'UA-117971935-4',
  fbq: '502027597333867'
})(MyApp)
