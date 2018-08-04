// Packages
import Link from 'next/link'

// Ours
import Logo from '../icons/logo-full'

const MainMenu = () => (
  <div className="main-menu">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 m:scol-10">
          <div className="logo inline-block x:middle">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div
            className="x:show-inline m:hide x:middle"
            style={{ float: 'right' }}
          >
            <button
              className="c-white menu-icon x:pad-top-5 x:mrg-top-5"
              onClick={MainMenu.handleClick}
            >
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <nav id="nav" className="x:middle x:hide m:show-inline">
            <ul>
              <li className="x:show m:show-inline">
                <a href={`/#que-es-kodemia`}>¿Qué es Kodemia?</a>
              </li>
              <li className="x:show m:show-inline">
                <a href={`/#cursos`}>Cursos</a>
              </li>
              <li className="x:show m:show-inline">
                <a href={`/#contacto`}>Contacto</a>
              </li>
              <li className="x:show m:hide">
                <Link href="/aplicar" prefetch>
                  <a className="action">Aplicar</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="nav-items" className="inline-block x:middle x:scol-2 x:right">
          <nav>
            <ul>
              <li className="x:hide m:show-inline">
                <Link href="/aplicar" prefetch>
                  <a className="action">Aplicar</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
)

MainMenu.handleClick = e => {
  const nav = document.getElementById('nav')

  e.preventDefault()
  nav.classList.toggle('block')
  nav.classList.toggle('x:hide')
}

export default MainMenu
