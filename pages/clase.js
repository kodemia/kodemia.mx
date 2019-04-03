/* global sessionStorage */
import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'

import Layout from '../components/layout'

const Klass = dynamic({
  modules: () => {
    return {
      KlassComp: import('../components/class')
    }
  },
  ssr: false,
  render: renderKlassNoSSR
})
const renderKlassNoSSR = (props, { KlassComp }) => <KlassComp />

class Clase extends Component {
  componentDidMount() {
    const token = sessionStorage.getItem('token')
    // TODO: validate if the token is valid
    if (!token) {
      sessionStorage.setItem('from', 'clases')
      Router.replace('/login')
    }
  }

  render() {
    return (
      <Layout title="Kodemia | clase">
        <Klass />
      </Layout>
    )
  }
}

export default Clase
