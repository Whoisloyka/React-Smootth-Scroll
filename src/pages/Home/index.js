import React from "react"
import ContactForm from "../../components/Contact"
import HeroSection from "../../components/Hero"
import InfoSection from "../../components/InfoSection"
import { homeObjOne, homeObjTwo } from "../../components/InfoSection/Data"
import Services from "../../components/Services"

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => {
  //   setIsOpen(!isOpen)
  // }

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      {/* <Navbar toggle={toggle} /> */}
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <ContactForm />
    </>
  )
}

export default Home
