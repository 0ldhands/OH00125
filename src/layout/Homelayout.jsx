import Content from '../component/Homecomponent/Content.jsx'
import Footer from '../component/Footer'
import Greet from '../component/Homecomponent/Greet.jsx'
import Header from '../component/Header'
import Profile from '../component/Homecomponent/Profile.jsx'

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