import * as React from "react";
import styled from "styled-components";
import Swiper from "swiper";

import Section, {
  SectionHeader,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";

import { slideshowImages, stats, aboutText } from "../../content/content";

const About = props => {
  let statDelay = 0.2;

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
  }, []);

  return (
    <Section id={props.id}>
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
                <Column>
                  <AboutSection
                    className="wow animated fadeInUp"
                    data-wow-delay={`${statDelay}s`}
                    key={index}
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

        <AboutSlider className="wow animated fadeInRight">
          <div
            data-slider
            className="swiper-container"
            style={{
              width: "400px",
              boxShadow: "0 1.5rem 3rem rgba(0,0,0,.2)"
            }}
          >
            <div className="swiper-wrapper">
              {slideshowImages.map((image, index) => (
                <div
                  className="swiper-slide"
                  key={index}
                  style={{ lineHeight: 0 }}
                >
                  <img
                    src={image.image}
                    alt={image.alt}
                    style={{ width: "100%" }}
                  />
                </div>
              ))}
            </div>

            <SwiperNav
              className="swiper-button-prev swiper-button-white"
              data-slider-prev
            />
            <SwiperNav
              className="swiper-button-next swiper-button-white"
              data-slider-next
            />

            {/* <SwiperPagination
              className="swiper-pagination"
              data-swiper-pagination
            /> */}
          </div>
          {/* <Caption>Captions here</Caption> */}
        </AboutSlider>
      </AboutGrid>
    </Section>
  );
};

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

const Caption = styled.div`
  font-size: 0.8rem;
  text-align: center;
`;

const AboutGrid = styled(Grid)`
  grid-template-columns: 100% !important;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: auto 1fr !important;
  }
`;

const AboutSlider = styled(Column)`
  display: none;
  text-align: center;
  margin-left: 1.5rem;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
  }
`;

const SwiperPagination = styled.div`
  display: flex;
  bottom: 0;

  .swiper-pagination-bullet {
    flex-grow: 1;
    border-radius: 0;
    height: 4px;
    margin: 0 !important;
  }
`;

const SwiperNav = styled.div``;

export default About;
