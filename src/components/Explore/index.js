import React, { useState } from "react";
import {
  ExploreCard,
  ExploreContainer,
  ExplorePreview,
  ExploreWatches,
  ExploreWrapper,
  WatchDescription,
  WatchName,
} from "./ExploreStyle";
import WatchOne from "assets/images/watch-1.jpg";
import WatchTwo from "assets/images/watchpix-5.jpg";
import WatchThree from "assets/images/watchpix-4.jpg";
import {
  Container,
  SectionTitle,
  StyledButton,
} from "components/common/CommonStyle";

const ExploreData = [
  {
    id: 1,
    name: "Rolex",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam molestiae dicta corrupti dolore iure quidem ab ipsa,dolores inventore quasi. Accusamus, perferendis! Accusantium cupiditate aliquid laboriosam dolorum expedita vitae maiores",
    image: WatchOne,
  },
  {
    id: 2,
    name: "Panerai",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam molestiae dicta corrupti dolore iure quidem ab ipsa,dolores inventore quasi",
    image: WatchTwo,
  },
  {
    id: 3,
    name: "Watch'o",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam molestiae dicta corrupti dolore iure quidem ab ipsa,dolores inventore quasi",
    image: WatchThree,
  },
];

export default function Explore() {
  const [selectedWatch, setSelectedWatch] = useState(ExploreData[0]);
  return (
    <Container>
      <ExploreWrapper id="Explore">
        <SectionTitle>Explore Watches</SectionTitle>
        <ExploreCard>
          <ExploreContainer>
            <ExploreWatches image="1">
              {ExploreData.map((data, idx) => {
                return (
                  <img
                    key={data.id}
                    src={data.image}
                    alt={`${data.name}`}
                    onClick={() => setSelectedWatch(ExploreData[idx])}
                  />
                );
              })}
            </ExploreWatches>
            <ExplorePreview>
              <img src={selectedWatch.image} alt="watch" />
            </ExplorePreview>
          </ExploreContainer>

          <div>
            <WatchName>{selectedWatch.name}</WatchName>
            <WatchDescription>{selectedWatch.description}</WatchDescription>
            <StyledButton color="#fff" bgColor="#7ed56f">
              Buy Now ⌚
            </StyledButton>
          </div>
        </ExploreCard>
      </ExploreWrapper>
    </Container>
  );
}
