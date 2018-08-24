const HeaderCourse = ({ children, white }) => (
  <section id="header">
    <div
      className={'header x:pad-bt-20 s:pad-bt-50 ' + (white ? 'white' : null)}
    >
      <div className="table">
        <div className="cell">
          <div className="scontainer">
            <div className="line">
              <div className="x:scol-12 x:center">
                <div className="content">
                  <h1 className="x:fs-24 s:fs-30 m:fs-40">{children}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeaderCourse
