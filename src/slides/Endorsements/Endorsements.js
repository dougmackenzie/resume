import * as React from "react";
import styled, { withTheme } from "styled-components";
import Swiper from "swiper";

import Section, { SectionContainer } from "../../components/Section/Section";
import Slider, {
  Slides,
  Slide,
  SliderPagination
} from "../../components/Slider/Slider";

import { recommendations } from "../../content/content";

const Endorsements = props => {
  React.useEffect(() => {
    // Init slider
    new Swiper("#reference-slider", {
      pagination: {
        el: "[data-slider-pagination]",
        clickable: true
      }
    });
  }, []);

  return (
    <Section
      id={props.id}
      backgroundColor={props.theme.color.secondary}
      color="#ccc"
      noPadding
    >
      <SectionContainer>
        <Slider className="wow animated fadeIn" id="reference-slider">
          <Slides>
            {recommendations.map((recommendation, index) => (
              <Slide key={index} padded>
                <Endorsement>
                  <PortraitImage>
                    <img src={recommendation.person.photo} alt="" />
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
              </Slide>
            ))}
          </Slides>
          <SliderPagination />
        </Slider>
      </SectionContainer>
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
    opacity: 0.25;
  }

  footer {
    font-size: 1rem;
    color: #ccc;
    margin-top: 0.75rem;
  }
`;

export default withTheme(Endorsements);
