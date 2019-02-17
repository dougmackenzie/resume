import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../pages/Intro/Intro";
import About from "../pages/About/About";
import History from "../pages/History/History";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
    <About />
    <History />
  </Layout>
);

export default IndexPage;
