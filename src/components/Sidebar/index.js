import React from "react"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements"
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon toggle={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/' onClick={toggle}>
            Anasayfa
          </SidebarLink>
          <SidebarLink to='about' onClick={toggle}>
            Hakkımızda
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
            Hizmetlerimiz
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            İletişim
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
