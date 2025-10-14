import Content from '../component/Homecomponent/Content.jsx'
import Footer from '../component/Footer'
import Greet from '../component/Homecomponent/Greet.jsx'
import Header from '../component/Header'
import Profile from '../component/Homecomponent/Profile.jsx'
import Homeintro from '../component/Overallcomponent/Homeintro.jsx'

const Homelayout = () => {
  return (
    <div className='box-border'>
      <Header/>
      <Homeintro/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Homelayout