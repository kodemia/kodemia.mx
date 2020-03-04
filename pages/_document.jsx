import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name='theme-color' content='#000000' />
          <link
            rel='icon'
            type='image/png'
            href='https://cdn.leco.mx/img/identity/favicon-black.png'
          />
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.7.2/css/all.css'
            integrity='sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr'
            crossOrigin='anonymous'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='https://kit.fontawesome.com/1747054f43.js' />
        </body>
      </Html>
    )
  }
}

export default MyDocument
