// Packages
import Link from 'next/link'

// Ours
import NavLinks from '../../../config/NavItems'

const NavItems = () => (
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

export default NavItems
