const Logo = () => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.0">
    <defs />
    <rect width={1024} height={1024} />
    <circle className="bg" cx={512} cy="520.46" r={425} />
    <polyline
      className="icon"
      points="460.25 662.97 237.05 520.45 464.73 461.75 464.69 492.86 312.84 531.5 469.21 631.15 546.93 360.79 796.61 520.28 568.75 579.09 568.74 547.95 720.82 509.25 564.45 409.6 486.87 679.95 465.94 666.6"
    />
    <style jsx>{`
      .bg {
        fill: #fff;
      }

      .icon {
        fill: #000;
      }

      .light .bg {
        fill: #000;
      }

      .light .icon {
        fill: #fff;
      }
    `}</style>
  </svg>
)

export default Logo
