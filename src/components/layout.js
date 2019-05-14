import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "normalize.css/normalize.css";
import "./layout.css";
import "animate.css/animate.css";
import "swiper/dist/css/swiper.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <>{children}</>}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
