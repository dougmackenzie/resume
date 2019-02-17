import * as React from "react";
import styled from "styled-components";
import bgPattern from "../../images/bg-pattern.png";
import featureImage from "../../images/feature-image.jpg";

const IntroContainer = styled.div`
  background: #1c1e26;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
`;

const Pattern = styled(BackgroundImage)`
  background-image: url(${bgPattern});
  opacity: 0.2;
`;

const FeatureImage = styled(BackgroundImage)`
  background-image: url(${featureImage});
  background-size: cover;
  background-position: center;
  opacity: 0.2;
`;

const IntroCard = styled.div`
  z-index: 99;
`;

const IntroTitle = styled.h1`
  font-family: "Playfair Display SC", times, sans-serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 4px;
  font-size: 40px;
  color: #eee;
  margin: 0 0 10px;
  flex: 0 0 100%;
  text-align: center;
`;

const IntroSubTitle = styled.h2`
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: #ccc;
  margin: 0;
  flex: 0 0 100%;
  text-align: center;
`;

const Intro = () => (
  <IntroContainer>
    <IntroCard>
      <IntroTitle>Doug MacKenzie</IntroTitle>
      <IntroSubTitle>Front-end &amp; UI guy</IntroSubTitle>
    </IntroCard>
    <Pattern />
    <FeatureImage />
  </IntroContainer>
);

export default Intro;
