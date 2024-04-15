import NavBarItems from '../components/naveItems'

const items = [
  'Home',
  'Foods',
  'About'
]
function navBar () {
  return (
    <div className="container pt-5 d-flex navbar navbar-expand-lg">
      <h4 className="text-danger">FOOD<span className="text-success">ME</span></h4>
      <NavBarItems items={items} />
   

    </div>
  )
}

export default navBar