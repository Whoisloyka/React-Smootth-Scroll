import React from "react"
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksWrapper,
  FooterWrap,
  FooterLinksContainer,
} from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Hakkımızda</FooterLinkTitle>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Sosyal Medya</FooterLinkTitle>
              <FooterLink to=''>Linkedin</FooterLink>
              <FooterLink to=''>Instagram</FooterLink>
              <FooterLink to=''>Facebook</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Hakkımızda</FooterLinkTitle>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Hakkımızda</FooterLinkTitle>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
              <FooterLink to=''>Hakkımızda</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
