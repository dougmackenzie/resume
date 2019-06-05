import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";

import Layout from "../components/layout";
import SEO from "../components/seo";
import theme from "../theme";

// Pages
import Intro from "../slides/Intro/Intro";
import About from "../slides/About/About";
import Skills from "../slides/Skills/Skills";
import Experience from "../slides/Experience/Experience";
import Contact from "../slides/Contact/Contact";
import Endorsements from "../slides/Endorsements/Endorsements";

require("typeface-merriweather");
require("typeface-oswald");

// Disable Font Awesome from adding CSS, we're doing it inline instead to avoid FOUC
config.autoAddCss = false;

// Import any third party libraries that use the window object
// These can't be imported with SSR because window doesn't exist
// See https://github.com/gatsbyjs/gatsby/issues/309
const isServer = typeof window === "undefined";

//let WOW;
let SmoothScroll;

if (!isServer) {
  SmoothScroll = require("smooth-scroll");
}

const pages = [
  {
    id: "intro",
    page: Intro,
    title: "Doug MacKenzie",
    subtitle: "UI Designer. Front End Developer.",
    navTitle: ""
  },
  {
    id: "about",
    page: About,
    title: "About",
    subtitle: "What I'm all about",
    navTitle: "About"
  },
  {
    id: "skills",
    page: Skills,
    title: "Skills",
    subtitle: "What I can do",
    navTitle: "Skills"
  },
  {
    id: "experience",
    page: Experience,
    title: "Experience",
    subtitle: "My employment history",
    navTitle: "Experience"
  },
  {
    id: "endorsements",
    page: Endorsements,
    title: "",
    subtitle: "",
    navTitle: ""
  },
  {
    id: "contact",
    page: Contact,
    title: "Contact",
    subtitle: "",
    navTitle: ""
  }
];

const IndexPage = props => {
  React.useEffect(() => {
    if (!isServer) {
      new SmoothScroll("a[data-smoothscroll]");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO keywords={[`web developer`, `portfolio`, "front-end", `react`]} />
        <Content role="main">
          {pages.map(page => {
            const PageComponent = page.page;
            return (
              <PageComponent
                key={page.id}
                pages={pages}
                {...page}
                featureImage={props.data.featureImage.childImageSharp.fluid}
                cssIcon={props.data.cssIcon.childImageSharp.fixed}
                jsIcon={props.data.jsIcon.childImageSharp.fixed}
                uiIcon={props.data.uiIcon.childImageSharp.fixed}
                kdsLogo={props.data.kdsLogo.childImageSharp.fixed}
                etapLogo={props.data.etapLogo.childImageSharp.fixed}
                schoolboxLogo={props.data.schoolboxLogo.childImageSharp.fixed}
                webcoLogo={props.data.webcoLogo.childImageSharp.fixed}
                mattPortrait={props.data.mattPortrait.childImageSharp.fixed}
              />
            );
          })}
        </Content>
      </Layout>
    </ThemeProvider>
  );
};

export const query = graphql`
  query {
    featureImage: file(relativePath: { eq: "feature-image-large.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1574) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cssIcon: file(relativePath: { eq: "icons/css.png" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    jsIcon: file(relativePath: { eq: "icons/javascript.png" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    uiIcon: file(relativePath: { eq: "icons/ui-design.png" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    kdsLogo: file(relativePath: { eq: "logos/kds.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    etapLogo: file(relativePath: { eq: "logos/etap.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    schoolboxLogo: file(relativePath: { eq: "logos/schoolbox.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    webcoLogo: file(relativePath: { eq: "logos/webco.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    mattPortrait: file(relativePath: { eq: "references/matt.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

const Content = styled.main`
  width: 100%;
  transition: padding 0.2s;
  overflow: hidden;
`;

export default IndexPage;
