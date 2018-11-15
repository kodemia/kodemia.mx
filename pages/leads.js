// Packages
import Router from 'next/router'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

// Ours
import Layout from '../components/layout/leads'
import Button from '../components/button-submit'
import HeaderLeads from '../components/pages/leads/Header'

const LeadsPage = ({ errors, touched, isSubmitting }) => (
  <Layout title="Kodemia :: La primera academia real para programadores">
    <HeaderLeads />
    <section className="x:pad-bt-20 s:pad-bt-40">
      <div className="scontainer">
        <div className="line">
          <div className="s:scol-8 s:offset-2 simple-form">
            <Form>
              <div className="line">
                <div className="x:scol-12 x:center x:mrg-bottom-30">
                  <p className="x:fs-20 ff-heading">
                    ¿Quieres recibir mas información?
                  </p>
                </div>
                <div className="x:scol-12">
                  <label className="x:fs-14">Nombre Completo</label>
                  <div className="input-field mrg-x-top-5">
                    <Field className="input" type="text" name="fullname" />
                    {touched.fullname &&
                      errors.fullname && (
                        <p className="form-error">{errors.fullname}</p>
                      )}
                  </div>
                </div>
                <div className="x:scol-12">
                  <label className="x:fs-14">Correo electrónico</label>
                  <div className="input-field mrg-x-top-5">
                    <Field className="input" type="email" name="email" />
                    {touched.email &&
                      errors.email && (
                        <p className="form-error">{errors.email}</p>
                      )}
                  </div>
                </div>
                <div className="x:scol-12">
                  <label className="x:fs-14">Teléfono</label>
                  <div className="input-field mrg-x-top-5">
                    <Field className="input" type="text" name="phone" />
                    {touched.phone &&
                      errors.phone && (
                        <p className="form-error">{errors.phone}</p>
                      )}
                  </div>
                </div>
                <div className="x:scol-12 x:center x:mrg-top-30 x:mrg-bt-30">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="x:fs-14 btn btn--full"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

LeadsPage.getInitialProps = async ({ query }) => {
  if (query.course !== undefined) {
    return { course: query.course }
  }

  return {}
}

export default withFormik({
  mapPropsToValues({ fullname, email, phone }) {
    return {
      fullname: fullname || '',
      email: email || '',
      phone: phone || ''
    }
  },
  validationSchema: Yup.object().shape({
    fullname: Yup.string().required('Por favor ingresa tu nombre completo'),
    email: Yup.string()
      .email('El correo no es válido')
      .required('Por favor ingresa tu correo'),
    phone: Yup.number().min(9, 'El teléfono no es válido')
  }),
  async handleSubmit(values, { resetForm, setSubmitting }) {
    let dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }

    try {
      const res = await axios.post('/.netlify/functions/leads', values)

      if (res && res.data.success) {
        resetForm()
        gtag('js', new Date())
        gtag('config', 'AW-781067354')
        gtag('event', 'conversion', {
          send_to: 'AW-781067354/w_HcCKzxmI0BENrIuPQC'
        })
      }

      Router.push('/')
    } catch (err) {
      //
    }

    setSubmitting(false)
  }
})(LeadsPage)
