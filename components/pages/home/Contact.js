// Package
import asset from 'next/asset'

// Ours
import Cursor from '../../cursor'

const Contact = () => (
  <section id="contacto" className="x:pad-bt-20 s:pad-bt-40">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:mrg-bottom-20">
          <h2>
            Contact<Cursor>o</Cursor>
          </h2>
        </div>
        <div className="x:scol-12 x:center">
          <img
            className="img-liquid img-logo"
            src={asset('/img/logos/isotipo-negro.png')}
            alt="Kodemia"
          />
          <img
            className="img-liquid img-logo x:mrg-negative-left-15"
            src={asset('/img/logos/isotipo-blanco.png')}
            alt="Kodemia"
          />
        </div>
        <div className="x:scol-12 x:center">
          <p className="x:fs-18 s:fs-20">
            Email: <br />{' '}
            <a className="txt-underline" href="mailto:info@kodemia.mx">
              info@kodemia.mx
            </a>
          </p>
          {/*<p className="x:fs-18 s:fs-20">
            Teléfono: <br />{' '}
            <a className="txt-underline" href="tel:000 000 0000">
              000 000 0000
            </a>
          </p>
          <p className="x:fs-18 s:fs-20">
            Horario de atención: <br /> 00:00h - 00:00h
          </p>*/}
        </div>
      </div>
    </div>
  </section>
)

export default Contact
