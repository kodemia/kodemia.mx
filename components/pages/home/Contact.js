// Package
import asset from 'next/asset'

// Ours
import Cursor from '../../cursor'

const Contact = () => (
  <section
    id="contacto"
    className="x:pad-top-20 s:pad-top-40 x:mrg-negative-bottom-5 bg-grey-50"
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
          {/*<p className="x:fs-18 s:fs-20">
            Teléfono: <br />{' '}
            <a className="txt-underline" href="tel:000 000 0000">
              000 000 0000
            </a>
          </p>*/}
          <p className="x:fs-18 s:fs-20">
            Av. Revolución 356, San Pedro de los Pinos 03800 Ciudad de México,
            CDMX
          </p>
        </div>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.383045634709!2d-99.18740118458344!3d19.39584894687966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff7cb12f724b%3A0x88d7777e0e0c09ed!2sAv.+Revoluci%C3%B3n+356%2C+San+Pedro+de+los+Pinos%2C+03800+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1sen!2smx!4v1533855768414"
      width="100%"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen={true}
    />
  </section>
)

export default Contact
