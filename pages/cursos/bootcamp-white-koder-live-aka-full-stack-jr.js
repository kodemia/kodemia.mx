// Packages
import React, { Component } from 'react'
import Layout from '../../components/layout'
import Link from 'next/link'
import asset from 'next/asset'

// Plugins
import Regular from '../../static/js/shido-regular'

// Ours
import Cursor from '../../components/cursor'
import Browser from '../../components/browser'
import HeaderCourse from '../../components/pages/cursos/HeaderCourse'
import Description from '../../components/pages/cursos/white-koder-live/description.md'
import Testimonial from '../../components/pages/cursos/white-koder-live/testimonial.md'
import Syllabus from '../../components/pages/cursos/white-koder-live/syllabus.md'
import Location from '../../components/pages/cursos/white-koder-live/location.md'
import Pricing from '../../components/pages/cursos/white-koder-live/pricing.md'
import Benefits from '../../components/pages/cursos/white-koder-live/benefits.md'

class BootcampWhiteKoderPage extends Component {
  componentDidMount() {
    const regular = new Regular()
    regular.make()
  }
  render() {
    return (
      <Layout title="Bootcamp White Koder (Full Stack Jr) :: Kodemia">
        <HeaderCourse white>
          <h1 className="title x:fs-22 s:fs-30 l:fs-40 c-black">
            Bootcamp White Koder Live
          </h1>
          <p className="desc x:fs-14 s:fs-18 l:fs-20 x:mrg-top-20 c-pink">
            Iniciate en el mundo de la programación como Full Stack Jr.
          </p>
          <div className="s:mrg-top-40">
            <a
              href={asset(
                'docs/courses/bootcamps/KODEMIA_SYLLABUS_WHITE_LIVE_2020.pdf'
              )}
              className="btn btn--white s:mrg-right-10"
              target="_blank"
            >
              Descarga el temarío
            </a>
            <Link href="/aplicar?course=white-koder">
              <a className="btn btn--black">¡Aplica ahora!</a>
            </Link>
          </div>
        </HeaderCourse>
        <section className="x:pad-bt-20 s:pad-bt-40 bg-grey-50 c-black">
          <div className="scontainer">
            <div className="x:mrg-bottom-20">
              <h2 className="c-black">
                ¿A quién va dirigido<Cursor white>?</Cursor>
              </h2>
            </div>
            <div className="line" regular="twins:1024">
              <div className="l:scol-6 x:top l:pad-right-50 twins">
                <Description />
              </div>
              <div className="l:scol-6 x:top twins">
                <Browser white>
                  <pre>
                    <span>const express = require('express')</span>
                    <span>&nbsp;</span>
                    <span>const app = express()</span>
                    <span>
                      app.get('/', (req, res) => res.send('Hello World!'))
                    </span>
                    <span>
                      app.listen(3000, () => console.log('Listening on port
                      3000!'))
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
                <hr className="hr--green" />
              </div>
              <div className="x:scol-12 x:fs-14 s:fs-16 ff-heading">
                <Testimonial />
              </div>
            </div>
          </div>
        </section>
        <section className="x:pad-bt-20 s:pad-bt-40 bg-white bg-pattern-right c-black">
          <div className="scontainer">
            <div className="x:mrg-bottom-20">
              <h2 className="c-black">
                Estructura del Bootcam<Cursor white>p</Cursor>
              </h2>
            </div>
            <Syllabus />
          </div>
        </section>
        <section className="x:pad-bt-20 s:pad-bt-40 bg-grey-50 c-black">
          <div className="scontainer">
            <div className="x:mrg-bottom-20">
              <h2 className="c-black">
                Fecha y Horari<Cursor white>o</Cursor>
              </h2>
            </div>
            <Location />
          </div>
        </section>
        <section className="x:pad-bt-20 s:pad-bt-40 bg-white bg-pattern-bottom-left">
          <div className="scontainer">
            <div className="line">
              {[1, 2, 3, 4, 5, 6].map((pic, i) => (
                <div key={i} className="x:scol-6 m:scol-4">
                  <img
                    className="img-liquid img-rounded x:middle"
                    width="300"
                    src={asset(`img/classes/white/image-${pic}.jpg`)}
                    alt={i}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="x:pad-bt-20 s:pad-bt-40 bg-grey-50 c-black">
          <div className="scontainer">
            <div className="x:mrg-bottom-20">
              <h2 className="c-black">
                Precios y Financiamient<Cursor white>o</Cursor>
              </h2>
            </div>
            <Pricing />
          </div>
        </section>
        <section className="x:pad-bt-20 s:pad-bt-40 bg-white c-black">
          <div className="scontainer">
            <div className="x:mrg-bottom-20">
              <h2 className="c-black">
                Beneficio<Cursor>s</Cursor>
              </h2>
            </div>
            <Benefits />
          </div>
        </section>
      </Layout>
    )
  }
}

export default BootcampWhiteKoderPage
