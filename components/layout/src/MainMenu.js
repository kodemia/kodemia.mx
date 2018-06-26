// Packages
import Link from 'next/link'
import asset from 'next/asset'

// Ours
import NavItems from './NavItems'

const MainMenu = () => (
  <div className="main-menu">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-6">
          <div className="logo">
            <Link href="/">
              <a>
                <img
                  src={asset('/img/logos/logo-h-for-white.png')}
                  alt="Kodemia"
                />
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
