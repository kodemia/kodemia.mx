import React from 'react'
import Link from 'next/link'
import moment from 'moment'

const classCard = props => {
  const {
    isAlt = false,
    mentor = '',
    date,
    description,
    playbackId,
    thumbnail,
    title,
    vimeoId
  } = props

  const id = playbackId || vimeoId
  const isVimeo = !!vimeoId

  const formattedDate = moment(date).format('DD/MMMM/YY')

  return (
    <div className={`blog-card ${isAlt ? 'alt' : ''}`}>
      <div className="meta">
        <div
          className="photo"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
        <ul className="details">
          <li className="author">
            <a href="#">{mentor}</a>
          </li>
          <li className="date">{formattedDate}</li>
        </ul>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h4>{formattedDate}</h4>
        <p>{description}</p>
        <p className="read-more">
          <Link href={{ pathname: '/clase', query: { id, title, isVimeo } }}>
            {/* Change this to custom router and to slug */}
            <a>Ver clase</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default classCard
