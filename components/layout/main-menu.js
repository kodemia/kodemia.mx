// Packages
import React, { Component } from 'react'
import Link from 'next/link'

// Ours
import Logo from '../icons/logo-full'
import NavItems from './nav-items'

class MainMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.btnRef = React.createRef()
  }

  toggleMenu = e => {
    e.preventDefault()
    const $nav = document.getElementById('nav')

    this.setState({ isOpen: !this.state.isOpen })

    // Validar contra state...

    if ($nav.classList.contains('animate-nav-in')) {
      $nav.classList.remove('animate-nav-in')
      $nav.classList.add('animate-nav-out')
    } else {
      $nav.classList.remove('animate-nav-out')
      $nav.classList.add('animate-nav-in')
    }
  }

  closeMenu = e => {
    const $btn = this.btnRef.current
    const $nav = document.getElementById('nav')

    if (e.target !== $btn && !$btn.contains(e.target) && this.state.isOpen) {
      this.setState({ isOpen: false })

      $nav.classList.remove('animate-nav-in')
      $nav.classList.add('animate-nav-out')
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.closeMenu)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeMenu)
  }

  render() {
    const { isOpen } = this.state

    return (
      <div className="main-menu">
        <div className="scontainer">
          <div className="line">
            <div className="x:scol-10">
              <div className="logo inline-block x:middle">
                <Link href="/">
                  <a>
                    <Logo />
                  </a>
                </Link>
              </div>
              <nav id="nav">
                <NavItems />
              </nav>
            </div>
            <div className="x:scol-2 x:right">
              <a
                href="#"
                className={'menu-icon l:hide ' + (isOpen ? 'open' : '')}
                onClick={this.toggleMenu}
                ref={this.btnRef}
              >
                <span />
              </a>
              <Link href="/aplicar" prefetch>
                <a className="btn btn--white-o btn--small x:fs-14 txt-uppercase x:hide l:show">
                  Aplicar
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainMenu
