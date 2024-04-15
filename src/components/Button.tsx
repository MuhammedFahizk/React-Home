interface props {
    children: string
}
const Button = ({children}: props) => {
  return (
    <button className="btn btn-outline-danger my-2">{children}</button>
  )
}

export default Button