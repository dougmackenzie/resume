import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../pages/Nav/Nav";
import Intro from "../pages/Intro/Intro";
import About from "../pages/About/About";
import History from "../pages/History/History";
import Contact from "../pages/Contact/Contact";

const Content = styled.div`
  padding-left: 300px;
  float: left;
  width: 100%;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Nav />
    <Content>
      <Intro id="intro" />
      <About id="about" />
      <History id="work" />
      <Contact id="contact" />
    </Content>
  </Layout>
);

export default IndexPage;
