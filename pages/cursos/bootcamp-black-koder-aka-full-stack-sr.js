// Packages
import Layout from '../../components/layout'
import Link from 'next/link'

// Ours
import Cursor from '../../components/cursor'
import Button from '../../components/button'
import Browser from '../../components/browser'
import HeaderCourse from '../../components/pages/cursos/HeaderCourse'
import Description from '../../components/pages/cursos/black-koder/description.md'
import Testimonial from '../../components/pages/cursos/black-koder/testimonial.md'
import Syllabus from '../../components/pages/cursos/black-koder/syllabus.md'
import Location from '../../components/pages/cursos/shared/location.md'
import Pricing from '../../components/pages/cursos/shared/pricing.md'
import Benefits from '../../components/pages/cursos/shared/benefits.md'

const BootcampBlackKoderPage = () => (
  <Layout title="Bootcamp Black Koder (Full Stack Jr) :: Kodemia">
    <HeaderCourse>
      <h1 className="title x:fs-22 s:fs-30 l:fs-40 c-white">
        Bootcamp Black Koder
      </h1>
      <p className="desc x:fs-14 s:fs-18 l:fs-20 x:mrg-top-20 c-grey-400">
        Iniciate en el mundo de la programación como Full Stack Sr.
      </p>
      <div className="s:mrg-top-40">
        <Link href="/aplicar?course=black-koder">
          <Button>¡Aplica ahora!</Button>
        </Link>
      </div>
    </HeaderCourse>
    <section className="x:pad-bt-20 s:pad-bt-40">
      <div className="scontainer">
        <div className="x:mrg-bottom-20">
          <h2>
            ¿A quién va dirigido<Cursor>?</Cursor>
          </h2>
        </div>
        <div className="line">
          <div className="l:scol-6 x:middle l:pad-right-50">
            <Description />
          </div>
          <div className="l:scol-6 x:middle">
            <Browser>
              <pre>
                <span>const express = require('express')</span>
                <span>&nbsp;</span>
                <span>const app = express()</span>
                <span>
                  app.get('/', (req, res) => res.send('Hello World!'))
                </span>
                <span>
                  app.listen(3000, () => console.log('Listening on port 3000!'))
                </span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
              </pre>
            </Browser>
          </div>
        </div>
        <div className="line">
          <div className="x:scol-12">
            <Testimonial />
          </div>
        </div>
      </div>
    </section>
    <section className="x:pad-bt-20 s:pad-bt-40 bg-black c-white">
      <div className="scontainer">
        <div className="x:mrg-bottom-20">
          <h2 className="c-white">
            Estructura del Bootcam<Cursor>p</Cursor>
          </h2>
        </div>
        <Syllabus />
      </div>
    </section>
    <section className="x:pad-bt-20 s:pad-bt-40">
      <div className="scontainer">
        <div className="x:mrg-bottom-20">
          <h2>
            Fecha y Horari<Cursor>o</Cursor>
          </h2>
        </div>
        <Location />
      </div>
    </section>
    <section className="x:pad-bt-20 s:pad-bt-40 bg-grey-50">
      <div className="scontainer">
        <div className="x:mrg-bottom-20">
          <h2>
            Precios y Financiamient<Cursor>o</Cursor>
          </h2>
        </div>
        <Pricing />
      </div>
    </section>
    <section className="x:pad-bt-20 s:pad-bt-40">
      <div className="scontainer">
        <div className="x:mrg-bottom-20">
          <h2>
            Beneficio<Cursor>s</Cursor>
          </h2>
        </div>
        <Benefits />
      </div>
    </section>
  </Layout>
)

export default BootcampBlackKoderPage
