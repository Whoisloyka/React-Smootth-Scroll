import React from "react"
import { FaBars } from "react-icons/fa"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements"
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Aşin Teknoloji</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='home'>Anasayfa</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>Hakkımızda</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Hizmetlerimiz</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>İletişim</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
