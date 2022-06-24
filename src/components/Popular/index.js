import React from "react";
import {
  CardBack,
  CardContainer,
  CardDetails,
  CardFront,
  CardHeading,
  CardHeadingSpan,
  CardItem,
  CardList,
  CardPicture,
  CtaCard,
  CtaPriceBox,
  CtaPriceText,
  CtaPriceValue,
  PopularCard,
  PopularCardInner,
  PopularWrapper,
} from "./PopularStyle";
import {
  Container,
  SectionTitle,
  StyledButton,
} from "components/common/CommonStyle";
import { watchesData } from "./WatchesData";
export default function Popular() {
  return (
    <Container id="Popular">
      <PopularWrapper>
        <SectionTitle>Popular Watches</SectionTitle>
        <CardContainer>
          {watchesData.map((data, idx) => {
            return (
              <PopularCard>
                <PopularCardInner>
                  <CardFront className="flip__card">
                    <CardPicture className={`card__picture--${idx + 1}`}>
                      &nbsp;
                    </CardPicture>
                    <CardDetails>
                      <CardHeading>
                        <CardHeadingSpan
                          className={`card__heading-span--${idx + 1}`}
                        >
                          {data.name}
                        </CardHeadingSpan>
                      </CardHeading>
                      <CardList>
                        {data.specifications.map((item) => {
                          return (
                            <CardItem key={item.id}>
                              {item.specification}
                            </CardItem>
                          );
                        })}
                      </CardList>
                    </CardDetails>
                  </CardFront>
                  <CardBack className={`flip__card card__back--${idx + 1}`}>
                    <CtaCard>
                      <CtaPriceBox>
                        <CtaPriceText>Only</CtaPriceText>
                        <CtaPriceValue>{data.price}</CtaPriceValue>
                        <StyledButton bgColor="#fff" color="#777">
                          Buy Now ⌚
                        </StyledButton>
                      </CtaPriceBox>
                    </CtaCard>
                  </CardBack>
                </PopularCardInner>
              </PopularCard>
            );
          })}
        </CardContainer>
      </PopularWrapper>
    </Container>
  );
}
