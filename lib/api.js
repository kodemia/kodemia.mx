import axios from 'axios'
import _ from 'lodash'

const HOST = 'https://kodemia-api-devcharles.kodemia.now.sh'

export const login = async (email, password) => {
  const url = `${HOST}/koders/login`
  const response = await axios.post(url, { email, password })
  const token = _.get(response, 'data.payload.token')
  return token
}

export const getClasses = async () => {
  const url = `${HOST}/classes`
  const response = await axios.get(url)
  const classes = _.get(response, 'data.payload.classes')
  return classes
}
