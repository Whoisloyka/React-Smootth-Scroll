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
  FooterBottom,
  FooterBottomText,
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
                <span>
                  <BsLinkedin />
                  &nbsp; Linkedin
                </span>
              </FooterLink>
              <FooterLink to=''>
                <span>
                  <BsInstagram />
                  &nbsp; Instagram
                </span>
              </FooterLink>
              <FooterLink to=''>
                <span>
                  <BsFacebook />
                  &nbsp;Facebook
                </span>
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <FooterBottom>
          <hr
            style={{
              color: "white",
              backgroundColor: "white",
              width: "100%",
              height: "1px",
            }}
          />
          <FooterBottomText>
            Aşin Teknoloji 2022 Tüm Hakları Saklıdır.
          </FooterBottomText>
        </FooterBottom>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
