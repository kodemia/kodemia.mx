// Packages
import Link from 'next/link'

// Ours
import Logo from '../icons/logo-full'

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
          <nav className="inline-block x:middle">
            <ul>
              <li>
                <a href={`/#que-es-kodemia`}>¿Qué es Kodemia?</a>
              </li>
              <li>
                <a href={`/#cursos`}>Cursos</a>
              </li>
              <li>
                <a href={`/#contacto`}>Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="x:scol-2 x:right">
          <nav>
            <ul>
              <li>
                <Link href="/aplicar">
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

export default MainMenu
