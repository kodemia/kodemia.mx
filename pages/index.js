// Packages
import React from 'react'

// Ours
// ...

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

  consoleLog = () => {
    console.log('ok ...');
  }

  render() {
    return (
      <div onClick={ this.consoleLog }>
        Hello World {this.props.userAgent}
      </div>
    )
  }
}

