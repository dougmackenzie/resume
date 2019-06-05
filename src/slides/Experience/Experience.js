import * as React from "react";
import Img from "gatsby-image";

import Section, { SectionContainer } from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

import { resumePDF, workHistory } from "../../content/content";

const About = props => {
  return (
    <Section id={props.id} backgroundColor="#fff">
      <SectionContainer>
        <Grid alignItems="center">
          <Column style={{ textAlign: "center" }} right>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center"
              }}
            >
              {workHistory.map((historyItem, index) => (
                <React.Fragment key={index}>
                  <div>
                    <Img fixed={props[historyItem.logo]} alt="" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </Column>
          <Column left>
            <div>
              <Title>Ten years in web development</Title>
              <p>
                11 years ago I studied web design &amp; development&mdash;since
                then I have worked on numerous commercial and hobby projects to
                improve user experience, internal processes, and coding
                standards.
              </p>

              <div style={{ marginTop: "1rem" }}>
                <Button
                  small
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </Column>
        </Grid>
      </SectionContainer>
    </Section>
  );
};

export default About;
