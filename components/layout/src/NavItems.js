// Packages
import Link from 'next/link'

// Ours
// ...

const links = [
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Link',
    href: '/'
  },
  {
    name: 'Link',
    href: '/about'
  }
];

const NavItems = () => (
  <nav>
    <ul>
      {links.map((link, i) =>
        (
          <li key={i}>
            <Link href={link.href}>
              <a>{link.name}</a>
            </Link>
          </li>
        )
      )}
    </ul>
  </nav>
)

export default NavItems
