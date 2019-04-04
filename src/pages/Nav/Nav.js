import * as React from "react";
import styled from "styled-components";
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
      color: #ccc;
      text-decoration: none;
      font-size: 17px;
      text-transform: uppercase;
      font-weight: 300;
      letter-spacing: 2px;
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
    padding: 0 5px;

    > a {
      color: #ccc;
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
    }
  }
`;

const Nav = () => (
  <Sidebar>
    <header>
      <Brand href="#intro">@dougmacknz</Brand>
    </header>
    <nav>
      <NavList>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Skills</a>
        </li>
        <li>
          <a href="#work">History</a>
        </li>
        <li>
          <a href="#work">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@dougmacknz"
            target="_blank"
            rel="noopener"
            aria-label="Medium"
          >
            Medium
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dougmacknz"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </li>
      </SocialList>
    </BottomSection>
  </Sidebar>
);

export default Nav;
