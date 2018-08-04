// Packages
import App, { Container } from 'next/app'
import React from 'react'
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

export default withAnalytics({ ga: 'UA-117971935-4', fbq: '1763806610406720' })(
  MyApp
)
