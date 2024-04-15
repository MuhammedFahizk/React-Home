import Heading from '../components/Heading'
import RightSide from '../components/RightSide'
const Home = () => {
  return (
    <div className=" row py-5 ps-4   col-12 d-flex">
      <Heading />
      <RightSide/>
      <div className='px-5 py-3'>
      <hr />
      </div>
    </div>
  )
}

export default Home