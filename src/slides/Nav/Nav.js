import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";

import { socialLinks, resumePDF } from "../../content/content";

const Nav = props => (
  <Sidebar>
    <header role="banner">
      <Brand>
        <li>
          <a href="#intro" data-smoothscroll data-scrollspy>
            <Logo>
              Doug
              <br />
              mack
              <br />
              nz
            </Logo>
          </a>
        </li>
      </Brand>
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

const Brand = styled.ul`
  margin: 0;
  padding: 0;

  > li {
    position: relative;
    display: block;
    text-align: center;
    padding: 4rem 0;
    opacity: 0.7;
    transition: all 0.2s;
    filter: gray;
    webkit-filter: grayscale(1);
    filter: grayscale(1);

    img {
      height: 7.8125rem;
    }

    &.active,
    :hover {
      opacity: 1;
      -webkit-filter: grayscale(0);
      filter: none;
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.color.primary};
    }
  }
`;

const Logo = styled.div`
  display: inline-block;
  width: 125px;
  height: 125px;
  background-color: ${props => props.theme.color.highlight};
  font-family: ${props => props.theme.font.heading};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 26px;
  letter-spacing: 2px;
  padding: 16px 0;
  line-height: 32px;
`;

const NavList = styled.ul`
  font-family: ${props => props.theme.font.heading};
  list-style-type: none;
  padding: 0;
  margin: 0;

  > li {
    position: relative;
    padding: 0.65rem 3rem;

    > a {
      color: #fff;
      opacity: 0.7;
      text-decoration: none;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      transition: all 0.2s;

      :hover {
        opacity: 1;
      }
    }

    &.active > a {
      opacity: 1;
      color: ${props => props.theme.color.highlight};
      // margin-left: 0.5rem;
    }
  }
`;

const BottomSection = styled.div`
  width: 100%;
  position: absolute;
  bottom: 1.5rem;
  text-align: center;
`;

const SocialList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: block;
  text-align: center;
  margin-top: 2rem;

  > li {
    display: inline-block;
    margin: 0 0.75rem;

    > a {
      color: #fff;
      opacity: 0.7;
      text-decoration: none;
      font-size: 1.5rem;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default Nav;
