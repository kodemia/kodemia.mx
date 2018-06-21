// Packages
import React from 'react'

// Ours
import Environment from '../static/js/environment'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

    if(req) {
      console.log('server')
    } else {
      console.log('client')
    }

    return {
      userAgent,
    }
  }

  render() {
    Environment.init();

    return (
      <div className="main-container">
        Hello World {this.props.userAgent}
      </div>
    )
  }
}

