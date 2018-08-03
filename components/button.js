const Button = props => (
  <a {...props}>
    {props.children}
    <style jsx>{`
      a {
        background-color: #fff;
        color: #000;
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

      a:hover {
        background-color: #000;
        border-color: #fff;
        color: #fff;
      }
    `}</style>
  </a>
)

export default Button
