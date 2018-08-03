// Packages
import Layout from '../components/layout'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

// Ours
import Button from '../components/button-submit'
import HeaderCourse from '../components/pages/cursos/HeaderCourse'

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
            <div className="x:scol-x-12 bottom-x">
              <label className="x:fs-14">Nombre Completo</label>
              <div className="input-field mrg-x-top-5">
                <Field className="input" type="text" name="fullname" />
                {touched.fullname &&
                  errors.fullname && (
                    <p className="form-error">{errors.fullname}</p>
                  )}
              </div>
            </div>
            <div className="x:scol-x-12 bottom-x">
              <label className="x:fs-14">Correo electrónico</label>
              <div className="input-field mrg-x-top-5">
                <Field className="input" type="email" name="email" />
                {touched.email &&
                  errors.email && <p className="form-error">{errors.email}</p>}
              </div>
            </div>
            <div className="x:scol-x-12 bottom-x">
              <label className="x:fs-14">Teléfono</label>
              <div className="input-field mrg-x-top-5">
                <Field className="input" type="text" name="phone" />
                {touched.phone &&
                  errors.phone && <p className="form-error">{errors.phone}</p>}
              </div>
            </div>
            <div className="x:scol-x-12 bottom-x">
              <label className="x:fs-14">Curso de interés</label>
              <div className="input-field mrg-x-top-5">
                <Field component="select" name="course">
                  <option value="">Selecciona una opción</option>
                  <option value="white-koder">
                    White Koder (Full Stack Jr)
                  </option>
                  <option value="black-koder">
                    Black Koder (Full Stack Sr)
                  </option>
                </Field>
                {touched.course &&
                  errors.course && (
                    <p className="form-error">{errors.course}</p>
                  )}
              </div>
            </div>

            <div className="x:scol-x-12 bottom-x">
              <label className="x:fs-14">¿Cómo te enteraste de Kodemia?</label>
              <div className="input-field mrg-x-top-5">
                <Field component="textarea" name="reference" />
                {touched.reference &&
                  errors.reference && (
                    <p className="form-error">{errors.reference}</p>
                  )}
              </div>
            </div>
            <div className="x:scol-x-12 bottom-x">
              <label className="x:fs-14">¿Porqué estudiar en Kodemia?</label>
              <div className="input-field mrg-x-top-5">
                <Field component="textarea" name="why" />
                {touched.why &&
                  errors.why && <p className="form-error">{errors.why}</p>}
              </div>
            </div>
            <div className="x:scol-x-12 bottom-x">
              <label className="x:fs-14">
                ¿Qué conocimientos en programación tienes?
              </label>
              <div className="input-field mrg-x-top-5">
                <Field component="textarea" name="experience" />
                {touched.experience &&
                  errors.experience && (
                    <p className="form-error">{errors.experience}</p>
                  )}
              </div>
            </div>
            <div className="x:right x:mrg-top-30 x:mrg-bt-30">
              <Button type="submit" disabled={isSubmitting} className="x:fs-14">
                Aplicar
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
