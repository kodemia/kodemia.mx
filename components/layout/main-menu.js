// Packages
import Link from 'next/link'

// Ours
import Logo from '../icons/logo-full'
import ButtonMenu from '../button-menu'
import NavItems from './nav-items'

const MainMenu = () => (
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
          <NavItems />
        </div>
        <div className="x:scol-2 x:right">
          <ButtonMenu />
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

export default MainMenu
