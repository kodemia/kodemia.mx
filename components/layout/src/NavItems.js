// Packages
import React, { Component } from 'react'

// Ours
import NavLinks from '../../../config/NavItems'

class NavItems extends Component {
  render() {
    return (
      <nav>
        <ul>
          {NavLinks.map((link, i) => (
            <li key={i}>
              <a href={`#${link.href}`}>
                {link.name}
                <span>{link.cursor}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default NavItems
