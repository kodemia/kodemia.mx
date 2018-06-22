// Packages
import React from 'react'
import Link from 'next/link'

// Ours
// ...

export default class extends React.Component {

  /*static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }*/

  render() {

    return (
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Link</a>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
