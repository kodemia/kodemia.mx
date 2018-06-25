// Packages
import React, { Component } from 'react'
import Link from 'next/link'

// Ours
import NavLinks from '../../../config/NavItems'

class NavItems extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <nav>
        <ul>
          {NavLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <a>
                  {link.name}
                  <span>{link.scape}</span>
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
