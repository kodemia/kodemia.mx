// Packages
import React, { Component } from 'react'
import Layout from '../components/layout'

import ClassCard from '../components/classCard'
import { getClasses } from '../lib/api'

class Clases extends Component {
  constructor (props) {
    super(props)
    this.state = {
      classes: []
    }
  }
  componentDidMount () {
    getClasses()
      .then(classes => {
        this.setState({ classes })
        console.warn('classes got: ', classes)
      })
      .catch(error => {
        console.error('ERROR: ', error)
      })
  }

  render () {
    const { classes } = this.state
    return (
      <Layout>
        {
          classes.map((klass, index) => {
            const { date, description, mentor, playbackId, thumbnail, title } = klass
            const { firstName, lastName } = mentor
            const mentorName = `${firstName} ${lastName}`
            const isAlt = !(index % 2 === 0)

            return <ClassCard 
              key={index} 
              thumbnail={thumbnail} 
              isAlt={isAlt}
              mentor={mentorName}
              date={date}
              description={description}
              playbackId={playbackId}
              title={title}
            />
          })
        }
      </Layout>
    )
  }
}

export default Clases
