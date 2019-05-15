import * as React from "react";
import styled, { css } from "styled-components";
import Swiper from "swiper";

import Section, {
  SectionHeader,
  SectionContainer,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";
import Slider, { Slides, Slide } from "../../components/Slider/Slider";

import { aboutImages, stats, aboutText } from "../../content/content";

const About = props => {
  let statDelay = 0.2;

  React.useEffect(() => {
    if (aboutImages.length > 1) {
      // Init slider
      new Swiper("#about-slider", {
        navigation: {
          nextEl: "[data-slider-next]",
          prevEl: "[data-slider-prev]"
        }
      });
    }
  }, []);

  return (
    <Section id={props.id}>
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>{props.title}</SectionTitle>
          <SectionSubTitle>{props.subtitle}</SectionSubTitle>
        </SectionHeader>

        <AboutGrid>
          <Column style={{ marginRight: "1.5rem" }}>
            <div className="wow animated fadeIn">{aboutText}</div>
            <Grid>
              {stats.map((info, index) => {
                const content = (
                  <Column key={index}>
                    <AboutSection
                      className="wow animated fadeInUp"
                      data-wow-delay={`${statDelay}s`}
                    >
                      <AboutSubHeading>{info.label}</AboutSubHeading>
                      {info.value}
                    </AboutSection>
                  </Column>
                );
                statDelay += 0.1;
                return content;
              })}
            </Grid>
          </Column>

          <SliderColumn className="wow animated fadeInRight">
            {aboutImages.length === 1 && (
              <SingleImage
                src={aboutImages[0].image}
                alt={aboutImages[0].alt}
              />
            )}

            {aboutImages.length > 1 && (
              <AboutSlider id="about-slider">
                <Slides>
                  {aboutImages.map((image, index) => (
                    <Slide key={index} style={{ lineHeight: 0 }}>
                      <img
                        src={image.image}
                        alt={image.alt}
                        style={{ width: "100%" }}
                      />
                    </Slide>
                  ))}
                </Slides>

                <div
                  className="swiper-button-prev swiper-button-white"
                  data-slider-prev
                />
                <div
                  className="swiper-button-next swiper-button-white"
                  data-slider-next
                />
              </AboutSlider>
            )}
            {/* <Caption>Captions here</Caption> */}
          </SliderColumn>
        </AboutGrid>
      </SectionContainer>
    </Section>
  );
};

const AboutGrid = styled(Grid)`
  -ms-grid-columns: 100% !important;
  grid-template-columns: 100% !important;

  @media (min-width: ${props =>
      props.theme.breakpoints.lg}) and (max-width: ${props =>
      props.theme.breakpoints.xl}),
    (min-width: ${props => props.theme.breakpoints.xxl}) {
    -ms-grid-columns: auto 1fr !important;
    grid-template-columns: auto 1fr !important;
  }
`;

const SliderColumn = styled(Column)`
  display: none;
  text-align: center;
  margin-left: 1.5rem;

  @media (min-width: ${props =>
      props.theme.breakpoints.lg}) and (max-width: ${props =>
      props.theme.breakpoints.xl}),
    (min-width: ${props => props.theme.breakpoints.xxl}) {
    display: block;
  }
`;

const ImageStyles = css`
  width: 400px;
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2);
`;

const AboutSlider = styled(Slider)`
  ${ImageStyles}
`;

const SingleImage = styled.img`
  ${ImageStyles}
`;

// const Caption = styled.div`
//   font-size: 0.8rem;
//   text-align: center;
// `;

// TODO: move to own component
const AboutSection = styled.div`
  font-size: 1rem;
  border-left: 4px solid ${props => props.theme.color.highlight};
  padding-left: 1rem;
`;

const AboutSubHeading = styled.h4`
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #999;
  margin: 0 0 2px;
  letter-spacing: 1px;
`;

export default About;
