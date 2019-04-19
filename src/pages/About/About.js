import * as React from "react";
import styled from "styled-components";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import { CountUp } from "countup.js";

import Section, {
  SectionHeader,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";

import {
  slideshowImages,
  stats,
  funFacts,
  featureText,
  supportingText
} from "../../content";

const About = props => {
  React.useEffect(() => {
    // Init slider
    new Swiper("[data-slider]", {
      pagination: {
        el: "[data-swiper-pagination]",
        clickable: true
      }
    });

    // Count the stats up from 0 when this section appears
    let animated = false;
    document.addEventListener("gumshoeActivate", event => {
      if (event.detail.content.getAttribute("id") === "about" && !animated) {
        const funFactValues = document.querySelectorAll("[data-count-up]");
        for (let funFactValue of funFactValues) {
          const countUp = new CountUp(
            funFactValue,
            funFactValue.getAttribute("data-count-up")
          );
          countUp.start();
        }

        animated = true;
      }
    });
  }, []);

  return (
    <Section id={props.id}>
      <SectionHeader>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionSubTitle>{props.subtitle}</SectionSubTitle>
      </SectionHeader>

      <Grid>
        <Column style={{ flexGrow: 3 }}>
          <FeatureText>{featureText}</FeatureText>

          <SupportingText>{supportingText}</SupportingText>

          <Infolets>
            {stats.map((infoRow, rowIndex) => (
              <Grid key={rowIndex}>
                {infoRow.map((info, index) => (
                  <AboutSection key={`${rowIndex}-${index}`}>
                    <AboutSubHeading>{info.label}</AboutSubHeading>
                    {info.value}
                  </AboutSection>
                ))}
              </Grid>
            ))}
          </Infolets>

          <Grid>
            {funFacts.map((stat, index) => (
              <Fact key={index}>
                <FactValue data-count-up={stat.value}>{stat.value}</FactValue>
                <FactLabel>{stat.label}</FactLabel>
              </Fact>
            ))}
          </Grid>
        </Column>

        <Column style={{ textAlign: "center" }}>
          <div
            data-slider
            className="swiper-container"
            style={{ width: "500px", paddingBottom: "15px" }}
          >
            <div className="swiper-wrapper">
              {slideshowImages.map((image, index) => (
                <div className="swiper-slide" key={index}>
                  <img src={image.image} alt={image.alt} />
                </div>
              ))}
            </div>
            <SwiperPagination
              className="swiper-pagination"
              data-swiper-pagination
            />
          </div>
          {/* <Caption>Captions here</Caption> */}
        </Column>
      </Grid>
    </Section>
  );
};

const FeatureText = styled.p`
  font-size: 30px;
  color: #a0a0a0;
  margin: 0 0 30px;
`;

const FeatureTextHighlight = styled.strong`
  color: #0f0e10;
  font-weight: 300;
  font-size: inherit;
`;

const SupportingText = styled.p`
  margin-bottom: 40px;
`;

const AboutSection = styled(Column)`
  font-size: 15px;
  margin: 0;
  font-weight: 300;

  @media (min-width: 769px) {
    margin: 0 0 10px;
  }
`;

const AboutSubHeading = styled.h4`
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;
  color: #999;
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

const Fact = styled(Column)`
  position: relative;
`;

const FactValue = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const FactLabel = styled.div`
  font-size: 14px;
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

export default About;
