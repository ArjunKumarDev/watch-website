import React from "react";
import {
  AboutContainer,
  AboutDescription,
  AboutTitle,
  AboutWrapper,
  DemoGallery,
} from "./AboutStyle";
import WatchOne from "assets/images/watchpix-5.jpg";
import WatchTwo from "assets/images/watchpix-6.jpg";
import WatchThree from "assets/images/watchpix-4.jpg";
import { Container, SectionTitle } from "components/common/CommonStyle";

export default function About() {
  return (
    <Container>
      <AboutContainer id="About">
        <SectionTitle> Classic Watches For Classic People</SectionTitle>

        <AboutWrapper>
          <div>
            <AboutTitle>
              Your'e going to fall in love with our classic watches
            </AboutTitle>
            <AboutDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              molestiae dicta corrupti dolore iure quidem ab ipsa, dolores
              inventore quasi. Accusamus, perferendis! Accusantium cupiditate
              aliquid laboriosam dolorum expedita vitae maiores.
            </AboutDescription>

            <AboutTitle>Attractive watches for you</AboutTitle>
            <AboutDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              molestiae dicta corrupti dolore iure quidem ab ipsa, dolores
              inventore quasi. Accusamus, perferendis! Accusantium cupiditate
              aliquid laboriosam dolorum expedita vitae maiores.
            </AboutDescription>
          </div>
          <DemoGallery>
            <img
              src={WatchOne}
              className="gallery__img  gallery__img--1"
              alt="home-logo"
            />
            <img
              src={WatchTwo}
              className="gallery__img gallery__img--2"
              alt="home-logo"
            />
            <img
              src={WatchThree}
              className="gallery__img gallery__img--3"
              alt="home-logo"
            />
          </DemoGallery>
        </AboutWrapper>
      </AboutContainer>
    </Container>
  );
}
