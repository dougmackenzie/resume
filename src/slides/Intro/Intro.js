import * as React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/pro-light-svg-icons";

import Section, { SectionContainer } from "../../components/Section/Section";

import { title, subtitle, socialLinks } from "../../content/content";
import bgPattern from "../../images/bg-pattern.png";

const Intro = props => {
  // Grab the ID of the next page for the down arrow link
  const nextPage = props.pages[1].id;

  return (
    <>
      {/* <FeatureImage fluid={props.featureImage} /> */}
      <Header>
        <BrandContainer>
          <Brand>DOUGMACKNZ</Brand>
        </BrandContainer>
        <SocialList>
          {socialLinks.map((socialLink, index) => (
            <li key={index}>
              <a
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLink.name}
              >
                <FontAwesomeIcon
                  icon={socialLink.icon}
                  fixedWidth
                  style={{ fontSize: "1.5rem" }}
                />
              </a>
            </li>
          ))}
        </SocialList>
      </Header>

      <IntroContainer
        id={props.id}
        Tag="section"
        fluid={props.featureImage}
        backgroundColor={`#040e18`}
      >
        <SectionContainer>
          <IntroCard>
            <IntroTitle>{title}</IntroTitle>
            <IntroSubTitle>{subtitle}</IntroSubTitle>
          </IntroCard>
        </SectionContainer>
        <DownArrow>
          <a href={`#${nextPage}`} data-smoothscroll>
            <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
          </a>
        </DownArrow>
      </IntroContainer>
    </>
  );
};

const IntroContainer = styled(BackgroundImage)`
  background: rgba(28, 30, 38);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  :before {
    opacity: 0.25 !important;
  }

  :after {
    opacity: 0;
  }
`;

const FeatureImage = styled(Img)`
  position: fixed !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const IntroCard = styled.div`
  z-index: 99;
  text-align: center;
  padding: 1rem;
`;

const IntroTitle = styled.h1`
  font-family: ${props => props.theme.font.heading};
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 3.5rem;
  color: #eee;
  margin: 0 0 1rem;
  flex: 0 0 100%;
  text-align: center;
  line-height: 1.1;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 4.125rem;
  }
}
`;

const IntroSubTitle = styled.h2`
  flex: 0 0 100%;
  font-size: 1.25rem;
  font-weight: 400;
  text-transform: lowercase;
  color: #bbb;
  text-align: center;
  margin: 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.425rem;
  }
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

const Header = styled.header`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  z-index: 99;
`;

const BrandContainer = styled.div`
  flex: 1 0 auto;
`;

const Brand = styled.div`
  color: #ddd;
  font-weight: 400;
  font-family: ${props => props.theme.font.heading};
  font-size: 1.15rem;
  letter-spacing: 1px;
  display: inline-block;
  border-top: medium double #888;
  border-bottom: medium double #888;
  padding: 0.25rem 0;
`;

const SocialList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  > li {
    display: inline-block;
    margin-right: 0.5rem;

    > a {
      color: #fff;
      opacity: 0.75;
      text-decoration: none;
      transition: opacity 0.2s;

      :hover {
        opacity: 1;
      }
    }
  }
`;

export default Intro;
