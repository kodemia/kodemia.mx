// Package
import React, { Component } from 'react'
import asset from 'next/asset'

class Gallery extends Component {
  createItems = () => {
    let Item = []

    for (let i = 0; i < 12; i++) {
      Item.push(
        <div className="s:scol-6 m:scol-4 x:pad-all-5">
          <div className="gallery-item">
            <img
              className="img-liquid"
              src={asset('/img/galleries/gallery/foto-' + (i + 1) + '.jpg')}
              alt="Kodemia"
            />
          </div>
        </div>
      )
    }

    return Item
  }
  render() {
    return (
      <section
        id="galeria"
        className="x:pad-bt-20 s:pad-bt-40 bg-white bg-pattern-bottom-left"
      >
        <div className="scontainer">
          <div className="line">
            <div className="x:scol-12">
              <div className="gallery">
                <div className="line">{this.createItems()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery
