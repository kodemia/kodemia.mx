// Packages
import { Component } from 'react'

// Ours
// ...

class HeaderCourse extends Component {
  render() {
    const { children, title = '...', desc = '...' } = this.props

    return (
      <section id="header">
        <div className="header-course x:pad-bt-20 s:pad-bt-50">
          <div className="table">
            <div className="cell">
              <div className="scontainer">
                <div className="line">
                  <div className="x:scol-12 x:center">{children}</div>
                  <div className="x:scol-12 x:center">
                    <div className="content">
                      <h1 className="title x:fs-22 s:fs-30 l:fs-40 c-white">
                        {title}
                      </h1>
                      <p className="desc x:fs-14 s:fs-18 l:fs-20 x:mrg-top-20 c-grey-400">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HeaderCourse
