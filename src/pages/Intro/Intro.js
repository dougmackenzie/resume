import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/pro-light-svg-icons";

import { title, subtitle } from "../../content/content";

import bgPattern from "../../images/bg-pattern.png";
import featureImage from "../../images/feature-image.jpg";
import logo from "../../images/logo.png";
import portrait from "../../images/portrait.png";

const Intro = props => {
  // Grab the ID of the next page for the down arrow link
  const nextPage = props.pages[1].id;

  return (
    <IntroContainer id={props.id}>
      <IntroCard>
        {/* <img src={logo} style={{ opacity: "0.5" }} /> */}
        {/* <img
          src={portrait}
          style={{
            borderRadius: "50%",
            border: "2px solid #ccc",
            width: "175px"
          }}
        /> */}
        <IntroTitle>{title}</IntroTitle>
        <IntroSubTitle>{subtitle}</IntroSubTitle>
      </IntroCard>
      <DownArrow>
        <a href={`#${nextPage}`} data-smoothscroll>
          <FontAwesomeIcon
            icon={faAngleDoubleDown}
            size="2x"
            className="animated fadeInDown infinite delay-2s"
          />
        </a>
      </DownArrow>
      <Pattern />
      <FeatureImage />
    </IntroContainer>
  );
};

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
  text-align: center;
`;

const IntroTitle = styled.h1`
  font-family: "Oswald", Arial, serif;
  font-weight: 400;
  letter-spacing: 0.2rem;
  font-size: 3.75rem;
  color: #eee;
  margin: 0 0 0.3rem;
  flex: 0 0 100%;
  text-align: center;
  animation: slideIn 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) both;
}
`;

const IntroSubTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  color: #bbb;
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

export default Intro;
