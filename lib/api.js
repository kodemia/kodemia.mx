import axios from 'axios'
import _ from 'lodash'

const HOST =
  'http://localhost:8080' || 'https://kodemia-api-devcharles.kodemia.now.sh'
const api = axios.create({
  baseURL: HOST
})

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
  const url = '/streams/url'
  const response = await api.get(url, {
    headers: { Authorization: token }
  })

  return _.get(response, 'data.payload.stream.playbackId', '')
}
