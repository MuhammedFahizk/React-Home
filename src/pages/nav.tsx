import NavBarItems from '../components/naveItems'

const items = [
  'Home',
  'Foods',
  'About'
]
interface Props{
  section: number;
}
function NavBar ({section}: Props) {
  return (
    <div className="container pt-5 d-flex navbar bg-dark rounded px-4 fixed-top navbar-expand-lg">
      <h4 className="text-danger">FOOD<span className="text-success">ME</span></h4>
      <NavBarItems section={section} items={items} />
   

    </div>
  )
}

export default NavBar