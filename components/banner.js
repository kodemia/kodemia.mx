const Banner = ({ children }) => (
  <div id="banner" className="bg-blue-grey-50 x:center">
    <div className="scontainer">
      <div className="line">
        <div className="x:scol-12 x:pad-bt-5">
          <p className="ff-heading x:fs-12 s:fs-14">{children}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Banner
