// Package
import React, { Component } from 'react'
import Slider from 'react-slick'
import asset from 'next/asset'

// Ours
import Images from '../config/carousels'

class Carousel extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { section = 'home' } = this.props

    const settings = {
      arrows: true,
      autoplay: true,
      centerMode: false,
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      speed: 500,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 599,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
          }
        }
      ]
    }

    return (
      <div>
        <Slider {...settings}>
          {Images[section].map((link, i) => (
            <div className="item" key={i}>
              <img className="img-liquid" src={asset(link)} alt="Kodemia" />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default Carousel
