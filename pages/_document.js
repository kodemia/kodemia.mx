// Package
import Document, { Head, NextScript } from 'next/document'

// Less
import "../static/less/app.less"

// Ours
import MainContainer from '../components/main-container'
import Footer from '../components/footer'

export default class AppHeader extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Kodemia</title>
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
