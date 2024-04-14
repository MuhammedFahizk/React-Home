interface Props {
    children: string,
    onclick: () => void
}
const Buttons = ({children, onclick} : Props) => {
   
  return (
    <button className="btn btn-primary m-4" onClick={onclick}>{children}</button>
  )
}


export default Buttons