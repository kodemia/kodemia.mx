/* global sessionStorage */
import React, { Component } from 'react'
import Router from 'next/router'
import moment from 'moment-timezone'

import { getClasses } from '../lib/api'

import Layout from '../components/layout'
import ClassCard from '../components/class-card'

class Clases extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classes: []
    }
  }

  componentDidMount() {
    const token = sessionStorage.getItem('token')
    // TODO: validate if the token is valid
    if (!token) {
      sessionStorage.setItem('from', 'clases')
      Router.replace('/login')
    }

    getClasses(token).then(classes => {
      this.setState({ classes })
    })
  }

  render() {
    const { classes } = this.state
    return (
      <Layout>
        <div className="classes-list">
          {classes.map((klass, index) => {
            const {
              date,
              description,
              mentor = {},
              playbackId,
              thumbnail,
              title,
              vimeoId = null
            } = klass

            const { firstName = '', lastName = '' } = mentor
            const mentorName = `${firstName} ${lastName}`
            const isAlt = !(index % 2 === 0)

            return (
              <ClassCard
                key={index}
                thumbnail={thumbnail}
                isAlt={isAlt}
                mentor={mentorName}
                date={moment(date).tz('utc')}
                description={description}
                playbackId={playbackId}
                title={title}
                vimeoId={vimeoId}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Clases
