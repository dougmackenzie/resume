import * as React from "react";
import styled from "styled-components";

import Section, {
  SectionHeader,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";

import butterflyImage from "../../images/about/butterfly.jpg";

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
      label: "Current Role",
      value: (
        <>
          Product Developer @{" "}
          <a
            href="https://www.alaress.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alaress
          </a>
        </>
      )
    },
    {
      label: "Preferred Stack",
      value: <>React &bull; TypeScript &bull; Styled Components</>
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

const About = props => {
  return (
    <Section id={props.id}>
      <SectionHeader>
        <SectionTitle>About me</SectionTitle>
        <SectionSubTitle>What I'm all about</SectionSubTitle>
      </SectionHeader>

      <Grid>
        <Column style={{ flexGrow: 3 }}>
          <FeatureText>
            I like problem solving and making software experiences{" "}
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

          {infolets.map(infoRow => (
            <Grid>
              {infoRow.map(info => (
                <AboutSection>
                  <AboutSubHeading>{info.label}</AboutSubHeading>
                  {info.value}
                </AboutSection>
              ))}
            </Grid>
          ))}
        </Column>

        <Column style={{ textAlign: "center" }}>
          <img src={butterflyImage} style={{ width: "100%" }} />
          <Caption>I'm a special butterfly</Caption>
        </Column>
      </Grid>
    </Section>
  );
};

export default About;
