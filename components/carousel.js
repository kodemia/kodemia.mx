// Package
import React, { Component } from 'react'
import Link from 'next/link'

// Ours
import Images from '../config/carousels'

class Carousel extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { section = 'home' } = this.props

    return (
      <div className="owl-carousel owl-theme owl-default-nav">
        {Images[section].map((link, i) => (
          <div className="item" key={i}>
            <Link href={link} data-fancybox="Galería">
              <a>
                <img src={link} alt="" />
              </a>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default Carousel
