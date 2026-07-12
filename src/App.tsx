import HeroSectionBottom from './AppComponants/HeroSectionBottom'
import HeroSectionSIdeNavbar from './AppComponants/HeroSectionSIdeNavbar'
import Navbar from './AppComponants/Navbar'

const App = () => {
  return (
    <>
    <div className='px-5 pt-5  gap-2 flex flex-col h-screen '>
      <Navbar />
      <HeroSectionSIdeNavbar /> 
    </div>
    </>
  )
}

export default App
