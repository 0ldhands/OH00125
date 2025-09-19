import Content from '../component/Content'
import Footer from '../component/Footer'
import Greet from '../component/Greet'
import Header from '../component/Header'
import Profile from '../component/Profile'

const Homelayout = () => {
  return (
    <div className='box-border'>
      <Header/>
      <Profile/>
      <Greet/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Homelayout