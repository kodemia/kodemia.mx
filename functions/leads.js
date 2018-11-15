const { AIRTABLE_KEY } = process.env
const validator = require('node-input-validator')
const Airtable = require('airtable')

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: AIRTABLE_KEY
})

const base = Airtable.base('appflE23xcPLD1ODz')

function clean(obj) {
  for (var propName in obj) {
    if (
      obj[propName] === '' ||
      obj[propName] === null ||
      obj[propName] === undefined
    ) {
      delete obj[propName]
    }
  }
}

const addApplier = async req => {
  const data = {
    Name: req.fullname,
    Email: req.email,
    Phone: req.phone
  }

  clean(data)

  return new Promise((res, rej) => {
    base('Leads').create(data, (err, record) => {
      if (err) {
        rej(err)
      }
      res(record)
    })
  })
}

exports.handler = async (event, context, callback) => {
  const { httpMethod, body } = event

  if (httpMethod !== 'POST') {
    callback(null, {
      statusCode: 405,
      body: JSON.stringify({ success: false, errors: 'Not allowed.' })
    })

    return
  }

  const req = JSON.parse(body)

  const validate = new validator(req, {
    fullname: 'required',
    email: 'required|email',
    phone: 'digitsBetween:10,13'
  })

  const isValid = await validate.check()

  if (!isValid) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ success: false, errors: validate.errors })
    })

    return
  }

  try {
    await addApplier(req)
  } catch (e) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ success: false, errors: e })
    })

    return
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  })
}
