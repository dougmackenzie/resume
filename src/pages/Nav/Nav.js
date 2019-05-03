import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import RainbowUnderline from "../../components/RainbowUnderline/RainbowUnderline";

import { brand, socialLinks, resumePDF } from "../../content/content";

const Nav = props => (
  <Sidebar>
    <header role="banner">
      <ul style={{ margin: 0, padding: 0 }}>
        <li>
          <Brand href="#intro" data-smoothscroll data-scrollspy>
            <RainbowUnderline opacity="0.5">{brand}</RainbowUnderline>
          </Brand>
        </li>
      </ul>
    </header>
    <nav role="navigation">
      <NavList>
        {props.pages.map(page => {
          return (
            page.navTitle && (
              <li key={page.id}>
                <a href={`#${page.id}`} data-smoothscroll data-scrollspy>
                  {page.navTitle}
                </a>
              </li>
            )
          );
        })}
      </NavList>
    </nav>

    <BottomSection>
      {resumePDF && (
        <Button href={resumePDF} target="_blank" rel="noopener noreferrer">
          Download Resume
        </Button>
      )}

      <SocialList>
        {socialLinks.map((socialLink, index) => (
          <li key={index}>
            <a
              href={socialLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLink.name}
            >
              <FontAwesomeIcon icon={socialLink.icon} />
            </a>
          </li>
        ))}
      </SocialList>
    </BottomSection>
  </Sidebar>
);

const Brand = styled.a`
  position: relative;
  font-family: "Playfair Display", times, sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.85rem;
  color: #fff;
  text-align: center;
  display: block;
  text-decoration: none;
  padding: 60px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.7;
  transition: opacity 0.2s;

  &.active,
  :hover {
    opacity: 1;
  }

  &.active {
    span {
      background-size: 100% 0.2em;
    }
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 40px 0;

  > li {
    padding: 10px 50px;

    > a {
      display: block;
      color: #fff;
      opacity: 0.7;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: 0.1rem;
      transition: all 0.2s;

      :hover,
      &.active {
        opacity: 1;
      }

      &.active {
        margin-left: 10px;
      }
    }
  }
`;

const BottomSection = styled.div`
  width: 100%;
  position: absolute;
  bottom: 30px;
  text-align: center;
`;

const SocialList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: block;
  text-align: center;
  margin-top: 40px;

  > li {
    display: inline-block;
    margin: 0 10px;

    > a {
      color: #fff;
      opacity: 0.7;
      text-decoration: none;
      font-size: 24px;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default Nav;
