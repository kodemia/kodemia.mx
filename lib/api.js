import axios from 'axios'
import _ from 'lodash'

const HOST = 'http://localhost:8080'

export const login = async (email, password) => {
  const url = `${HOST}/koders/login`
  const response = await axios.post(url, { email, password })
  const token = _.get(response, 'data.payload.token')
  return token
}
