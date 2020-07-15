// Package
import asset from 'next/asset'

// Ours
import Cursor from '../../cursor'

const Contact = () => (
  <section
    id="contacto"
    className="x:pad-top-20 s:pad-top-40 x:mrg-negative-bottom-5 bg-white bg-pattern-right"
  >
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
          <p className="x:fs-18 s:fs-20">
            Teléfonos: <br />{' '}
            <a className="txt-underline" href="tel:+52 55 5015 0517">
              (+5255) 5015 0517
            </a>
            <br />
            <a className="txt-underline" href="tel:01800 212 0022">
              01800 212 0022
            </a>
          </p>
          <p className="x:fs-18 s:fs-20">
            Tonalá 10, Roma norte, 06700, Ciudad de México, CDMX
          </p>
        </div>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7971050927536!2d-99.16541498557973!3d19.421170546079733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff375cae6ed7%3A0xb4572b930d352c69!2sCOW+Roma!5e0!3m2!1sen!2smx!4v1553116434312"
      width="100%"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen={true}
    />
  </section>
)

export default Contact
