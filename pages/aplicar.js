// Packages
import Layout from '../components/layout'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

// Ours

const ApplicantPage = ({ errors, touched, isSubmitting }) => (
  <Layout title="Kodemia :: La primera academia real para programadores">
    <section className="x:pad-bt-20 s:pad-bt-40">
      <div className="scontainer line">
        <Form>
          <div className="scol-x-12 bottom-x">
            <label className="fs-x-14 fs-s-16">Nombre Completo</label>
            <div className="input-field mrg-x-top-5">
              <Field
                className="input"
                type="text"
                name="fullname"
                placeholder="Nombre Completo"
              />
              {touched.fullname && errors.fullname && <p>{errors.fullname}</p>}
            </div>
          </div>
          <div className="scol-x-12 bottom-x">
            <label className="fs-x-14 fs-s-16">Correo electrónico</label>
            <div className="input-field mrg-x-top-5">
              <Field
                className="input"
                type="email"
                name="email"
                placeholder="Email"
              />
              {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
          </div>
          <div className="scol-x-12 bottom-x">
            <label className="fs-x-14 fs-s-16">Teléfono</label>
            <div className="input-field mrg-x-top-5">
              <Field
                className="input"
                type="text"
                name="phone"
                placeholder="Teléfono"
              />
              {touched.phone && errors.phone && <p>{errors.phone}</p>}
            </div>
          </div>
          <div className="scol-x-12 bottom-x">
            <label className="fs-x-14 fs-s-16">Curso de interés</label>
            <div className="input-field mrg-x-top-5">
              <Field component="select" name="course">
                <option value="">Selecciona una opción</option>
                <option value="white-koder">White Koder (Full Stack Jr)</option>
                <option value="black-koder">Black Koder (Full Stack Sr)</option>
              </Field>
              {touched.course && errors.course && <p>{errors.course}</p>}
            </div>
          </div>

          <div className="scol-x-12 bottom-x">
            <label className="fs-x-14 fs-s-16">
              ¿Cómo te enteraste de Kodemia?
            </label>
            <div className="input-field mrg-x-top-5">
              <Field component="textarea" name="reference" />
              {touched.reference &&
                errors.reference && <p>{errors.reference}</p>}
            </div>
          </div>

          <div className="scol-x-12 bottom-x">
            <label className="fs-x-14 fs-s-16">
              ¿Porqué estudiar en Kodemia?
            </label>
            <div className="input-field mrg-x-top-5">
              <Field component="textarea" name="why" />
              {touched.why && errors.why && <p>{errors.why}</p>}
            </div>
          </div>
          <div className="scol-x-12 bottom-x">
            <label className="fs-x-14 fs-s-16">
              ¿Qué conocimientos en programación tienes?
            </label>
            <div className="input-field mrg-x-top-5">
              <Field component="textarea" name="experience" />
              {touched.experience &&
                errors.experience && <p>{errors.experience}</p>}
            </div>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
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
  mapPropsToValues({
    fullname,
    email,
    phone,
    course,
    reference,
    why,
    experience
  }) {
    return {
      fullname: fullname || '',
      email: email || '',
      phone: phone || '',
      course: course || '',
      reference: reference || '',
      why: why || '',
      experience: experience || ''
    }
  },
  validationSchema: Yup.object().shape({
    fullname: Yup.string().required('Por favor ingresa tu nombre completo'),
    email: Yup.string()
      .email('El correo no es válido')
      .required('Por favor ingresa tu correo'),
    phone: Yup.number()
      .min(10, 'El teléfono no es válido')
      .max(13, 'El teléfono no es válido')
      .required('Por favor ingresa tu teléfono'),
    course: Yup.string().required(
      'Por favor elige al menos uno de los cursos que quieras asistir'
    ),
    reference: Yup.string().required(
      'Por favor cuéntanos como te enteraste de nosotros'
    )
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    try {
      const res = await axios.post('/.netlify/functions/apply', values)

      if (res && res.data.success) {
        resetForm()
      } else {
        setErrors(res.errors)
      }
    } catch (err) {
      setErrors(err.errors)
    }

    setSubmitting(false)
  }
})(ApplicantPage)
