import * as React from "react";

import Section, {
  SectionHeader,
  SectionContainer,
  SectionTitle,
  SectionSubTitle
} from "../../components/Section/Section";

import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column";
import Card, {
  CardImage,
  CardContent,
  CardTitle,
  CardSubtitle
} from "../../components/Card/Card";

const workExamples = [
  {
    title: "Open Source Work",
    date: "Feb 2019",
    blurb: "I have been contributing to some open source projects."
  },
  {
    title: "Integrating React & TypeScript",
    date: "December 2018",
    blurb:
      "I introduced a new standard for front-end development and started moving development towards it."
  },
  {
    title: "Audience Selector",
    date: "August 2018",
    blurb: "I created a new way of selecting audiences for Schoolbox."
  }
];

const Work = props => {
  return (
    <Section id={props.id} style={{ backgroundColor: "#f5f5f5" }}>
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>{props.title}</SectionTitle>
          <SectionSubTitle>{props.subtitle}</SectionSubTitle>
        </SectionHeader>
        <Grid>
          {workExamples.map((workExample, index) => (
            <Column key={index}>
              <Card>
                <CardImage>
                  <img src="https://placeimg.com/400/200/any" alt="" />
                </CardImage>
                <CardContent>
                  <CardTitle>{workExample.title}</CardTitle>
                  <CardSubtitle>{workExample.date}</CardSubtitle>
                  <p>{workExample.blurb}</p>
                </CardContent>
              </Card>
            </Column>
          ))}
        </Grid>
      </SectionContainer>
    </Section>
  );
};

export default Work;
