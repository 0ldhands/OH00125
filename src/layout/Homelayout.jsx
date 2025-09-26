import Content from '../component/Content'
import Footer from '../component/Footer'
import Greet from '../component/Greet'
import Header from '../component/Header'
import Certificate from '../component/Homecomponent/Certificate'
import Profile from '../component/profile'
import Projectwork from "../component/Homecomponent/Projectwork"
import Education from '../component/Homecomponent/Eductaion'
import WorkExperience from '../component/Homecomponent/Workexperience'

const Homelayout = () => {
  return (
    <div className='box-border'>
      <Header/>
      <Profile/>
      <Greet/>
      <Content/>
      <Education/>
      <Certificate/>
      <WorkExperience/>
      <Projectwork/>
      <Footer/>
    </div>
  )
}

export default Homelayout