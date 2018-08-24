// Package
import React, { Component } from 'react'
import asset from 'next/asset'

// Ours
import MentorsList from '../../../config/mentors'

class Mentors extends Component {
  render() {
    return (
      <section
        id="mentores"
        className="x:pad-bt-20 s:pad-bt-40 bg-white bg-pattern-bottom-left"
      >
        <div className="scontainer">
          <div className="line">
            <div className="x:scol-12 x:mrg-bottom-20">
              <p className="x:fs-18 s:fs-20">
                Estos son solo algunos de los mentores de quienes podrás
                aprender en Kodemia, visítanos para conocerlos a todos.
              </p>
            </div>
            <div className="x:scol-12">
              <div className="line">
                {MentorsList.map((mentor, i) => (
                  <div className="x:scol-12" key={i}>
                    <div className="mentor-item">
                      <div className="line">
                        <div className="s:scol-3 x:center">
                          <div className="mentor-image">
                            <img
                              className="img-liquid"
                              src={asset('img/mentors/' + mentor.image)}
                              alt={mentor.name}
                            />
                          </div>
                        </div>
                        <div className="s:scol-9 s:pad-left-40 m:pad-left-10">
                          <p
                            className={
                              'txt-bold s:fs-22 ff-heading ' +
                              (mentor.isWoman ? 'c-pink' : '')
                            }
                          >
                            {mentor.name}
                          </p>
                          <p className="s:fs-18">{mentor.desc}</p>
                        </div>
                        <div className="x:scol-12">
                          <hr className="hr--light" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Mentors
