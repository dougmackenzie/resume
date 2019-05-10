import * as React from "react";
import styled, { withTheme } from "styled-components";
import Swiper from "swiper";

import Section from "../../components/Section/Section";

import { recommendations } from "../../content/content";

const Endorsements = props => {
  React.useEffect(() => {
    // Init slider
    new Swiper("[data-slider]", {
      navigation: {
        nextEl: "[data-slider-next]",
        prevEl: "[data-slider-prev]"
      }
      // pagination: {
      //   el: "[data-swiper-pagination]",
      //   clickable: true
      // }
    });
  });

  return (
    <Section
      id={props.id}
      backgroundColor={props.theme.color.secondary}
      color="#ccc"
      noPadding
    >
      <div data-slider className="swiper-container">
        <div className="swiper-wrapper">
          {recommendations.map((recommendation, index) => (
            <SliderSlide key={index}>
              <Endorsement>
                <PortraitImage>
                  <img src={recommendation.person.photo} />
                </PortraitImage>

                <Quote>
                  {recommendation.recommendation}
                  <footer>
                    <div>{recommendation.person.name}</div>
                    <div>
                      {recommendation.person.position} &mdash;
                      {recommendation.person.company}
                    </div>
                  </footer>
                </Quote>
              </Endorsement>
            </SliderSlide>
          ))}
        </div>
        <SliderNavPrev />
        <SliderNavNext />
      </div>
    </Section>
  );
};

const Endorsement = styled.div`
  display: flex;
`;

const PortraitImage = styled.div`
  flex: 0 0 100px;
  margin-right: 1rem;
  display: none;

  > img {
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 50%;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
  }
`;

const Quote = styled.blockquote`
  font-size: 1.25rem;
  color: #fff;
  position: relative;
  margin: 0;
  padding: 0.75rem 0 0.5rem 1.5rem;

  :before {
    position: absolute;
    left: 0;
    top: 0;
    font-family: ${props => props.theme.font.heading};
    color: ${props => props.theme.color.highlight};
    content: "“";
    font-size: 8rem;
    line-height: 6rem;
    opacity: 0.2;
  }

  footer {
    font-size: 1rem;
    color: #ccc;
    margin-top: 0.75rem;
  }
`;

const SliderSlide = styled.div.attrs({
  className: "swiper-slide"
})`
  padding: 50px 20px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => !props.noPadding && `80px 50px`};
  }

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    padding: ${props => !props.noPadding && `100px `};
  }
`;

const SliderNavPrev = styled.div.attrs({
  className: "swiper-button-prev swiper-button-white",
  dataSliderPrev: true
})`
  display: none;
  left: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    display: block;
  }
`;

const SliderNavNext = styled.div.attrs({
  className: "swiper-button-next swiper-button-white",
  dataSliderNext: true
})`
  display: none;
  right: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    display: block;
  }
`;

export default withTheme(Endorsements);
