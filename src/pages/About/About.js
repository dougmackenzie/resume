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

      <Grid>
        <Column style={{ flexGrow: 3, marginRight: "1.5rem" }}>
          <div className="wow animated fadeIn">{aboutText}</div>

          <Infolets>
            {stats.map((infoRow, rowIndex) => (
              <Grid key={rowIndex}>
                {infoRow.map((info, index) => {
                  const content = (
                    <Column key={`${rowIndex}-${index}`}>
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
            ))}
          </Infolets>
        </Column>

        <Column
          className="wow animated fadeInRight"
          style={{ textAlign: "center", marginLeft: "1.5rem" }}
        >
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
        </Column>
      </Grid>
    </Section>
  );
};

const AboutSection = styled.div`
  font-size: 15px;
  margin: 0;
  font-weight: 400;
  border-left: 3px solid #f6921e;
  padding-left: 1rem;

  @media (min-width: 769px) {
    margin: 0 0 10px;
  }
`;

const AboutSubHeading = styled.h4`
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;
  color: #666;
  margin: 0 0 2px;
  letter-spacing: 1px;
`;

const Caption = styled.div`
  font-size: 13px;
  text-align: center;
`;

const Infolets = styled.div`
  margin-bottom: 40px;
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
