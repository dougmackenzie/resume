import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/pro-light-svg-icons";

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
  //width: 100%;
  //height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-attachment: fixed;
`;

const Pattern = styled(BackgroundImage)`
  background-image: url(${bgPattern});
  opacity: 0.3;
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
  letter-spacing: 2px;
  font-size: 40px;
  color: #eee;
  margin: 0 0 10px;
  flex: 0 0 100%;
  text-align: center;
`;

const IntroSubTitle = styled.h2`
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: #ccc;
  margin: 0;
  flex: 0 0 100%;
  text-align: center;
`;

const DownArrow = styled.div`
  position: absolute;
  bottom: 5%;
  z-index: 99;

  a {
    color: #fff;
    opacity: 0.6;
    transition: opacity 0.2s;

    :hover {
      opacity: 1;
    }
  }
`;

const Intro = props => (
  <IntroContainer id={props.id}>
    <IntroCard>
      <IntroTitle>Doug MacKenzie</IntroTitle>
      <IntroSubTitle>Front End Engineer</IntroSubTitle>
    </IntroCard>
    <DownArrow>
      <a href="#about" data-smoothscroll>
        <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
      </a>
    </DownArrow>
    <Pattern />
    <FeatureImage />
  </IntroContainer>
);

export default Intro;
