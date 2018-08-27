// Package
import React, { Component } from 'react'
import asset from 'next/asset'

// Ours
import ImagesList from '../../../config/gallery'

class Gallery extends Component {
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
                <div className="line">
                  {ImagesList.map((image, i) => (
                    <div className="s:scol-6 m:scol-4 x:pad-all-5" key={i}>
                      <div className="gallery-item">
                        <img
                          className="img-liquid"
                          src={asset(image)}
                          alt="Kodemia"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery
