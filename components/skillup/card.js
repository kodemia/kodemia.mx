import React, { Component } from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="x:scol-12 m:scol-4">
        <div className="skillup-card">
          <div className="mentor-wrapper">
            <div className="mentor-grade backlight  backlight-black-2">
              Developer
            </div>
            <div className="mentor-video" />
            <p className="mentor-name text-center">Developer Name</p>
          </div>
          <div className="skillup-wrapper d-flex flex-direction-column justify-content-between">
            <div className="skillup-category backlight backlight-yellow text-center text-black-2">
              Development
            </div>
            <h4 className="skillup-name">Redux en JavaScript</h4>
            <div className="d-flex justify-content-between">
              <div className="skillup-difficulty">
                <div className="meter">
                  <span className="intermedio" />
                </div>
                <label>Intermedio</label>
              </div>
              <div className="skillup-length">20 hrs</div>
            </div>
            <div className="skillup-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              architecto.
            </div>
            <div className="skillup-schedule-wrapper">
              <p>Horario</p>
              <div className="skillup-days backlight backlight-gray-1">
                Lun - Vie
              </div>
              <div className="skillup-schedule backlight backlight-gray-1">
                10:00 - 14:00
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
