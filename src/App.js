import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Covid19 from "./pages/KVKK/Covid19"
import { useState } from "react"
import CookiePolicy from "./pages/KVKK/CookiePolicy"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import GenaralClarification from "./pages/KVKK/GenaralClarification"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Covid19' element={<Covid19 />} />
        <Route path='/CookiePolicy' element={<CookiePolicy />} />
        <Route
          path='/GenaralClarification'
          element={<GenaralClarification />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
