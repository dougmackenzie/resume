import React from "react";
import styled from "styled-components";
import SmoothScroll from "smooth-scroll";
import Gumshoe from "gumshoejs";
import WOW from "wow.js";

import { pages } from "../content";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../pages/Nav/Nav";

const IndexPage = () => {
  React.useEffect(() => {
    new SmoothScroll("a[data-smoothscroll]");
    new Gumshoe("a[data-scrollspy]");
    new WOW().init();

    // Listen for scrollspy callback and apply active class to <a> element
    document.addEventListener(
      "gumshoeActivate",
      event => event.target.querySelector("a").classList.add("active"),
      false
    );

    // Listen for scrollspy callback and remove active class from <a> element
    document.addEventListener(
      "gumshoeDeactivate",
      event => event.target.querySelector("a").classList.remove("active"),
      false
    );
  }, []);

  return (
    <Layout>
      <SEO keywords={[`web developer`, `portfolio`, "front-end", `react`]} />
      <Nav />
      <Content role="main">
        {pages.map(page => {
          const PageComponent = page.page;
          return <PageComponent key={page.id} {...page} />;
        })}
      </Content>
    </Layout>
  );
};

const Content = styled.main`
  width: 100%;
  transition: padding 0.2s;
  overflow: hidden;

  @media (min-width: 769px) {
    padding-left: 300px;
  }
`;

export default IndexPage;
