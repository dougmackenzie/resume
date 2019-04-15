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

import butterflyImage from "../../images/about/butterfly.jpg";
import vivianImage from "../../images/about/vvn.jpg";

const infolets = [
  [
    {
      label: "Location",
      value: "Melbourne, Australia"
    },
    {
      label: "Years in Development",
      value: "10"
    }
  ],
  [
    {
      label: "Preferred Dev Environment",
      value: <>Ubuntu &bull; VSCode</>
    },
    {
      label: "Preferred Stack",
      value: <>React &bull; Styled Components</>
    }
  ],
  [
    {
      label: "Favourite TV Show",
      value: "Arrested Development"
    },
    {
      label: "Hobbies",
      value: <>Bass Guitar &bull; Gymnastics &bull; Cycling</>
    }
  ]
];

const stats = [
  {
    value: "10",
    label: "Years in Development"
  },
  {
    value: "10000",
    label: "Lines of code written"
  },
  {
    value: "1006",
    label: "Contributions on GitHub"
  }
];

const images = [
  {
    image: butterflyImage,
    alt: "",
    caption: "I live in Melbourne - the land of street art"
  },
  {
    image: vivianImage,
    alt: "",
    caption: "I have a partner in crime - Vivian"
  }
];

const About = props => {
  React.useEffect(() => {
    // Init slider
    new Swiper("[data-slider]", {
      pagination: {
        el: "[data-swiper-pagination]",
        clickable: true
      }
    });

    // Count the fun facts up from 0 when this section appears
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
        <SectionTitle>About me</SectionTitle>
        <SectionSubTitle>What I'm all about</SectionSubTitle>
      </SectionHeader>

      <Grid>
        <Column style={{ flexGrow: 3 }}>
          <FeatureText>
            I like problem solving and making software{" "}
            <FeatureTextHighlight>less painful for people</FeatureTextHighlight>
            .
          </FeatureText>

          <SupportingText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta
            massa non felis rhoncus placerat. Morbi leo arcu, sollicitudin eget
            sapien ac, elementum ornare magna. Aliquam eu blandit nunc, at
            blandit risus. Aliquam vel sem diam. Phasellus id condimentum
            tellus. Cras eu augue est. Phasellus a purus nulla.
          </SupportingText>

          <Infolets>
            {infolets.map((infoRow, rowIndex) => (
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
            {stats.map((stat, index) => (
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
            style={{ width: "500px", paddingBottom: "18px" }}
          >
            <div className="swiper-wrapper">
              {images.map((image, index) => (
                <div className="swiper-slide" key={index}>
                  <img src={image.image} alt={image.alt} />
                </div>
              ))}
            </div>
            <div
              className="swiper-pagination"
              data-swiper-pagination
              style={{ bottom: "0" }}
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
  text-align: center;
  position: relative;

  @media (min-width: 769px) {
    &:nth-child(1n + 2):before {
      content: "";
      position: absolute;
      left: 0;
      top: calc(50% - 15px);
      height: 30px;
      width: 2px;
      border-left: medium double #ccc;
    }
  }
`;

const FactValue = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const FactLabel = styled.div`
  font-size: 14px;
`;

export default About;
