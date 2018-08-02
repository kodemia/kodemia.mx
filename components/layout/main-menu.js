// Packages
import Link from 'next/link'

// Ours
import Logo from '../icons/logo-full'
import NavItems from './nav-items'

const MainMenu = () => (
  <div className="main-menu">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-6">
          <div className="logo">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
        </div>
        <div className="x:scol-6 x:right">
          <NavItems />
        </div>
      </div>
    </div>
  </div>
)

export default MainMenu
