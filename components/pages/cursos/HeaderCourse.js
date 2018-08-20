const HeaderCourse = ({ children, white }) => (
  <section id="header">
    <div
      className={
        'header-course x:pad-bt-20 s:pad-bt-50 ' + (white ? 'white' : null)
      }
    >
      <div className="table">
        <div className="cell">
          <div className="scontainer">
            <div className="line">
              <div className="x:scol-12 x:center">
                <div className="content">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeaderCourse
