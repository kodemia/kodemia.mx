// Package
import Document, { Head, NextScript } from 'next/document'

// Ours
import "../static/less/app.less"
import MainContainer from '../components/main-container'
import Footer from '../components/footer'

export default class AppHeader extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>base-next-6</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <MainContainer />
          <Footer />
          <NextScript />
        </body>
      </html>
    )
  }
}
