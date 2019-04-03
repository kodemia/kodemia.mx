import React, { Component } from 'react'
import Router from 'next/router'

// Tools
import { login } from '../lib/api'

// Components
import Layout from '../components/layout'

export default class Live extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: false
    }
  }

  setError() {
    this.setState({ error: true })
    setTimeout(() => this.setState({ error: false }), 2000)
  }

  signIn = () => {
    const { email, password } = this.state
    if (!email || !email) return this.setError()

    login(email, password)
      .then(token => {
        sessionStorage.setItem('token', token)
        Router.replace('/live')
      })
      .catch(() => this.setError())
  }

  componentDidMount() {
    const token = sessionStorage.getItem('token')
    if (token) Router.replace('/live')
  }

  render() {
    const { email, password, error } = this.state
    return (
      <Layout title="Live :: Kodemia">
        <div className="login-container">
          <div className="login-card">
            <header className="login-header">
              <h1 className="login-title">Bienvenid@</h1>
            </header>
            <div className="login-body">
              <input
                className="login-input"
                placeholder="Email"
                type="email"
                value={email}
                onChange={({ target }) =>
                  this.setState({ email: target.value })
                }
              />
              <input
                className="login-input"
                placeholder="Password"
                type="password"
                value={password}
                onChange={({ target }) =>
                  this.setState({ password: target.value })
                }
              />
            </div>
            <footer>
              <button
                className={`login-button ${error ? 'has-error' : ''} `}
                onClick={this.signIn}
                disabled={error}
              >
                {error ? 'Datos invalidos' : 'Ingresar'}
              </button>
            </footer>
          </div>
        </div>
      </Layout>
    )
  }
}
