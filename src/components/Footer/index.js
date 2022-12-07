import React from "react"
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"
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
              <FooterLinkTitle>KVKK</FooterLinkTitle>
              <FooterLink to='/Covid19'>
                Covid 19 Bilgilendirme Metni
              </FooterLink>
              <FooterLink to='/CookiePolicy'>Çerez Politikası</FooterLink>
              <FooterLink to='/GenaralClarification'>
                Genel Aydınlatma Metni
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Sosyal Medya</FooterLinkTitle>
              <FooterLink to=''>
                <BsLinkedin />
                Linkedin
              </FooterLink>
              <FooterLink to=''>
                <BsInstagram />
                Instagram
              </FooterLink>
              <FooterLink to=''>
                <BsFacebook />
                Facebook
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
