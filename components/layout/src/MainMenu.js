// Packages
import React from 'react'
import Link from 'next/link'

// Ours
import NavItems from './NavItems'

export default class extends React.Component {

  /*static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }*/

  render() {

    return (
      <div className="main-menu">
        <div className="scontainer">
          <div className="line">
            <div className="x:scol-6">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="../../static/img/logos/logo-h-for-white.png" alt="Kodemia"/>
                  </a>
                </Link>
              </div>
            </div>
            <div className="x:scol-6 x:right">
              <NavItems />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
