import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium
} from "@fortawesome/fontawesome-free-brands";

import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";

const Nav = () => (
  <Sidebar>
    <header role="banner">
      <ul style={{ margin: 0, padding: 0 }}>
        <li>
          <Brand href="#intro" data-smoothscroll data-scrollspy>
            dougmacknz
          </Brand>
        </li>
      </ul>
    </header>
    <nav role="navigation">
      <NavList>
        <li>
          <a href="#about" data-smoothscroll data-scrollspy>
            About
          </a>
        </li>
        <li>
          <a href="#skills" data-smoothscroll data-scrollspy>
            Skills
          </a>
        </li>
        <li>
          <a href="#history" data-smoothscroll data-scrollspy>
            History
          </a>
        </li>
        <li>
          <a href="#work" data-smoothscroll data-scrollspy>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" data-smoothscroll data-scrollspy>
            Contact
          </a>
        </li>
      </NavList>
    </nav>

    <BottomSection>
      <Button href="#">Download Resume</Button>

      <SocialList>
        <li>
          <a
            href="https://github.com/dougmacknz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@dougmacknz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dougmacknz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
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

  &.active {
    opacity: 1;
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
      font-size: 17px;
      text-transform: uppercase;
      font-weight: 400;
      letter-spacing: 2px;
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
    padding: 0 10px;

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
