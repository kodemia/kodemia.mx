// Packages
import { Component } from 'react'

class ButtonTop extends Component {
  _scrollTopTop(duration = 500) {
    const scrollStep = -window.scrollY / (duration / 15),
      scrollInterval = setInterval(() => {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep)
        } else clearInterval(scrollInterval)
      }, 15)
  }

  render() {
    return (
      <div className="btn-to-top">
        <a onClick={() => this._scrollTopTop(500)}>
          <i className="fas fa-chevron-up" />
        </a>
      </div>
    )
  }
}

export default ButtonTop
