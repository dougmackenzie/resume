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

const Brand = styled.a`
  color: #fff;
  text-align: center;
  display: block;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 60px 0;
  font-weight: 300;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
      font-weight: 300;
      letter-spacing: 2px;
      -webkit-transition: opacity 0.2s;
      transition: opacity 0.2s;

      :hover {
        opacity: 1;
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
      font-size: 22px;
      font-weight: 500;
      -webkit-transition: opacity 0.2s;
      transition: opacity 0.2s;

      :hover {
        opacity: 1;
      }
    }
  }
`;

const Nav = () => (
  <Sidebar>
    <header>
      <Brand href="#intro" data-scroll>
        @dougmacknz
      </Brand>
    </header>
    <nav>
      <NavList>
        <li>
          <a href="#intro" data-scroll>
            Home
          </a>
        </li>
        <li>
          <a href="#about" data-scroll>
            About
          </a>
        </li>
        <li>
          <a href="#work" data-scroll>
            Skills
          </a>
        </li>
        <li>
          <a href="#work" data-scroll>
            History
          </a>
        </li>
        <li>
          <a href="#work" data-scroll>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" data-scroll>
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
            rel="noopener"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@dougmacknz"
            target="_blank"
            rel="noopener"
            aria-label="Medium"
          >
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dougmacknz"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </SocialList>
    </BottomSection>
  </Sidebar>
);

export default Nav;
