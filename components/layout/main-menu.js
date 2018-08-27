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
      isOpen: null,
      isMoving: null
    }

    this.btnRef = React.createRef()
  }

  toggleMenu = e => {
    e.preventDefault()

    this.setState({ isOpen: !this.state.isOpen })
  }

  closeMenu = e => {
    const $btn = this.btnRef.current

    if (e.target !== $btn && !$btn.contains(e.target) && this.state.isOpen) {
      this.setState({ isOpen: false })
    }
  }

  followme = () => {
    const $banner = document.getElementById('banner')
    const windowScrollTop = window.scrollY
    const bannerHeight = $banner.offsetHeight

    this.setState({ isMoving: false })

    if (windowScrollTop >= bannerHeight) {
      this.setState({ isMoving: true })
    }
  }

  componentDidMount() {
    this.followme

    document.addEventListener('click', this.closeMenu)
    document.addEventListener('scroll', this.followme)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeMenu)
    document.addEventListener('scroll', this.followme)
  }

  render() {
    const { isOpen, isMoving } = this.state
    let navClass

    if (isOpen === false) {
      navClass = 'animate-nav-out'
    } else if (isOpen === true) {
      navClass = 'animate-nav-in'
    }

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
              <nav
                id="nav"
                className={navClass + (isMoving ? ' followme ' : '')}
              >
                <NavItems />
              </nav>
            </div>
            <div className="x:scol-2 x:right">
              <a
                href="#"
                className={
                  'menu-icon l:hide ' +
                  (isOpen ? 'open ' : '') +
                  (isMoving ? 'followme ' : '')
                }
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
