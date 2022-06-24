import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinks,
  FooterLinkTitle,
  FooterList,
  FooterTitle,
  FooterWrapper,
  SocialLinks,
} from "./FooterStyle";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Container } from "components/common/CommonStyle";

export default function Footer() {
  return (
    <FooterWrapper>
      {" "}
      <Container>
        <FooterTitle
          to="Home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          ⌚ Watch'O{" "}
        </FooterTitle>

        <FooterContainer>
          <div>
            <FooterLinkTitle to="/">Product</FooterLinkTitle>
            <FooterList>
              <FooterLinks>
                <FooterLink to="/">Download</FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLink to="/">Status</FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLink to="/">Watch'O Apps</FooterLink>
              </FooterLinks>
            </FooterList>
          </div>

          <div>
            <FooterLinkTitle to="/">Company</FooterLinkTitle>
            <FooterList>
              <FooterLinks>
                <FooterLink to="/">About</FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLink to="/">Branding</FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLink to="/">Sales</FooterLink>
              </FooterLinks>
            </FooterList>
          </div>

          <div>
            <SocialLinks>
              <BsFacebook />
              <FaInstagram />
              <AiFillTwitterCircle />
              <BsYoutube />
            </SocialLinks>
          </div>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
}
