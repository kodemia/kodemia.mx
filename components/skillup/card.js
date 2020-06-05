import React, { Component } from 'react'
import Link from 'next/link'
class Card extends Component {
  constructor(props) {
    super(props)
    this.handleVideoClick = this.handleVideoClick.bind(this)
  }

  handleVideoClick(event) {
    event.stopPropagation()
    let modal = document.querySelector('.modal-video')
    let video = document.querySelector('#mentor-video')
    let videoUrl = video.getAttribute('src')
    video.setAttribute('src', videoUrl + '&autoplay=1')
    modal.classList.contains('shown')
      ? modal.classList.remove('shown')
      : modal.classList.add('shown')
  }

  render() {
    const { courseKey } = this.props
    return (
      <div className="x:scol-12 d-flex align-items-stretch m:scol-4">
        <div className="skillup-card">
          <div className="mentor-wrapper">
            <div className="mentor-grade backlight  backlight-black-2">
              {this.props.mentorExpertise}
            </div>
            <div
              style={{ backgroundImage: `url(${this.props.mentorPic})` }}
              className="mentor-video"
              onClick={this.handleVideoClick}
            />
            <div />
            <p className="mentor-name text-center">{this.props.mentorName}</p>
          </div>
          <div className="skillup-wrapper d-flex flex-direction-column justify-content-between">
            <div
              className={
                'skillup-category backlight text-center text-black-2 ' +
                this.props.backlightClass
              }
            >
              {this.props.category}
            </div>
            <h4 className="skillup-name">{this.props.name}</h4>
            <div className="d-flex justify-content-between">
              <div className="skillup-difficulty">
                <div className="meter">
                  <span
                    className={`${
                      this.props.level === 'Básico' ? 'basic' : ''
                    } ${
                      this.props.level === 'Intermedio' ? 'intermediate' : ''
                    } ${this.props.level === 'Avanzado' ? 'advanced' : ''}`}
                  />
                </div>
                <label>{this.props.level}</label>
              </div>
              <div className="skillup-length">{this.props.duration} hrs</div>
            </div>
            <div className="skillup-description">
              {this.props.goal.length <= 100
                ? this.props.goal
                : this.props.goal.substr(
                    0,
                    this.props.goal.lastIndexOf(' ', 120)
                  ) + '...'}
            </div>
            <div className="skillup-schedule-wrapper">
              <p>Horario</p>
              {this.props.schedules.map((schedule, i) => {
                return (
                  <div
                    key={i}
                    className="d-flex justify-content-between x:mrg-bottom-10 w-100"
                  >
                    <div className="skillup-days backlight backlight-gray-1">
                      {schedule.courseDays}
                    </div>
                    <div className="skillup-schedule backlight backlight-gray-1">
                      {schedule.courseSchedule}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="skillup-overlay">
              <Link
                key={this.props.courseKey}
                href={{
                  pathname: '/skillup-detail',
                  query: { courseKey }
                }}
              >
                <a>
                  <div className="btn skillup-btn btn-outline-cyan text-white">
                    Explorar Curso
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card