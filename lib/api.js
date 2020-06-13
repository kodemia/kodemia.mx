import axios from 'axios'
import _ from 'lodash'

const baseURL = 'https://kodemia-api.kodemia.now.sh'
const api = axios.create({ baseURL })

export const login = async (email, password) => {
  const url = `/auth/login`
  const response = await api.post(url, { email, password })
  const token = _.get(response, 'data.payload.token')
  return token
}

export const getClasses = async token => {
  const url = `/classes`
  const response = await api.get(url, {
    headers: { Authorization: token }
  })
  const classes = _.get(response, 'data.payload.classes')
  return classes
}

export const getStreaming = async token => {
  const url = '/streams'
  const response = await api.get(url, {
    headers: { Authorization: token }
  })

  return _.get(response, 'data.payload.stream', {})
}

export const submitSkillUpForm = async data => {
  const url = '/active-campaign/contacts/skillup'
  const response = await api.post(url, data)
  return _.get(response, 'data.success', false)
}
