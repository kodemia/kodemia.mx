const Cursor = ({ children, white }) => (
  <span className={white ? 'cursor white' : 'cursor'}>{children}</span>
)

export default Cursor
