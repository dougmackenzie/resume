import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../pages/Intro/Intro";
import About from "../pages/About/About";
import History from "../pages/History/History";
import Contact from "../pages/Contact/Contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
    <About />
    <History />
    <Contact />
  </Layout>
);

export default IndexPage;
