// Packages
import React, { Component } from 'react'
import Link from 'next/link'

// Ours
import Logo from '../icons/logo-full'
import NavItems from './nav-items'

class MainMenu extends Component {
  _scrollTopTop() {
    let viewportSize = window.innerWidth
    let elementOffset = document.getElementById('skills-title').offsetTop
    let scrollPoint =
      viewportSize < 1024
        ? elementOffset + window.innerHeight - 90
        : elementOffset + window.innerHeight * 0.6 - 110
    window.scroll({
      left: 0,
      top: scrollPoint,
      behavior: 'smooth'
    })
  } //todo: make this a dynamic function
  constructor(props) {
    super(props)

    this.state = {
      isOpen: null,
      isMoving: null,
      atSkillup: false
    }

    this.btnRef = React.createRef()
    this.bannerRef = React.createRef()
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
    const $banner = this.bannerRef.current
    const windowScrollTop = window.scrollY
    const bannerHeight = $banner.offsetHeight

    this.setState({ isMoving: false })

    if (windowScrollTop >= bannerHeight) {
      this.setState({ isMoving: true })
    }
  }

  setIfSkillup = atSkillup => {
    atSkillup
      ? this.setState({ atSkillup: true })
      : this.setState({ atSkillup: false })
  }

  componentDidMount() {
    this.followme
    const atSkillup = window.location.href.match('skillup')
    this.setIfSkillup(atSkillup)
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
      <div>
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
                <div className="d-flex align-items-center">
                  {this.state.atSkillup ? (
                    <a
                      className="btn x:fs-14 x:hide l:show x:mrg-left-20 btn-nav-white"
                      onClick={() => this._scrollTopTop(500)}
                    >
                      SkillUp
                    </a>
                  ) : (
                    <>
                      <Link href="/aplicar" prefetch>
                        <a className="btn btn--white-o btn--small x:fs-14 x:hide l:show">
                          Aplicar
                        </a>
                      </Link>
                      <Link href="/skillup" prefetch>
                        <a className="btn x:fs-14 txt-uppercase x:hide l:show x:mrg-left-20 btn-nav-white">
                          SkillUp
                        </a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainMenu
