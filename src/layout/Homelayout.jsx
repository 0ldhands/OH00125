import Greet from '../component/Greet'
import Header from '../component/Header'
import Profile from '../component/profile'

const Homelayout = () => {
  return (
    <div className='box-border'>
      <Header/>
      <Profile/>
      <Greet/>
    </div>
  )
}

export default Homelayout