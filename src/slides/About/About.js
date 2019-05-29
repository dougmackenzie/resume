import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Section, { SectionContainer } from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";
import Title from "../../components/Title/Title";

import { stats } from "../../content/content";
import featureImage from "../../images/web-design-graphic.png";

const About = props => {
  return (
    <>
      <Section id={props.id} backgroundColor="#fff">
        <SectionContainer>
          <div>
            <Grid
              alignItems="center"
              justifyItems="center"
              style={{ gridGap: "2rem 1.5rem" }}
            >
              <Column right>
                <img
                  src={featureImage}
                  alt=""
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    opacity: 1
                  }}
                />
              </Column>

              <Column left>
                <div>
                  <Title>I like making software less painful for people.</Title>
                  <p>
                    My passion is designing and building user interfaces and
                    experiences that make people's lives better.
                  </p>
                  <p>
                    I get excited about efficient code, team work, sleek design,
                    fast page loads and usability.
                  </p>
                </div>
              </Column>
            </Grid>
          </div>
        </SectionContainer>
      </Section>

      <Section style={{ backgroundColor: "#f5f5f5" }}>
        <SectionContainer condensed>
          <Grid threes style={{ justifyItems: "left", gridGap: "2rem 1.5rem" }}>
            {stats.map((info, index) => (
              <Column key={index}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0"
                  }}
                >
                  <FontAwesomeIcon
                    icon={info.icon}
                    fixedWidth
                    style={{ fontSize: "2rem", marginRight: "1.25rem" }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: `"Oswald", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
                        textTransform: "uppercase",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#333",
                        lineHeight: 1,
                        margin: "0 0 0.675rem"
                      }}
                    >
                      {info.label}
                    </div>
                    <div style={{ lineHeight: 1, fontSize: "0.875rem" }}>
                      {info.value}
                    </div>
                  </div>
                </div>
              </Column>
            ))}
          </Grid>
        </SectionContainer>
      </Section>
    </>
  );
};

export default About;
