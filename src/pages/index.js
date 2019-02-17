import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../pages/Intro/Intro";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
  </Layout>
);

export default IndexPage;
