// Package
import React, { Component } from 'react'

// Ours
// ...

class ButtonMenu extends Component {
  constructor(props) {
    super(props)
  }
  _openMenu(e) {
    e.preventDefault()
    const $nav = document.getElementById('nav')
    const $menuIcon = document.getElementsByClassName('menu-icon')[0]

    if ($nav.classList.contains('animate-nav-in')) {
      $nav.classList.remove('animate-nav-in')

      $nav.classList.add('animate-nav-out')

      $menuIcon.classList.remove('open')
    } else {
      $nav.classList.remove('animate-nav-out')

      $nav.classList.add('animate-nav-in')

      $menuIcon.classList.add('open')
    }
  }

  componentDidMount() {
    const self = this
    document.onclick = e => {
      self._openMenu(e)
    }
  }

  render() {
    return (
      <a href="#" className="menu-icon l:hide" onClick={e => this._openMenu(e)}>
        <span />
      </a>
    )
  }
}

export default ButtonMenu
