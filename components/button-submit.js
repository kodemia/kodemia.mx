const Button = props => (
  <button {...props}>
    {props.children}
    <style jsx>{`
      button {
        background-color: #000;
        color: #fff;
        border: 1px solid transparent;
        padding: 0 25px;
        display: inline-flex;
        border-radius: 3px;
        height: 40px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        transition: 0.3s;
      }

      button:hover {
        background-color: #fff;
        border-color: #000;
        color: #000;
      }
    `}</style>
  </button>
)

export default Button
