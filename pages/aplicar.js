// Packages
import Router from 'next/router'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

// Ours
import Layout from '../components/layout'
import Button from '../components/button-submit'
import HeaderCourse from '../components/pages/cursos/HeaderCourse'

//api
import { submitApplyForm } from '../lib/api'

const ApplicantPage = ({ errors, touched, isSubmitting }) => (
  <Layout title="Kodemia :: La primera academia real para programadores">
    <HeaderCourse>
      <h1 className="title x:fs-22 s:fs-30 l:fs-40 c-white">
        Aplica al siguiente curso de Kodemia
      </h1>
      <p className="desc x:fs-14 s:fs-18 l:fs-20 x:mrg-top-20 c-grey-400">
        Transforma tu carrera, incrementa tu conocimiento y convive con los
        mejores desarrolladores.
      </p>
    </HeaderCourse>
    <section className="x:pad-b-20 s:pad-b-40">
      <div className="scontainer">
        <div className="line simple-form">
          <Form>
            <div className="x:scol-12">
              <label className="x:fs-14">Nombre(s)</label>
              <div className="input-field mrg-x-top-5">
                <Field className="input" type="text" name="firstName" />
                {touched.firstName && errors.firstName && (
                  <p className="form-error">{errors.firstName}</p>
                )}
              </div>
            </div>
            <div className="x:scol-12">
              <label className="x:fs-14">Apellidos</label>
              <div className="input-field mrg-x-top-5">
                <Field className="input" type="text" name="lastName" />
                {touched.lastName && errors.lastName && (
                  <p className="form-error">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="x:scol-12">
              <label className="x:fs-14">Correo electrónico</label>
              <div className="input-field mrg-x-top-5">
                <Field className="input" type="email" name="email" />
                {touched.email && errors.email && (
                  <p className="form-error">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="x:scol-12">
              <label className="x:fs-14">Teléfono</label>
              <div className="input-field mrg-x-top-5">
                <Field className="input" type="text" name="phone" />
                {touched.phone && errors.phone && (
                  <p className="form-error">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="x:scol-12">
              <label className="x:fs-14">Curso de interés</label>
              <div className="input-field mrg-x-top-5">
                <Field component="select" name="course">
                  <option value="">Selecciona una opción</option>
                  <option value="javascript-presential">
                    Full Stack Javascript (Presencial)
                  </option>
                  <option value="javascript-live">
                    Full Stack Javascript (Live)
                  </option>
                  <option value="python-presential">
                    Full Stack Python (Presencial)
                  </option>
                  <option value="python-live">Full Stack Python (Live)</option>
                </Field>
                {touched.course && errors.course && (
                  <p className="form-error">{errors.course}</p>
                )}
              </div>
            </div>

            <div className="x:right x:mrg-top-30 x:mrg-bt-30">
              <Button type="submit" disabled={isSubmitting} className="x:fs-14">
                {isSubmitting ? 'Aplicando...' : 'Aplicar'}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  </Layout>
)

ApplicantPage.getInitialProps = async ({ query }) => {
  if (query.course !== undefined) {
    return { course: query.course }
  }

  return {}
}

export default withFormik({
  mapPropsToValues({ firstName, lastName, email, phone, course }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      phone: phone || '',
      course: course || ''
    }
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('Por favor ingresa tu nombre '),
    lastName: Yup.string().required('Por favor ingresa tus apellidos '),
    email: Yup.string()
      .email('El correo no es válido')
      .required('Por favor ingresa tu correo'),
    phone: Yup.number()
      .min(9, 'El teléfono no es válido')
      .required('Por favor ingresa tu teléfono'),
    course: Yup.string().required(
      'Por favor elige al menos uno de los cursos que quieras asistir'
    )
  }),
  async handleSubmit(values, { setSubmitting }) {
    /* let dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    } */

    try {
      await submitApplyForm(values)

      Router.push('/thankyou')
    } catch (err) {
      //
    }

    setSubmitting(false)
  }
})(ApplicantPage)
