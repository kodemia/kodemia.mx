// Packages
import React, { Component } from 'react'
import Link from 'next/link'

// Ours
import NavLinks from '../../../config/NavItems'

class NavItems extends Component {
  render() {
    return (
      <nav>
        <ul>
          {NavLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <a>
                  {link.name}
                  <span>{link.cursor}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default NavItems
