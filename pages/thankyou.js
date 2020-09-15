// Packages
import Link from 'next/link'

// Ours
import Layout from '../components/layout'
import Cursor from '../components/cursor'
import Button from '../components/button'
import HeaderCourse from '../components/pages/cursos/HeaderCourse'
import Steps from '../components/pages/thankyou/steps.md'

const ThankYouPage = () => (
  <Layout title="Kodemia :: La primera academia real para programadores">
    <HeaderCourse>
      <h1 className="title x:fs-22 s:fs-30 l:fs-40 c-white">
        ¡Aplicación recibida!
      </h1>
      <p className="desc x:fs-14 s:fs-18 l:fs-20 x:mrg-top-20 c-grey-400">
        Tu aplicación ha sido recibida y te hemos enviado toda la información,
        por favor revisa todas las bandejas de tu correo y pronto estaremos en
        contacto contigo.
      </p>
    </HeaderCourse>
    <section className="x:pad-bt-20 s:pad-bt-40">
      <div className="scontainer">
        <div className="x:mrg-bottom-20">
          <h2>
            Te recordamos que el proceso de inscripción es el siguient
            <Cursor>e:</Cursor>
          </h2>
        </div>
        <Steps />
        <div className="x:center x:mrg-top-30 x:mrg-bt-30">
          <Link href="/">
            <Button type="submit" className="x:fs-14">
              Regresar al inicio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default ThankYouPage
