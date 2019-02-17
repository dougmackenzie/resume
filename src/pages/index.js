import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../pages/Intro/Intro";
import About from "../pages/About/About";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
    <About />
  </Layout>
);

export default IndexPage;
