// Packages
import React, { Component } from 'react'

// Ours
import NavLinks from '../../config/nav-items'

class NavItems extends Component {
  render() {
    return (
      <ul>
        {NavLinks.map((link, i) => (
          <li key={i} className={`${link.classes}`}>
            <a href={`${link.href}`} className={link.anchor ? 'anchor' : null}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    )
  }
}

export default NavItems
