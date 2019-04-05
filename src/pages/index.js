import React from "react";
import styled from "styled-components";
import SmoothScroll from "smooth-scroll";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../pages/Nav/Nav";
import Intro from "../pages/Intro/Intro";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import History from "../pages/History/History";
import Contact from "../pages/Contact/Contact";

const Content = styled.div`
  width: 100%;
  transition: padding 0.2s;

  @media (min-width: 769px) {
    padding-left: 300px;
  }
`;

const IndexPage = () => {
  React.useEffect(() => {
    var scroll = new SmoothScroll("a[data-scroll]");
  }, []);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Nav />
      <Content>
        <Intro id="intro" />
        <About id="about" />
        <Skills id="skills" />
        <History id="work" />
        <Contact id="contact" />
      </Content>
    </Layout>
  );
};

export default IndexPage;
