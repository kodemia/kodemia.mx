const Browser = ({ children, white }) => (
  <div className={white ? 'browser white' : 'browser'}>
    <div className={white ? 'container white' : 'container'}>
      <div className={white ? 'top white' : 'top'}>
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
      </div>

      <div className={white ? 'content white' : 'content'}>{children}</div>
    </div>
  </div>
)

export default Browser
